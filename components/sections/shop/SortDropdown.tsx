'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

/* ─────────────────────────────────────────────────────────────
   Sort options
   ───────────────────────────────────────────────────────────── */
const SORT_OPTIONS = [
  { value: 'newest', label: 'Novit\u00E0' },
  { value: 'price-asc', label: 'Prezzo: crescente' },
  { value: 'price-desc', label: 'Prezzo: decrescente' },
  { value: 'name-az', label: 'Nome A-Z' },
] as const;

/* ─────────────────────────────────────────────────────────────
   Props
   ───────────────────────────────────────────────────────────── */
interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

/* ─────────────────────────────────────────────────────────────
   SortDropdown Component
   ───────────────────────────────────────────────────────────── */
export function SortDropdown({ value, onChange }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLabel =
    SORT_OPTIONS.find((opt) => opt.value === value)?.label ?? 'Novit\u00E0';

  /* Close on click outside */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleSelect(optionValue: string) {
    onChange(optionValue);
    setIsOpen(false);
  }

  return (
    <div ref={containerRef} className="relative">
      {/* ── Trigger ──────────────────────────────────── */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 font-sans text-fluid-xs text-crema/70 transition-colors duration-300 hover:text-crema"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-crema/40">
          Ordina:
        </span>
        <span>{currentLabel}</span>
        <ChevronDown
          size={14}
          className={cn(
            'transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {/* ── Dropdown ─────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 z-30 mt-3 min-w-[220px] border border-crema/10 bg-nero-50 py-1 shadow-xl"
          >
            {SORT_OPTIONS.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={cn(
                  'block w-full px-5 py-3 text-left font-sans text-fluid-xs transition-colors duration-200',
                  value === option.value
                    ? 'text-oro'
                    : 'text-crema/60 hover:bg-crema/5 hover:text-crema'
                )}
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
