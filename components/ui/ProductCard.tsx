'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { formatPrice } from '@/lib/utils';
import type { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
    >
      <Link
        href={`/product/${product.slug}`}
        className="group block"
        data-cursor="view"
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-nero-50">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-nero/0 transition-colors duration-500 group-hover:bg-nero/20" />
          <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-500 ease-luxury group-hover:translate-y-0">
            <span className="inline-block border border-crema/80 bg-nero/60 px-4 py-2 font-sans text-[10px] uppercase tracking-[0.2em] text-crema backdrop-blur-sm">
              Scopri
            </span>
          </div>
        </div>
        <div className="mt-4 space-y-1">
          <h3 className="font-display text-fluid-base font-light text-crema">
            {product.name}
          </h3>
          <p className="font-mono text-fluid-xs text-crema/50">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
