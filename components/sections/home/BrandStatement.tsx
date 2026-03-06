'use client';

import { ParallaxImage } from '@/components/motion/ParallaxImage';
import { MotionReveal } from '@/components/motion/MotionPrimitives';

export function BrandStatement() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
        {/* Left — Parallax Image */}
        <div className="relative aspect-[3/4]">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
            alt="Atelier Maison Nera — artigianalità e visione"
            className="h-full w-full"
          />
        </div>

        {/* Right — Text Content */}
        <div className="flex flex-col justify-center">
          <MotionReveal>
            <blockquote className="font-display text-fluid-2xl font-light italic leading-snug text-crema">
              &ldquo;Dove l&rsquo;artigianalit&agrave; incontra la visione
              contemporanea&rdquo;
            </blockquote>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <div className="my-8 h-[1px] w-16 bg-oro/40" />
          </MotionReveal>

          <MotionReveal delay={0.4}>
            <p className="max-w-lg font-sans text-fluid-base leading-relaxed text-crema/60">
              Maison Nera nasce dalla convinzione che il lusso autentico risieda
              nel gesto sapiente dell&rsquo;artigiano e nella purezza della
              materia prima. Ogni creazione è il risultato di un dialogo tra
              tradizione sartoriale italiana e una visione estetica
              rigorosamente contemporanea &mdash; perché la vera eleganza non
              segue il tempo, lo definisce.
            </p>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
