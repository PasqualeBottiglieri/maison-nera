'use client';

import type { Product } from '@/lib/types';
import { ProductCard } from '@/components/ui/ProductCard';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface RelatedProductsProps {
  products: Product[];
  currentProductId: string;
}

export function RelatedProducts({
  products,
  currentProductId,
}: RelatedProductsProps) {
  const currentProduct = products.find((p) => p.id === currentProductId);
  const currentCategory = currentProduct?.category;

  // Filter out the current product
  const otherProducts = products.filter((p) => p.id !== currentProductId);

  // Prefer same-category products; if fewer than 3, fill with others
  const sameCategoryProducts = otherProducts.filter(
    (p) => p.category === currentCategory,
  );

  let related: Product[];
  if (sameCategoryProducts.length >= 3) {
    related = sameCategoryProducts.slice(0, 4);
  } else {
    // Combine same-category first, then fill from other categories
    const otherCategoryProducts = otherProducts.filter(
      (p) => p.category !== currentCategory,
    );
    related = [...sameCategoryProducts, ...otherCategoryProducts].slice(0, 4);
  }

  if (related.length === 0) return null;

  return (
    <section className="mt-24 md:mt-32">
      <SectionHeading label="Potrebbe Piacerti" title="Prodotti Correlati" />

      <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory scrollbar-hide">
        {related.map((product, index) => (
          <div
            key={product.id}
            className="min-w-[280px] flex-shrink-0 snap-start lg:min-w-0 lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]"
          >
            <ProductCard product={product} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
