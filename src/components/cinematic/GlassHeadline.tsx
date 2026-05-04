'use client';

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionStyle
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Line {
  text: string;
  /** Renders the line with the brand-green neon treatment. */
  accent?: boolean;
}

interface Props {
  lines: Line[];
  /** Delay before the first letter starts revealing on mount. */
  startDelay?: number;
  /** Delay between letters in the same line. */
  letterStagger?: number;
}

/**
 * Premium 3D-glass headline.
 *
 *  - Whole heading tilts in 3D toward the cursor (Framer Motion springs)
 *  - A glossy shine layer follows the cursor across the letters
 *    (`background-clip: text` over a radial gradient)
 *  - Layered text-shadow stack gives each letter tactile glass depth
 *  - On hover the depth deepens and a brand-green bloom appears behind
 *  - The accent line gets a brighter electric-green shine + neon glow
 *  - Touch devices get an auto-shimmer (no cursor) every 4.5s
 *  - `prefers-reduced-motion` disables tilt + shine + glow entirely
 *
 *  The original per-letter blur-to-sharp reveal is preserved on mount.
 */
export function GlassHeadline({
  lines,
  startDelay = 0.35,
  letterStagger = 0.025
}: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [reduced, setReduced] = useState(false);
  const [coarse, setCoarse] = useState(false);

  // Normalised cursor position [-0.5, 0.5] for X and Y inside the bounding box
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xs = useSpring(x, { stiffness: 150, damping: 20, mass: 0.5 });
  const ys = useSpring(y, { stiffness: 150, damping: 20, mass: 0.5 });

  // Tilt range — feels rich but not gaudy
  const rotateX = useTransform(ys, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(xs, [-0.5, 0.5], ['-10deg', '10deg']);
  // Subtle whole-line magnetic shift toward the cursor
  const translateX = useTransform(xs, [-0.5, 0.5], ['-3px', '3px']);
  const translateY = useTransform(ys, [-0.5, 0.5], ['-2px', '2px']);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    setCoarse(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    if (reduced || coarse || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mx = (e.clientX - rect.left) / rect.width - 0.5;
    const my = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mx);
    y.set(my);
    // CSS variables drive the shine layer's gradient position
    ref.current.style.setProperty('--mx', `${(mx + 0.5) * 100}%`);
    ref.current.style.setProperty('--my', `${(my + 0.5) * 100}%`);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
    if (ref.current) {
      ref.current.style.setProperty('--mx', '50%');
      ref.current.style.setProperty('--my', '50%');
    }
  };

  const ease = [0.22, 1, 0.36, 1] as const;
  let cursor = 0;

  // Disable Framer transforms entirely under reduced-motion
  const tiltStyle: MotionStyle = reduced
    ? {}
    : {
        rotateX,
        rotateY,
        x: translateX,
        y: translateY,
        transformPerspective: 1200,
        transformStyle: 'preserve-3d'
      };

  return (
    <motion.h1
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={tiltStyle}
      className="glass-headline display uppercase font-normal leading-[0.95] text-[clamp(1.85rem,7.5vw,5.5rem)] tracking-[0.005em] text-center lg:text-left max-w-full break-words [hyphens:auto]"
      aria-label={lines.map((l) => l.text).join(' ')}
    >
      {lines.map((line, li) => (
        <span
          key={li}
          aria-hidden
          className={`glass-line ${line.accent ? 'glass-line--accent' : 'glass-line--base'} block relative`}
        >
          {/* Mount-reveal layer — letters animate in from below with blur-to-sharp.
              This is the visible "base" text that carries the 3D depth shadows. */}
          <span className="glass-base block overflow-hidden">
            {line.text.split('').map((ch, ci) => {
              const i = cursor++;
              return (
                <motion.span
                  key={`b-${li}-${ci}`}
                  className="inline-block"
                  initial={{ opacity: 0, y: '110%', filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.7,
                    ease,
                    delay: startDelay + i * letterStagger
                  }}
                >
                  {ch === ' ' ? ' ' : ch}
                </motion.span>
              );
            })}
          </span>

          {/* Shine layer — sits on top, only the gradient shows through the
              text shape (background-clip: text). Driven by --mx / --my. */}
          <span className="glass-shine absolute inset-0 pointer-events-none">
            {line.text.split('').map((ch, ci) => (
              <span key={`s-${li}-${ci}`} className="inline-block">
                {ch === ' ' ? ' ' : ch}
              </span>
            ))}
          </span>
        </span>
      ))}
    </motion.h1>
  );
}
