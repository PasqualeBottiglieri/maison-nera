'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface TextRevealProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  stagger?: number;
  delay?: number;
  scrub?: boolean;
}

export function TextReveal({
  text,
  className = '',
  tag: Tag = 'h2',
  stagger = 0.02,
  delay = 0,
  scrub = false,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const chars = containerRef.current.querySelectorAll('.char');
    if (!chars.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger,
          delay,
          duration: 0.6,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            end: scrub ? 'bottom 20%' : undefined,
            scrub: scrub ? 1 : false,
            once: !scrub,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [text, stagger, delay, scrub]);

  const words = text.split(' ');

  return (
    <Tag
      ref={containerRef as React.RefObject<HTMLHeadingElement>}
      className={className}
      aria-label={text}
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split('').map((char, ci) => (
            <span
              key={`${wi}-${ci}`}
              className="char inline-block"
              aria-hidden="true"
            >
              {char}
            </span>
          ))}
          {wi < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </Tag>
  );
}
