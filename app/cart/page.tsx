'use client';

import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/Button';
import { MotionReveal } from '@/components/motion/MotionPrimitives';
import { CartItemRow } from '@/components/sections/cart/CartItemRow';
import { OrderSummary } from '@/components/sections/cart/OrderSummary';

export default function CartPage() {
  const { items } = useCart();

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="min-h-screen bg-nero">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <MotionReveal>
          {items.length > 0 ? (
            <>
              {/* Header */}
              <div className="mb-12">
                <h1 className="font-display text-fluid-3xl text-crema">
                  Il Tuo Carrello
                </h1>
                <p className="mt-2 text-fluid-sm text-crema/50">
                  {itemCount} {itemCount === 1 ? 'articolo' : 'articoli'}
                </p>
              </div>

              {/* Cart content */}
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Items list */}
                <div className="flex-1">
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <CartItemRow
                        key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                        item={item}
                      />
                    ))}
                  </AnimatePresence>
                </div>

                {/* Order summary sidebar */}
                <div className="w-full lg:w-96 flex-shrink-0">
                  <OrderSummary />
                </div>
              </div>
            </>
          ) : (
            /* Empty cart state */
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <ShoppingBag
                size={80}
                strokeWidth={1}
                className="text-crema/20 mb-8"
              />
              <h1 className="font-display text-fluid-3xl text-crema mb-4">
                Il tuo carrello è vuoto
              </h1>
              <p className="text-fluid-base text-crema/50 max-w-md mb-10">
                Scopri la nostra collezione di pezzi unici, realizzati con
                materiali pregiati e lavorazioni artigianali italiane.
              </p>
              <Link href="/shop">
                <Button variant="primary" size="lg">
                  Esplora la Collezione
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          )}
        </MotionReveal>
      </div>
    </main>
  );
}
