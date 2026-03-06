'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TextReveal } from '@/components/motion/TextReveal';
import { MotionReveal } from '@/components/motion/MotionPrimitives';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80"
        alt="Maison Nera — Alta Moda Contemporanea"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-nero/70 via-nero/30 to-nero/50" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <TextReveal
          text="MAISON NERA"
          tag="h1"
          className="text-fluid-hero font-display font-light tracking-[0.2em] text-crema"
        />

        <MotionReveal delay={0.5}>
          <p className="mt-6 font-sans text-fluid-lg uppercase tracking-[0.3em] text-crema/70">
            Alta Moda Contemporanea
          </p>
        </MotionReveal>

        <MotionReveal delay={0.8}>
          <Link href="/shop" className="mt-10">
            <Button variant="secondary" size="lg">
              Esplora la Collezione
            </Button>
          </Link>
        </MotionReveal>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-crema/40">
          Scroll
        </span>
        <motion.div
          className="h-8 w-[1px] origin-top bg-crema/30"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </motion.div>
    </section>
  );
}
