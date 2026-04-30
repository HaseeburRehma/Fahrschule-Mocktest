'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '@/lib/gsap';

/**
 * Wraps the entire site with Lenis-driven momentum scrolling and
 * synchronises GSAP ScrollTrigger so scroll-driven timelines stay
 * pixel-aligned with the smoothed scroll position.
 *
 * Respects `prefers-reduced-motion` — the user gets native scrolling.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // smoothTouch off — native momentum is better on mobile
      touchMultiplier: 1.5
    });
    lenisRef.current = lenis;

    // Drive Lenis from GSAP's ticker so it shares one rAF loop
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Sync ScrollTrigger to Lenis
    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
