'use client';

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionStyle
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useLocale } from 'next-intl';
import { rtlLocales, type Locale } from '@/i18n/routing';

interface Line {
  text: string;
  /** Renders the line with the brand-green neon treatment. */
  accent?: boolean;
}

interface Props {
  lines: Line[];
  /** Delay before the first token starts revealing on mount. */
  startDelay?: number;
  /** Delay between tokens (letters for LTR, words for RTL). */
  letterStagger?: number;
}

/**
 * Premium 3D-glass headline.
 *
 * Tokenisation:
 *   - Each word is wrapped in an `inline-block whitespace-nowrap` span so
 *     letters within a word never break across lines (fixes long German
 *     compounds like "FÜHRERSCHEIN-THEORIE" splitting mid-word at small
 *     viewports).
 *   - For LTR locales the per-letter mount animation is preserved by
 *     wrapping each character inside the word in its own motion span.
 *   - For RTL locales (Arabic) the whole word is animated as a single
 *     unit. Splitting Arabic into per-character inline-blocks destroys
 *     the contextual ligatures and reverses the visual order.
 */
export function GlassHeadline({
  lines,
  startDelay = 0.35,
  letterStagger = 0.025
}: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [reduced, setReduced] = useState(false);
  const [coarse, setCoarse] = useState(false);
  const locale = useLocale() as Locale;
  const isRtl = rtlLocales.includes(locale);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xs = useSpring(x, { stiffness: 150, damping: 20, mass: 0.5 });
  const ys = useSpring(y, { stiffness: 150, damping: 20, mass: 0.5 });
  const rotateX = useTransform(ys, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(xs, [-0.5, 0.5], ['-10deg', '10deg']);
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
  // Cursor across tokens for staggered delay calculation.
  let cursor = 0;
  // Per-word stagger when RTL (animating words as wholes), per-letter for LTR.
  const stagger = isRtl ? Math.max(letterStagger * 4, 0.07) : letterStagger;

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

  // Split the text into word + whitespace tokens. Empty entries dropped.
  const tokenize = (text: string) =>
    text.split(/(\s+)/).filter((t) => t.length > 0);

  return (
    <motion.h1
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={tiltStyle}
      className="glass-headline display uppercase font-normal leading-[0.95] text-[clamp(1.6rem,6.5vw,5rem)] tracking-[0.005em] text-center lg:text-left max-w-full [hyphens:none]"
      aria-label={lines.map((l) => l.text).join(' ')}
    >
      {lines.map((line, li) => {
        const tokens = tokenize(line.text);
        return (
          <span
            key={li}
            aria-hidden
            className={`glass-line ${line.accent ? 'glass-line--accent' : 'glass-line--base'} block relative`}
          >
            {/* Mount-reveal layer */}
            <span className="glass-base block overflow-hidden">
              {tokens.map((tok, ti) => {
                if (/^\s+$/.test(tok)) {
                  return (
                    <span key={`b-${li}-${ti}`} className="inline-block">
                      {' '}
                    </span>
                  );
                }
                if (isRtl) {
                  const i = cursor++;
                  return (
                    <motion.span
                      key={`b-${li}-${ti}`}
                      className="inline-block whitespace-nowrap"
                      initial={{ opacity: 0, y: '110%', filter: 'blur(10px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{
                        duration: 0.7,
                        ease,
                        delay: startDelay + i * stagger
                      }}
                    >
                      {tok}
                    </motion.span>
                  );
                }
                // LTR: per-letter animation, but letters stay inside the
                // word wrapper which is itself inline-block + nowrap so the
                // word cannot break across lines.
                return (
                  <span
                    key={`b-${li}-${ti}`}
                    className="inline-block whitespace-nowrap"
                  >
                    {tok.split('').map((ch, ci) => {
                      const i = cursor++;
                      return (
                        <motion.span
                          key={`b-${li}-${ti}-${ci}`}
                          className="inline-block"
                          initial={{ opacity: 0, y: '110%', filter: 'blur(10px)' }}
                          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                          transition={{
                            duration: 0.7,
                            ease,
                            delay: startDelay + i * stagger
                          }}
                        >
                          {ch}
                        </motion.span>
                      );
                    })}
                  </span>
                );
              })}
            </span>

            {/* Shine layer — same tokenisation so the gradient-clipped text
                aligns perfectly with the base. */}
            <span className="glass-shine absolute inset-0 pointer-events-none">
              {tokens.map((tok, ti) => {
                if (/^\s+$/.test(tok)) {
                  return (
                    <span key={`s-${li}-${ti}`} className="inline-block">
                      {' '}
                    </span>
                  );
                }
                if (isRtl) {
                  return (
                    <span
                      key={`s-${li}-${ti}`}
                      className="inline-block whitespace-nowrap"
                    >
                      {tok}
                    </span>
                  );
                }
                return (
                  <span
                    key={`s-${li}-${ti}`}
                    className="inline-block whitespace-nowrap"
                  >
                    {tok.split('').map((ch, ci) => (
                      <span key={`s-${li}-${ti}-${ci}`} className="inline-block">
                        {ch}
                      </span>
                    ))}
                  </span>
                );
              })}
            </span>
          </span>
        );
      })}
    </motion.h1>
  );
}
