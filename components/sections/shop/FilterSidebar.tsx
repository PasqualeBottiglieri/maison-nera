'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Category } from '@/lib/types';

/* ─────────────────────────────────────────────────────────────
   Color swatches available across the entire catalogue
   ───────────────────────────────────────────────────────────── */
const AVAILABLE_COLORS = [
  { name: 'Nero', value: '#0A0A0A' },
  { name: 'Avorio', value: '#F5F0EB' },
  { name: 'Cammello', value: '#C9A96E' },
  { name: 'Bordeaux', value: '#6B1D2A' },
  { name: 'Blu Notte', value: '#1A1A3E' },
  { name: 'Grigio', value: '#8A8A8A' },
] as const;

const AVAILABLE_SIZES = ['XS', 'S', 'M', 'L', 'XL'] as const;

/* ─────────────────────────────────────────────────────────────
   Props
   ───────────────────────────────────────────────────────────── */
interface FilterSidebarProps {
  categories: Category[];
  selectedCategory: string | null;
  selectedColors: string[];
  selectedSizes: string[];
  onCategoryChange: (slug: string | null) => void;
  onColorChange: (color: string) => void;
  onSizeChange: (size: string) => void;
  onReset: () => void;
  /** Mobile-only: controls the bottom-sheet visibility */
  isOpen?: boolean;
  /** Mobile-only: close callback */
  onClose?: () => void;
}

/* ─────────────────────────────────────────────────────────────
   Shared filter content (used for both desktop & mobile)
   ───────────────────────────────────────────────────────────── */
function FilterContent({
  categories,
  selectedCategory,
  selectedColors,
  selectedSizes,
  onCategoryChange,
  onColorChange,
  onSizeChange,
  onReset,
}: Omit<FilterSidebarProps, 'isOpen' | 'onClose'>) {
  const hasFilters =
    selectedCategory !== null ||
    selectedColors.length > 0 ||
    selectedSizes.length > 0;

  return (
    <div className="space-y-10">
      {/* ── Categories ───────────────────────────────────── */}
      <div>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-crema/40">
          Categoria
        </p>
        <ul className="space-y-2.5">
          <li>
            <button
              onClick={() => onCategoryChange(null)}
              className={cn(
                'relative font-sans text-fluid-sm transition-colors duration-300',
                selectedCategory === null
                  ? 'text-crema'
                  : 'text-crema/50 hover:text-crema/80'
              )}
            >
              Tutte
              {selectedCategory === null && (
                <motion.span
                  layoutId="category-underline"
                  className="absolute -bottom-1 left-0 h-[1px] w-full bg-oro"
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => onCategoryChange(cat.slug)}
                className={cn(
                  'relative font-sans text-fluid-sm transition-colors duration-300',
                  selectedCategory === cat.slug
                    ? 'text-crema'
                    : 'text-crema/50 hover:text-crema/80'
                )}
              >
                {cat.name}
                {selectedCategory === cat.slug && (
                  <motion.span
                    layoutId="category-underline"
                    className="absolute -bottom-1 left-0 h-[1px] w-full bg-oro"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Colors ────────────────────────────────────────── */}
      <div>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-crema/40">
          Colore
        </p>
        <div className="flex flex-wrap gap-3">
          {AVAILABLE_COLORS.map((color) => (
            <button
              key={color.name}
              onClick={() => onColorChange(color.name)}
              title={color.name}
              className={cn(
                'h-6 w-6 rounded-full transition-all duration-300',
                selectedColors.includes(color.name)
                  ? 'ring-2 ring-oro ring-offset-2 ring-offset-nero'
                  : 'ring-1 ring-crema/20 hover:ring-crema/50'
              )}
              style={{ backgroundColor: color.value }}
            />
          ))}
        </div>
      </div>

      {/* ── Sizes ─────────────────────────────────────────── */}
      <div>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-crema/40">
          Taglia
        </p>
        <div className="flex flex-wrap gap-2">
          {AVAILABLE_SIZES.map((size) => (
            <button
              key={size}
              onClick={() => onSizeChange(size)}
              className={cn(
                'flex h-9 w-12 items-center justify-center border font-sans text-[11px] uppercase tracking-[0.1em] transition-all duration-300',
                selectedSizes.includes(size)
                  ? 'border-oro bg-crema text-nero'
                  : 'border-crema/15 text-crema/60 hover:border-crema/40 hover:text-crema'
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* ── Reset ─────────────────────────────────────────── */}
      {hasFilters && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={onReset}
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-crema/40 transition-colors duration-300 hover:text-oro"
          >
            Resetta filtri
          </button>
        </motion.div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   FilterSidebar Component
   ───────────────────────────────────────────────────────────── */
export function FilterSidebar(props: FilterSidebarProps) {
  const { isOpen, onClose, ...filterProps } = props;

  return (
    <>
      {/* ── Desktop sidebar (hidden on mobile) ────────── */}
      <aside className="hidden w-64 shrink-0 lg:block">
        <FilterContent {...filterProps} />
      </aside>

      {/* ── Mobile bottom sheet ───────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-nero/80 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={onClose}
            />

            {/* Sheet */}
            <motion.div
              className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-2xl border-t border-crema/10 bg-nero-50 px-6 pb-10 pt-6 lg:hidden"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Handle + close */}
              <div className="mb-8 flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-crema/40">
                  Filtri
                </p>
                <button
                  onClick={onClose}
                  className="flex h-8 w-8 items-center justify-center text-crema/60 transition-colors duration-300 hover:text-crema"
                >
                  <X size={18} />
                </button>
              </div>

              <FilterContent {...filterProps} />

              {/* Apply button (mobile convenience) */}
              <div className="mt-10">
                <button
                  onClick={onClose}
                  className="w-full border border-crema bg-crema py-3.5 font-sans text-[10px] uppercase tracking-[0.15em] text-nero transition-all duration-500 ease-luxury hover:bg-transparent hover:text-crema"
                >
                  Mostra risultati
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
