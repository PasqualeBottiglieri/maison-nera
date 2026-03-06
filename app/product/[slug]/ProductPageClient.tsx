'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { products, getProductBySlug } from '@/lib/products';
import { ProductGallery } from '@/components/sections/product/ProductGallery';
import { ProductInfo } from '@/components/sections/product/ProductInfo';
import { RelatedProducts } from '@/components/sections/product/RelatedProducts';
import { Accordion } from '@/components/ui/Accordion';
import { MotionReveal } from '@/components/motion/MotionPrimitives';

export default function ProductPageClient() {
  const params = useParams<{ slug: string }>();
  const product = getProductBySlug(params.slug);

  /* ── Not Found ────────────────────────────────────────────── */
  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24">
        <h1 className="font-display text-fluid-2xl font-light text-crema">
          Prodotto non trovato
        </h1>
        <p className="mt-4 font-sans text-fluid-sm text-crema/50">
          Il prodotto che cerchi non esiste o non è più disponibile.
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-flex items-center gap-2 font-sans text-fluid-xs uppercase tracking-[0.15em] text-oro transition-colors hover:text-crema"
        >
          <ChevronLeft className="h-4 w-4" />
          Torna alla Collezione
        </Link>
      </div>
    );
  }

  /* ── Accordion items ──────────────────────────────────────── */
  const accordionItems = [
    {
      title: 'Descrizione',
      content: product.details || product.description,
    },
    {
      title: 'Materiali & Composizione',
      content: product.materials,
    },
    {
      title: 'Cura del Capo',
      content: product.care,
    },
  ];

  /* ── Render ───────────────────────────────────────────────── */
  return (
    <main className="bg-nero">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Product Grid: Gallery + Info */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: Gallery */}
          <MotionReveal>
            <ProductGallery
              images={product.images}
              productName={product.name}
            />
          </MotionReveal>

          {/* Right: Info */}
          <MotionReveal delay={0.15}>
            <ProductInfo product={product} />
          </MotionReveal>
        </div>

        {/* Accordion Details */}
        <MotionReveal className="mx-auto mt-16 max-w-3xl md:mt-24">
          <Accordion items={accordionItems} />
        </MotionReveal>

        {/* Related Products */}
        <RelatedProducts
          products={products}
          currentProductId={product.id}
        />
      </div>
    </main>
  );
}
