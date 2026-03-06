'use client';

import { ParallaxImage } from '@/components/motion/ParallaxImage';
import { TextReveal } from '@/components/motion/TextReveal';
import { MotionReveal } from '@/components/motion/MotionPrimitives';

export function AboutHero() {
  return (
    <section className="min-h-[80vh]">
      <div className="grid min-h-[80vh] grid-cols-1 lg:grid-cols-2">
        {/* Left — Full Height Image */}
        <div className="relative min-h-[50vh] lg:min-h-[80vh]">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&q=80"
            alt="Atelier Maison Nera — il nostro laboratorio artigianale"
            className="h-full w-full"
            priority
          />
        </div>

        {/* Right — Content */}
        <div className="flex flex-col justify-center px-8 py-16 md:px-16 lg:px-20 lg:py-24">
          <MotionReveal>
            <p className="font-mono text-fluid-xs uppercase tracking-[0.2em] text-oro">
              Chi Siamo
            </p>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="my-5 h-[1px] w-16 bg-oro/40" />
          </MotionReveal>

          <TextReveal
            text="La Nostra Storia"
            tag="h1"
            className="font-display text-fluid-3xl font-light text-crema"
            delay={0.2}
          />

          <MotionReveal delay={0.4}>
            <p className="mt-8 max-w-lg font-sans text-fluid-base leading-relaxed text-crema/60">
              Maison Nera nasce nel 2018 a Milano da un&rsquo;idea tanto
              semplice quanto ambiziosa: ridefinire il concetto di lusso
              contemporaneo attraverso l&rsquo;artigianalit&agrave; italiana.
              Fondata da Elena Neri, la maison unisce la tradizione sartoriale
              delle botteghe storiche fiorentine con una visione estetica
              radicalmente moderna, creando capi che parlano al presente senza
              dimenticare le radici.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.6}>
            <p className="mt-6 max-w-lg font-sans text-fluid-base leading-relaxed text-crema/60">
              La nostra filosofia si fonda sul rispetto della materia prima e
              sulla cura ossessiva del dettaglio. Ogni tessuto viene selezionato
              personalmente nei migliori lanifici italiani, ogni cucitura
              &egrave; eseguita a mano, ogni capo &egrave; pensato per durare
              nel tempo &mdash; perch&eacute; crediamo che il vero lusso sia
              ci&ograve; che non ha bisogno di essere sostituito.
            </p>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
