'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface Props {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  className?: string;
  /** How aggressively the button is pulled toward the cursor (0–1). */
  strength?: number;
  /** Activation radius in px from the button centre. */
  radius?: number;
}

/**
 * Magnetic anchor — when the cursor approaches the button it eases
 * toward the pointer. Spring-damped translate driven by Framer Motion's
 * `useMotionValue` for buttery motion. Ignored on coarse-pointer devices.
 */
export function MagneticCTA({
  href,
  children,
  variant = 'primary',
  className = '',
  strength = 0.32,
  radius = 90
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.6 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const distance = Math.hypot(dx, dy);
    if (distance < radius) {
      x.set(dx * strength);
      y.set(dy * strength);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    'focus-brand inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-colors duration-200 active:scale-[0.98]';
  const variants = {
    primary:
      'bg-brand text-black hover:shadow-glow-lg shadow-glow-soft',
    ghost:
      'border border-white/20 text-white/90 hover:border-brand hover:text-brand'
  } as const;

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={`${base} ${variants[variant]} ${className}`}
      data-cursor="hover"
    >
      {children}
    </motion.a>
  );
}
