'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BRAND_TEXT = 'MAISON NERA';
const MIN_DISPLAY_MS = 2200;

const luxuryEase = [0.16, 1, 0.3, 1] as const;

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minTimer = new Promise<void>((resolve) =>
      setTimeout(resolve, MIN_DISPLAY_MS)
    );

    const fontsReady = document.fonts?.ready ?? Promise.resolve();

    Promise.all([minTimer, fontsReady]).then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-nero"
          aria-hidden="true"
        >
          {/* Top half overlay for split reveal exit */}
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-nero z-10"
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: luxuryEase }}
          />

          {/* Bottom half overlay for split reveal exit */}
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-nero z-10"
            exit={{ y: '100%' }}
            transition={{ duration: 0.8, ease: luxuryEase }}
          />

          {/* Letter-by-letter brand text */}
          <div className="relative z-20 flex flex-col items-center">
            <div className="flex overflow-hidden">
              {BRAND_TEXT.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  className="font-display tracking-[0.3em] text-crema text-fluid-3xl inline-block"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.05,
                    ease: luxuryEase,
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>

            {/* Subtle gold line expanding from center */}
            <motion.div
              className="mt-6 h-[1px] bg-oro"
              initial={{ width: 0 }}
              animate={{ width: '80px' }}
              transition={{
                duration: 0.8,
                delay: BRAND_TEXT.length * 0.05 + 0.3,
                ease: luxuryEase,
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
