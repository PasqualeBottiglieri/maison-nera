'use client';

import { useState } from 'react';
import { Tag } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export function OrderSummary() {
  const {
    subtotal,
    discount,
    total,
    promoCode,
    promoError,
    applyPromo,
  } = useCart();

  const [promoInput, setPromoInput] = useState('');

  const shippingCost = subtotal > 500 ? 0 : 15;
  const grandTotal = total + shippingCost;

  function handleApplyPromo(e: React.FormEvent) {
    e.preventDefault();
    if (promoInput.trim()) {
      applyPromo(promoInput.trim());
      setPromoInput('');
    }
  }

  return (
    <div className="sticky top-32 bg-nero-50 border border-crema/10 p-6">
      <h2 className="font-display text-fluid-xl text-crema mb-6">
        Riepilogo Ordine
      </h2>

      {/* Line items */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-fluid-sm text-crema/60">Subtotale</span>
          <span className="font-mono text-fluid-sm text-crema">
            {formatPrice(subtotal)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-fluid-sm text-crema/60">Spedizione</span>
          <span className="font-mono text-fluid-sm text-crema">
            {shippingCost === 0 ? 'Gratuita' : formatPrice(shippingCost)}
          </span>
        </div>

        {promoCode && discount > 0 && (
          <div className="flex items-center justify-between">
            <span className="text-fluid-sm text-crema/60">Sconto</span>
            <span className="font-mono text-fluid-sm text-oro">
              -{formatPrice(discount)}
            </span>
          </div>
        )}
      </div>

      {/* Promo code */}
      <div className="mt-6">
        {promoCode ? (
          <div className="flex items-center gap-2 text-oro text-fluid-xs">
            <Tag size={14} />
            <span>{promoCode} applicato</span>
          </div>
        ) : (
          <form onSubmit={handleApplyPromo} className="flex gap-2">
            <input
              type="text"
              value={promoInput}
              onChange={(e) => setPromoInput(e.target.value)}
              placeholder="Codice promozionale"
              className="flex-1 bg-transparent border border-crema/20 px-4 py-2 font-mono text-sm text-crema placeholder:text-crema/30 focus:border-crema/40 focus:outline-none transition-colors duration-300"
            />
            <Button
              type="submit"
              variant="secondary"
              size="sm"
            >
              Applica
            </Button>
          </form>
        )}
        {promoError && (
          <p className="mt-2 text-red-400 text-xs">{promoError}</p>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-crema/10 my-4" />

      {/* Total */}
      <div className="flex items-center justify-between mb-6">
        <span className="font-display text-fluid-lg text-crema">
          Totale
        </span>
        <span className="font-display text-fluid-lg text-crema">
          {formatPrice(grandTotal)}
        </span>
      </div>

      {/* Checkout button */}
      <Button
        variant="primary"
        size="lg"
        className="w-full"
        onClick={() => alert('Demo: checkout non disponibile')}
      >
        Procedi al Checkout
      </Button>

      {/* Security & returns info */}
      <div className="mt-4 space-y-1 text-center">
        <p className="text-fluid-xs text-crema/40">
          Pagamenti sicuri e crittografati
        </p>
        <p className="text-fluid-xs text-crema/40">
          Resi gratuiti entro 30 giorni
        </p>
      </div>
    </div>
  );
}
