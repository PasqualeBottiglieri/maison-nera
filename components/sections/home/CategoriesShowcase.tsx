'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { categories } from '@/lib/categories';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function CategoriesShowcase() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="Collezioni" title="Esplora per Categoria" />

        <div className="mt-12 md:mt-16">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/shop?category=${category.slug}`}
              className="group block border-t border-crema/10 last:border-b"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              data-cursor="view"
            >
              <motion.div
                className="relative overflow-hidden"
                initial={false}
                animate={{
                  paddingTop: activeIndex === index ? '2rem' : '1.5rem',
                  paddingBottom: activeIndex === index ? '2rem' : '1.5rem',
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center justify-between">
                  {/* Left — Category Name */}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span className="hidden font-mono text-fluid-xs text-crema/30 md:block">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-fluid-2xl font-light text-crema transition-colors duration-500 group-hover:text-oro">
                      {category.name}
                    </h3>
                  </div>

                  {/* Right — Count + Arrow */}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span className="font-mono text-fluid-xs text-crema/40">
                      {category.count} {category.count === 1 ? 'pezzo' : 'pezzi'}
                    </span>
                    <motion.div
                      className="text-crema/30 transition-colors duration-500 group-hover:text-oro"
                      initial={false}
                      animate={{
                        rotate: activeIndex === index ? 0 : -45,
                      }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </motion.div>
                  </div>
                </div>

                {/* Hover Image — Desktop only */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      className="pointer-events-none absolute right-16 top-1/2 hidden aspect-[4/5] w-48 -translate-y-1/2 overflow-hidden md:block"
                      initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
                      animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
                      exit={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover"
                        sizes="192px"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Mobile Thumbnail — always visible */}
                <div className="mt-4 aspect-[16/9] w-full overflow-hidden md:hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={400}
                    height={225}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 0px"
                  />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
