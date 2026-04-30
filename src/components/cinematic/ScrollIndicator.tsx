'use client';

import { motion } from 'framer-motion';

interface Props {
  href: string;
  label: string;
}

/**
 * Minimal "EXPLORE MORE" indicator with a 1-pixel-wide vertical SVG line
 * that draws itself downward on a 2.2s loop using stroke-dashoffset.
 */
export function ScrollIndicator({ href, label }: Props) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.7, duration: 0.5 }}
      href={href}
      aria-label={label}
      data-cursor="hover"
      className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/55 hover:text-brand transition-colors"
    >
      <span className="text-[10px] uppercase tracking-[0.4em]">{label}</span>
      <svg width="2" height="56" viewBox="0 0 2 56" aria-hidden>
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="56"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          pathLength="1"
          className="scroll-line"
        />
      </svg>
    </motion.a>
  );
}
