'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import { MotionReveal } from '@/components/motion/MotionPrimitives';

const milestones = [
  {
    year: '2018',
    title: 'Fondazione',
    description:
      'Elena Neri fonda Maison Nera a Milano, con un piccolo atelier in Via Tortona. La prima capsule collection di soli dodici capi conquista l\u2019attenzione della stampa internazionale.',
  },
  {
    year: '2020',
    title: 'Prima Collezione',
    description:
      'Il debutto ufficiale alla Milano Fashion Week segna un punto di svolta. La collezione "Ombra e Luce" viene acclamata per la sua fusione tra minimalismo strutturale e artigianalit\u00e0 tradizionale.',
  },
  {
    year: '2022',
    title: 'Flagship Store Milano',
    description:
      'Apertura del flagship store in Via Montenapoleone, progettato dall\u2019architetto giapponese Kengo Mori. Uno spazio che unisce il rigore del design contemporaneo al calore dei materiali naturali.',
  },
  {
    year: '2024',
    title: 'Espansione Internazionale',
    description:
      'Maison Nera apre a Parigi, Londra e Tokyo. La piattaforma e-commerce raggiunge clienti in oltre quaranta Paesi, mantenendo intatta l\u2019esperienza esclusiva del marchio.',
  },
  {
    year: '2026',
    title: 'Sostenibilit\u00e0 Totale',
    description:
      'Raggiunto l\u2019obiettivo di una filiera completamente sostenibile: materiali certificati, packaging biodegradabile e carbon neutrality. Il lusso del futuro \u00e8 responsabile.',
  },
];

export function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    setIsMobile(mql.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion || !sectionRef.current || !trackRef.current)
      return;

    gsap.registerPlugin(ScrollTrigger);

    const track = trackRef.current;
    const scrollWidth = track.scrollWidth - track.offsetWidth;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, [isMobile]);

  /* ---- Mobile: vertical stacked ---- */
  if (isMobile) {
    return (
      <section className="px-6 py-24">
        <MotionReveal>
          <p className="mb-3 font-mono text-fluid-xs uppercase tracking-[0.2em] text-oro">
            Il Nostro Percorso
          </p>
          <h2 className="font-display text-fluid-3xl font-light text-crema">
            Una Storia di Eccellenza
          </h2>
          <div className="mt-4 h-[1px] w-16 bg-oro/40" />
        </MotionReveal>

        <div className="relative mt-16 space-y-16 border-l border-crema/10 pl-8">
          {milestones.map((m, i) => (
            <MotionReveal key={m.year} delay={i * 0.1}>
              <div className="relative">
                {/* Gold dot on line */}
                <div className="absolute -left-[calc(2rem+4px)] top-2 h-2 w-2 rounded-full bg-oro" />
                <span className="font-display text-fluid-2xl font-light text-crema/10">
                  {m.year}
                </span>
                <h3 className="mt-1 font-display text-fluid-xl font-light text-crema">
                  {m.title}
                </h3>
                <p className="mt-3 max-w-md font-sans text-fluid-sm leading-relaxed text-crema/60">
                  {m.description}
                </p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </section>
    );
  }

  /* ---- Desktop: horizontal scroll ---- */
  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Header — visible while pinned */}
      <div className="absolute left-0 top-0 z-10 px-12 pt-12 lg:px-20 lg:pt-20">
        <p className="font-mono text-fluid-xs uppercase tracking-[0.2em] text-oro">
          Il Nostro Percorso
        </p>
        <h2 className="mt-3 font-display text-fluid-3xl font-light text-crema">
          Una Storia di Eccellenza
        </h2>
        <div className="mt-4 h-[1px] w-16 bg-oro/40" />
      </div>

      {/* Horizontal track */}
      <div
        ref={trackRef}
        className="flex h-screen items-end"
      >
        {milestones.map((m, i) => (
          <div
            key={m.year}
            className={cn(
              'relative flex min-w-[40vw] flex-col justify-end pb-20 pl-12 pr-16 lg:pl-20 lg:pr-24',
              i === 0 && 'min-w-[45vw]'
            )}
          >
            {/* Connecting line */}
            <div className="absolute bottom-[6.5rem] left-0 right-0 h-[1px] bg-crema/10" />

            {/* Gold accent dot */}
            <div className="absolute bottom-[6.125rem] left-12 h-2 w-2 rounded-full bg-oro lg:left-20" />

            <span className="font-display text-fluid-hero font-light leading-none text-crema/10">
              {m.year}
            </span>
            <h3 className="mt-4 font-display text-fluid-xl font-light text-crema">
              {m.title}
            </h3>
            <p className="mt-4 max-w-sm font-sans text-fluid-sm leading-relaxed text-crema/60">
              {m.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
