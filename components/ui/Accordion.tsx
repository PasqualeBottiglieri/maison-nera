'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  allowMultiple?: boolean;
}

export function Accordion({
  items,
  className,
  allowMultiple = false,
}: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndices((prev) =>
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className={cn('divide-y divide-crema/10', className)}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div key={index}>
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-oro"
              aria-expanded={isOpen}
            >
              <span className="font-sans text-fluid-sm uppercase tracking-[0.1em] text-crema">
                {item.title}
              </span>
              {isOpen ? (
                <Minus className="h-4 w-4 text-oro" />
              ) : (
                <Plus className="h-4 w-4 text-crema/40" />
              )}
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 font-sans text-fluid-sm leading-relaxed text-crema/60">
                    {item.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
