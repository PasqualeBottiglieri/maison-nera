'use client';

import { Suspense, useCallback, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '@/lib/products';
import { categories } from '@/lib/categories';
import { cn } from '@/lib/utils';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FilterSidebar } from '@/components/sections/shop/FilterSidebar';
import { SortDropdown } from '@/components/sections/shop/SortDropdown';
import { ProductGrid } from '@/components/sections/shop/ProductGrid';
import type { Product } from '@/lib/types';

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categoryFromUrl
  );
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('newest');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredAndSorted = useMemo(() => {
    let result: Product[] = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedColors.length > 0) {
      result = result.filter((p) =>
        p.colors.some((c) => selectedColors.includes(c.name))
      );
    }

    if (selectedSizes.length > 0) {
      result = result.filter((p) =>
        p.sizes.some((s) => selectedSizes.includes(s.label) && s.available)
      );
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-az':
        result.sort((a, b) => a.name.localeCompare(b.name, 'it'));
        break;
      case 'newest':
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedColors, selectedSizes, sortBy]);

  const handleCategoryChange = useCallback((slug: string | null) => {
    setSelectedCategory(slug);
  }, []);

  const handleColorChange = useCallback((color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  }, []);

  const handleSizeChange = useCallback((size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  }, []);

  const handleReset = useCallback(() => {
    setSelectedCategory(null);
    setSelectedColors([]);
    setSelectedSizes([]);
  }, []);

  const activeFilterCount =
    (selectedCategory ? 1 : 0) + selectedColors.length + selectedSizes.length;

  return (
    <>
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            label="Shop"
            title="Collezione"
            className="!mb-0"
          />
          <div className="flex items-center gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-crema/30">
              {filteredAndSorted.length}{' '}
              {filteredAndSorted.length === 1 ? 'prodotto' : 'prodotti'}
            </p>
            <span className="h-3 w-[1px] bg-crema/15" />
            <SortDropdown value={sortBy} onChange={setSortBy} />
          </div>
        </div>

        <div className="flex gap-12 lg:gap-16">
          <FilterSidebar
            categories={categories}
            selectedCategory={selectedCategory}
            selectedColors={selectedColors}
            selectedSizes={selectedSizes}
            onCategoryChange={handleCategoryChange}
            onColorChange={handleColorChange}
            onSizeChange={handleSizeChange}
            onReset={handleReset}
            isOpen={mobileFiltersOpen}
            onClose={() => setMobileFiltersOpen(false)}
          />

          <div className="min-w-0 flex-1">
            <ProductGrid products={filteredAndSorted} />
          </div>
        </div>
      </div>

      <motion.button
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => setMobileFiltersOpen(true)}
        className={cn(
          'fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2.5 border border-crema/20 bg-nero-50/95 px-6 py-3.5 shadow-2xl backdrop-blur-md transition-colors duration-300 hover:border-crema/40 lg:hidden'
        )}
      >
        <SlidersHorizontal size={16} className="text-crema/70" />
        <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-crema">
          Filtri
        </span>
        {activeFilterCount > 0 && (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-oro font-mono text-[10px] text-nero">
            {activeFilterCount}
          </span>
        )}
      </motion.button>
    </>
  );
}

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-nero pb-24 pt-32 md:pt-40">
      <Suspense
        fallback={
          <div className="flex min-h-[50vh] items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-crema/20 border-t-oro" />
          </div>
        }
      >
        <ShopContent />
      </Suspense>
    </main>
  );
}
