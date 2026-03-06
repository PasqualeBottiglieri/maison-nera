'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight } from 'lucide-react';
import { cn, formatPrice } from '@/lib/utils';
import { useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/Button';
import type { Product } from '@/lib/types';

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name ?? '');
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem(product, selectedColor, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.15em] text-crema/40">
        <Link href="/" className="transition-colors hover:text-crema/70">
          Home
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/shop" className="transition-colors hover:text-crema/70">
          Collezione
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-crema/70">{product.name}</span>
      </nav>

      {/* Product Name */}
      <div className="space-y-3">
        <h1 className="font-display text-fluid-2xl font-light text-crema">
          {product.name}
        </h1>
        <p className="font-mono text-fluid-lg text-crema/70">
          {formatPrice(product.price)}
        </p>
      </div>

      {/* Description */}
      <p className="font-sans text-fluid-sm leading-relaxed text-crema/60">
        {product.description}
      </p>

      {/* Color Selector */}
      <div className="space-y-3">
        <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-crema/50">
          Colore:{' '}
          <span className="text-crema/80">{selectedColor}</span>
        </p>
        <div className="flex items-center gap-3">
          {product.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={cn(
                'h-8 w-8 rounded-full transition-all duration-300',
                selectedColor === color.name
                  ? 'ring-2 ring-oro ring-offset-2 ring-offset-nero'
                  : 'ring-1 ring-crema/20 hover:ring-crema/50',
              )}
              style={{ backgroundColor: color.value }}
              aria-label={color.name}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Size Selector */}
      <div className="space-y-3">
        <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-crema/50">
          Taglia
        </p>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size.label}
              onClick={() => {
                if (size.available) setSelectedSize(size.label);
              }}
              disabled={!size.available}
              className={cn(
                'min-w-[48px] border px-4 py-2 font-sans text-fluid-xs transition-all duration-300',
                !size.available &&
                  'cursor-not-allowed border-crema/10 text-crema/30 line-through opacity-30',
                size.available &&
                  selectedSize !== size.label &&
                  'border-crema/20 text-crema/70 hover:border-crema',
                size.available &&
                  selectedSize === size.label &&
                  'bg-crema text-nero border-crema',
              )}
            >
              {size.label}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart */}
      <div className="space-y-4">
        <Button
          variant="primary"
          size="lg"
          className="w-full"
          disabled={!selectedSize}
          onClick={handleAddToCart}
        >
          <AnimatePresence mode="wait">
            {added ? (
              <motion.span
                key="added"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="flex items-center gap-2"
              >
                <Check className="h-4 w-4" />
                Aggiunto
              </motion.span>
            ) : (
              <motion.span
                key="add"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                {selectedSize ? 'Aggiungi al Carrello' : 'Seleziona una Taglia'}
              </motion.span>
            )}
          </AnimatePresence>
        </Button>

        {/* Shipping & Returns Info */}
        <div className="flex flex-col gap-2 border-t border-crema/10 pt-4">
          <div className="flex items-center gap-3 text-crema/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-4 w-4 flex-shrink-0"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span className="font-sans text-[11px] uppercase tracking-[0.1em]">
              Spedizione gratuita sopra i 500&euro;
            </span>
          </div>
          <div className="flex items-center gap-3 text-crema/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-4 w-4 flex-shrink-0"
            >
              <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z" />
              <path d="M12 8v4l3 3" />
            </svg>
            <span className="font-sans text-[11px] uppercase tracking-[0.1em]">
              Resi entro 30 giorni
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
