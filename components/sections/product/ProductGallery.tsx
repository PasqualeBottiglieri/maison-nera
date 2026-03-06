'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [direction, setDirection] = useState(0);

  const navigate = useCallback(
    (newIndex: number) => {
      setDirection(newIndex > selectedIndex ? 1 : -1);
      setSelectedIndex(newIndex);
    },
    [selectedIndex],
  );

  const goNext = useCallback(() => {
    const next = (selectedIndex + 1) % images.length;
    setDirection(1);
    setSelectedIndex(next);
  }, [selectedIndex, images.length]);

  const goPrev = useCallback(() => {
    const prev = (selectedIndex - 1 + images.length) % images.length;
    setDirection(-1);
    setSelectedIndex(prev);
  }, [selectedIndex, images.length]);

  const crossfadeVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 40 : -40,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -40 : 40,
    }),
  };

  return (
    <>
      {/* Main Gallery */}
      <div className="space-y-4">
        {/* Main Image */}
        <div
          className="relative aspect-[3/4] cursor-zoom-in overflow-hidden bg-nero"
          onClick={() => setLightboxOpen(true)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={selectedIndex}
              custom={direction}
              variants={crossfadeVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={images[selectedIndex]}
                alt={`${productName} - Immagine ${selectedIndex + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={selectedIndex === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail Strip */}
        <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => navigate(index)}
              className={cn(
                'relative aspect-square w-20 flex-shrink-0 overflow-hidden transition-all duration-300',
                index === selectedIndex
                  ? 'border-2 border-oro'
                  : 'border border-crema/10 hover:border-crema/30',
              )}
            >
              <Image
                src={image}
                alt={`${productName} - Miniatura ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-nero"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center text-crema/70 transition-colors hover:text-crema"
              aria-label="Chiudi"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Previous Arrow */}
            {images.length > 1 && (
              <button
                onClick={goPrev}
                className="absolute left-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-crema/50 transition-colors hover:text-crema"
                aria-label="Immagine precedente"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
            )}

            {/* Next Arrow */}
            {images.length > 1 && (
              <button
                onClick={goNext}
                className="absolute right-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-crema/50 transition-colors hover:text-crema"
                aria-label="Immagine successiva"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            )}

            {/* Lightbox Image */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={selectedIndex}
                custom={direction}
                variants={crossfadeVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-[85vh] w-[85vw] max-w-4xl"
              >
                <Image
                  src={images[selectedIndex]}
                  alt={`${productName} - Immagine ${selectedIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="85vw"
                />
              </motion.div>
            </AnimatePresence>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-fluid-xs text-crema/40">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
