'use client';

import { motion } from 'framer-motion';

interface Props {
  /** Lines of the headline. Each entry becomes its own line. */
  lines: { text: string; accent?: boolean }[];
  /** Delay before the first letter starts revealing. */
  startDelay?: number;
  /** Delay between letters in the same line. */
  letterStagger?: number;
}

/**
 * Letter-by-letter blur-to-sharp reveal. Each letter animates from
 * `y: 120% / blur(8px) / opacity 0` to its rest pose with an easeOut
 * curve. Spaces are kept visible with a non-breaking space so the line
 * stays measurable.
 */
export function SplitHeadline({
  lines,
  startDelay = 0.35,
  letterStagger = 0.025
}: Props) {
  const ease = [0.22, 1, 0.36, 1] as const;
  let cursor = 0; // running letter index across all lines

  return (
    <h1
      className="display uppercase font-normal leading-[0.9] text-[3.4rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem] tracking-[0.005em]"
      aria-label={lines.map((l) => l.text).join(' ')}
    >
      {lines.map((line, li) => (
        <span
          key={li}
          className="block overflow-hidden"
          aria-hidden
        >
          {line.text.split('').map((ch, ci) => {
            const i = cursor++;
            return (
              <motion.span
                key={`${li}-${ci}`}
                className={
                  'inline-block ' +
                  (line.accent
                    ? 'text-brand drop-shadow-[0_0_22px_rgba(1,254,33,0.55)]'
                    : 'text-white')
                }
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
      ))}
    </h1>
  );
}
