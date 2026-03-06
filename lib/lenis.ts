'use client';

import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let lenis: Lenis | null = null;

export function initLenis() {
  if (typeof window === 'undefined' || lenis) return lenis;

  gsap.registerPlugin(ScrollTrigger);

  lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis?.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return lenis;
}

export function getLenis() {
  return lenis;
}

export function destroyLenis() {
  lenis?.destroy();
  lenis = null;
}
