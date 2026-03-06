'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ProductCard } from '@/components/ui/ProductCard';
import type { Product } from '@/lib/types';

/* ─────────────────────────────────────────────────────────────
   Props
   ───────────────────────────────────────────────────────────── */
interface ProductGridProps {
  products: Product[];
}

/* ─────────────────────────────────────────────────────────────
   ProductGrid Component
   ───────────────────────────────────────────────────────────── */
export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center justify-center py-32 text-center"
      >
        <p className="font-display text-fluid-xl font-light text-crema/60">
          Nessun prodotto trovato
        </p>
        <p className="mt-3 max-w-sm font-sans text-fluid-xs text-crema/30">
          Prova a modificare i filtri selezionati oppure resetta la ricerca per
          visualizzare l&apos;intera collezione.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProductCard product={product} index={index} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
