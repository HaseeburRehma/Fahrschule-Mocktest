'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Check, AlertCircle } from 'lucide-react';
import Image from 'next/image';
import type { Question } from '@/data/types';
import { pickText } from '@/data/types';

interface Props {
  question: Question;
  selected: string[];
  onToggle: (id: string) => void;
}

/**
 * Exam-style question card. NO live feedback — selected answers
 * are simply highlighted with the brand green so the user knows
 * what they picked. Correctness is revealed only on the results page.
 */
export function QuestionCard({ question, selected, onToggle }: Props) {
  const t = useTranslations();
  const locale = useLocale();
  const multi = question.correctIds.length > 1;

  return (
    <article className="rounded-2xl sm:rounded-3xl border border-white/10 bg-ink-100 p-4 sm:p-6 md:p-10 max-w-3xl mx-auto w-full">
      {/* Meta row */}
      <div className="flex items-center justify-between text-xs uppercase tracking-widest text-white/50 mb-4">
        <span className="text-brand">{t(`categories.${question.category}`)}</span>
        <span>{t('quiz.points', { count: question.points })}</span>
      </div>

      {/* Custom Image — only renders from /public/images/quiz */}
      {question.imagePath && (
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="my-2 mb-6"
        >
          <div className="relative mx-auto aspect-square w-full max-w-[140px] sm:max-w-[180px] md:max-w-[220px]">
            {/* Scenery vignette */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -m-4 rounded-[28px] bg-gradient-to-br from-slate-800/35 via-slate-900/15 to-slate-700/35 blur-xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-3 -bottom-3 h-6 rounded-full bg-brand/25 blur-2xl"
            />
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-white shadow-2xl">
              <Image
                src={question.imagePath}
                alt="Question image"
                fill
                sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, 220px"
                className="object-contain p-2"
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Question */}
      <h2 className="display text-lg sm:text-2xl md:text-3xl leading-snug mb-3 break-words">
        {pickText(question.question, locale)}
      </h2>

      {multi && (
        <p className="text-sm text-white/60 mb-6 inline-flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-brand" />
          {t('quiz.multiHint')}
        </p>
      )}

      {/* Options */}
      <ul className="space-y-3 mt-6">
        {question.options.map((opt) => {
          const isSelected = selected.includes(opt.id);
          return (
            <li key={opt.id}>
              <button
                onClick={() => onToggle(opt.id)}
                aria-pressed={isSelected}
                className={[
                  'focus-brand w-full text-left rounded-xl sm:rounded-2xl border px-4 sm:px-5 py-3.5 sm:py-4 min-h-[52px] transition-all',
                  'flex items-start gap-3 sm:gap-4 hover:bg-white/[0.03]',
                  isSelected
                    ? 'border-brand bg-brand/10 shadow-glow-soft'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/30'
                ].join(' ')}
              >
                <span
                  className={[
                    'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center transition-colors',
                    multi ? 'rounded-md' : 'rounded-full',
                    isSelected
                      ? 'border border-brand bg-brand text-black'
                      : 'border border-white/30 bg-transparent'
                  ].join(' ')}
                >
                  {isSelected && <Check className="w-4 h-4" />}
                </span>
                <span className="flex-1 text-sm sm:text-base leading-relaxed">{pickText(opt.text, locale)}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
