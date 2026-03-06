'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const luxuryEase = [0.16, 1, 0.3, 1];

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: luxuryEase }}
    >
      {children}
    </motion.div>
  );
}
