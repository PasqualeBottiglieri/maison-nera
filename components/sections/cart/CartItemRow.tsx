'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Minus, Plus, X } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { formatPrice } from '@/lib/utils';
import type { CartItem } from '@/lib/types';

interface CartItemRowProps {
  item: CartItem;
}

export function CartItemRow({ item }: CartItemRowProps) {
  const { removeItem, updateQuantity } = useCart();

  const { product, quantity, selectedColor, selectedSize } = item;
  const lineTotal = product.price * quantity;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20, height: 0, marginBottom: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-crema/10 pb-6 mb-6 last:border-b-0 last:mb-0 last:pb-0"
    >
      {/* Desktop layout */}
      <div className="hidden sm:flex items-start gap-6">
        {/* Image */}
        <Link
          href={`/product/${product.slug}`}
          className="relative w-24 h-32 flex-shrink-0 overflow-hidden bg-nero-50"
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 ease-luxury hover:scale-105"
            sizes="96px"
          />
        </Link>

        {/* Details */}
        <div className="flex-1 min-w-0">
          <Link
            href={`/product/${product.slug}`}
            className="font-display text-fluid-lg text-crema hover:text-oro transition-colors duration-300"
          >
            {product.name}
          </Link>
          <div className="mt-1 flex items-center gap-3 text-fluid-xs text-crema/50">
            <span>{selectedColor}</span>
            <span className="w-px h-3 bg-crema/20" />
            <span>{selectedSize}</span>
          </div>
        </div>

        {/* Quantity controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              updateQuantity(
                product.id,
                selectedColor,
                selectedSize,
                quantity - 1,
              )
            }
            disabled={quantity <= 1}
            className="w-8 h-8 flex items-center justify-center border border-crema/20 text-crema/60 hover:border-crema/40 hover:text-crema transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Diminuisci quantità"
          >
            <Minus size={14} />
          </button>
          <span className="w-8 text-center font-mono text-fluid-sm text-crema">
            {quantity}
          </span>
          <button
            onClick={() =>
              updateQuantity(
                product.id,
                selectedColor,
                selectedSize,
                quantity + 1,
              )
            }
            className="w-8 h-8 flex items-center justify-center border border-crema/20 text-crema/60 hover:border-crema/40 hover:text-crema transition-all duration-300"
            aria-label="Aumenta quantità"
          >
            <Plus size={14} />
          </button>
        </div>

        {/* Line total */}
        <div className="w-28 text-right font-mono text-fluid-sm text-crema">
          {formatPrice(lineTotal)}
        </div>

        {/* Remove */}
        <button
          onClick={() =>
            removeItem(product.id, selectedColor, selectedSize)
          }
          className="w-8 h-8 flex items-center justify-center text-crema/40 hover:text-crema transition-colors duration-300"
          aria-label="Rimuovi articolo"
        >
          <X size={16} />
        </button>
      </div>

      {/* Mobile layout */}
      <div className="flex sm:hidden flex-col gap-4">
        {/* Image + info row */}
        <div className="flex gap-4">
          <Link
            href={`/product/${product.slug}`}
            className="relative w-24 h-32 flex-shrink-0 overflow-hidden bg-nero-50"
          >
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              sizes="96px"
            />
          </Link>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <Link
                href={`/product/${product.slug}`}
                className="font-display text-fluid-lg text-crema hover:text-oro transition-colors duration-300"
              >
                {product.name}
              </Link>
              <button
                onClick={() =>
                  removeItem(product.id, selectedColor, selectedSize)
                }
                className="w-8 h-8 flex items-center justify-center text-crema/40 hover:text-crema transition-colors duration-300 -mr-2"
                aria-label="Rimuovi articolo"
              >
                <X size={16} />
              </button>
            </div>
            <div className="mt-1 flex items-center gap-3 text-fluid-xs text-crema/50">
              <span>{selectedColor}</span>
              <span className="w-px h-3 bg-crema/20" />
              <span>{selectedSize}</span>
            </div>
          </div>
        </div>

        {/* Quantity + price row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                updateQuantity(
                  product.id,
                  selectedColor,
                  selectedSize,
                  quantity - 1,
                )
              }
              disabled={quantity <= 1}
              className="w-8 h-8 flex items-center justify-center border border-crema/20 text-crema/60 hover:border-crema/40 hover:text-crema transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Diminuisci quantità"
            >
              <Minus size={14} />
            </button>
            <span className="w-8 text-center font-mono text-fluid-sm text-crema">
              {quantity}
            </span>
            <button
              onClick={() =>
                updateQuantity(
                  product.id,
                  selectedColor,
                  selectedSize,
                  quantity + 1,
                )
              }
              className="w-8 h-8 flex items-center justify-center border border-crema/20 text-crema/60 hover:border-crema/40 hover:text-crema transition-all duration-300"
              aria-label="Aumenta quantità"
            >
              <Plus size={14} />
            </button>
          </div>
          <span className="font-mono text-fluid-sm text-crema">
            {formatPrice(lineTotal)}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
