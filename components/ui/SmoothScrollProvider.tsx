'use client';

import { useEffect } from 'react';
import { initLenis, destroyLenis } from '@/lib/lenis';

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    initLenis();

    return () => {
      destroyLenis();
    };
  }, []);

  return <>{children}</>;
}
