'use client';

import { useEffect, useRef } from 'react';

/**
 * Subtle glowing-green dot that follows the cursor on desktop.
 * Lerps toward the mouse position for a soft, weighty feel.
 * Hidden on touch devices and when the user prefers reduced motion.
 *
 * Detects hover over interactive elements and grows when over them.
 */
export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isCoarse || reduced) return;

    const dot = dotRef.current!;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let cx = mx;
    let cy = my;
    let raf = 0;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visible) {
        dot.style.opacity = '1';
        visible = true;
      }
    };
    const onLeave = () => {
      dot.style.opacity = '0';
      visible = false;
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive =
        t.closest('a, button, [role="button"], [data-cursor="hover"]') !== null;
      dot.dataset.hover = interactive ? 'true' : 'false';
    };

    const tick = () => {
      // ease toward target
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      dot.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseover', onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" aria-hidden style={{ opacity: 0 }} />;
}
