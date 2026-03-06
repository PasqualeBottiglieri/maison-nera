'use client';

import Link from 'next/link';
import { products } from '@/lib/products';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProductCard } from '@/components/ui/ProductCard';
import { MotionReveal } from '@/components/motion/MotionPrimitives';
import { Button } from '@/components/ui/Button';

export function FeaturedCollection() {
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionHeading label="Selezione" title="Pezzi Iconici" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
        {/* Row 1 */}
        {featured[0] && (
          <div className="md:col-span-7">
            <ProductCard product={featured[0]} index={0} />
          </div>
        )}
        {featured[1] && (
          <div className="md:col-span-5">
            <ProductCard product={featured[1]} index={1} />
          </div>
        )}

        {/* Row 2 */}
        {featured[2] && (
          <div className="md:col-span-5">
            <ProductCard product={featured[2]} index={2} />
          </div>
        )}
        {featured[3] && (
          <div className="md:col-span-7">
            <ProductCard product={featured[3]} index={3} />
          </div>
        )}
      </div>

      <MotionReveal className="mt-16 text-center">
        <Link href="/shop">
          <Button variant="secondary">Vedi Tutta la Collezione</Button>
        </Link>
      </MotionReveal>
    </section>
  );
}
