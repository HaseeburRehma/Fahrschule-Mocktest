'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter } from '@/i18n/routing';
import {
  Award,
  AlertTriangle,
  Repeat,
  Share2,
  Home as HomeIcon,
  CheckCircle2,
  XCircle,
  Clock
} from 'lucide-react';
import { useQuiz } from '@/store/quiz';
import { evaluate } from '@/lib/scoring';
import { getQuestionsForClass } from '@/data/questions';
import type { LicenseClass } from '@/data/types';
import { AnimatedNumber } from './AnimatedNumber';
import { Confetti } from './Confetti';

interface Props {
  licenseClass: LicenseClass;
}

export function ResultsClient({ licenseClass }: Props) {
  const t = useTranslations();
  const locale = useLocale();
  const lang = locale === 'de' ? 'de' : 'en';
  const router = useRouter();
  const { current, reset } = useQuiz();
  const [shareOk, setShareOk] = useState(false);

  const pool = useMemo(() => getQuestionsForClass(licenseClass), [licenseClass]);

  if (!current || current.licenseClass !== licenseClass || !current.finishedAt) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center gap-4">
        <p className="text-white/70">No completed exam found.</p>
        <Link
          href="/"
          className="rounded-full bg-brand px-6 py-3 text-black font-semibold hover:shadow-glow"
        >
          {t('results.backHome')}
        </Link>
      </main>
    );
  }

  const result = evaluate(current, pool);
  const minutes = Math.floor(result.durationMs / 60000);
  const seconds = Math.floor((result.durationMs % 60000) / 1000);

  const onRetry = () => {
    reset();
    router.push(`/quiz/${licenseClass}`);
  };
  const onShare = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    try {
      if (navigator.share) {
        await navigator.share({
          title: t('meta.title'),
          text: `${result.earned} / ${result.total}`,
          url
        });
      } else {
        await navigator.clipboard.writeText(url);
        setShareOk(true);
        setTimeout(() => setShareOk(false), 2200);
      }
    } catch {
      // user cancelled
    }
  };

  return (
    <main className="flex-1 pb-20">
      <Confetti active={result.passed} />

      {/* Hero score */}
      <section className="relative max-w-4xl mx-auto px-6 pt-16 pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 mb-6 text-xs uppercase tracking-widest text-white/60"
        >
          {t('classes.' + licenseClass + '.name')}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="display text-5xl md:text-7xl uppercase mb-2"
        >
          {t('results.title')}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 mb-6 flex items-baseline justify-center gap-3"
        >
          <span className="display text-7xl md:text-9xl text-brand drop-shadow-[0_0_24px_rgba(1,254,33,0.45)]">
            <AnimatedNumber value={result.earned} />
          </span>
          <span className="text-white/50 text-2xl md:text-3xl">
            {t('results.outOf', { total: result.total })}
          </span>
        </motion.div>

        <p className="text-sm text-white/50 mb-6">
          {t('results.passThreshold', { points: result.passThreshold })}
        </p>

        {/* Verdict badge */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.45, type: 'spring', stiffness: 200 }}
          className={`inline-flex items-center gap-2 rounded-full px-6 py-3 border font-bold uppercase tracking-widest text-sm ${
            result.passed
              ? 'border-brand bg-brand/10 text-brand shadow-glow animate-pulse-glow'
              : 'border-danger/60 bg-danger/10 text-danger'
          }`}
        >
          {result.passed ? <Award className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
          {result.passed ? t('results.passed') : t('results.failed')}
        </motion.div>

        <p className="mt-5 text-white/70 max-w-md mx-auto">
          {result.passed ? t('results.passedSubtitle') : t('results.failedSubtitle')}
        </p>
      </section>

      {/* KPI grid */}
      <section className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <Kpi
          label={t('results.totalQuestions')}
          value={result.perQuestion.length}
        />
        <Kpi
          label={t('results.correct')}
          value={result.correctCount}
          tone="brand"
          icon={<CheckCircle2 className="w-4 h-4" />}
        />
        <Kpi
          label={t('results.wrong')}
          value={result.wrongCount + result.skippedCount}
          tone="danger"
          icon={<XCircle className="w-4 h-4" />}
        />
        <Kpi
          label={t('results.timeTaken')}
          value={`${minutes}:${seconds.toString().padStart(2, '0')}`}
          icon={<Clock className="w-4 h-4" />}
        />
      </section>

      {/* By category */}
      <section className="max-w-4xl mx-auto px-6 mt-10">
        <h2 className="display text-2xl uppercase mb-4">{t('results.byCategory')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Object.entries(result.byCategory).map(([cat, val]) => {
            const pct = Math.round((val.correct / val.total) * 100);
            return (
              <div
                key={cat}
                className="rounded-2xl border border-white/10 bg-ink-100 p-4 flex items-center gap-4"
              >
                <div className="flex-1">
                  <p className="text-sm text-white/80 mb-1">{t(`categories.${cat}`)}</p>
                  <div className="h-1.5 w-full bg-white/[0.07] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-brand"
                    />
                  </div>
                </div>
                <span className="text-sm tabular-nums text-white/70">
                  {val.correct}/{val.total}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Review */}
      <section className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="display text-2xl uppercase mb-4">{t('results.review')}</h2>
        {result.perQuestion.filter((p) => p.verdict !== 'correct').length === 0 ? (
          <p className="text-brand text-sm">{t('results.reviewEmpty')}</p>
        ) : (
          <ul className="space-y-3">
            {result.perQuestion
              .filter((p) => p.verdict !== 'correct')
              .map(({ question, selectedIds, verdict }) => {
                const correctText = question.options
                  .filter((o) => question.correctIds.includes(o.id))
                  .map((o) => o.text[lang])
                  .join(' • ');
                const yours = question.options
                  .filter((o) => selectedIds.includes(o.id))
                  .map((o) => o.text[lang])
                  .join(' • ');
                return (
                  <li
                    key={question.id}
                    className="rounded-2xl border border-white/10 bg-ink-100 p-5"
                  >
                    <p className="text-xs uppercase tracking-widest text-white/50 mb-1">
                      {t(`categories.${question.category}`)}
                    </p>
                    <p className="font-semibold mb-3">{question.question[lang]}</p>
                    <p className="text-sm text-white/60 mb-1">
                      <span className="text-danger">{t('results.yourAnswer')}:</span>{' '}
                      {yours || (verdict === 'skipped' ? '—' : '')}
                    </p>
                    <p className="text-sm mb-3">
                      <span className="text-brand">{t('results.correctAnswer')}:</span>{' '}
                      {correctText}
                    </p>
                    <p className="text-xs text-white/60 leading-relaxed">
                      {question.explanation[lang]}
                    </p>
                  </li>
                );
              })}
          </ul>
        )}
      </section>

      {/* Actions */}
      <section className="max-w-4xl mx-auto px-6 mt-12 flex flex-wrap gap-3">
        <button
          onClick={onRetry}
          className="focus-brand inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-black hover:shadow-glow transition"
        >
          <Repeat className="w-4 h-4" />
          {t('results.tryAgain')}
        </button>
        <Link
          href="/"
          className="focus-brand inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white/80 hover:border-white/40 transition"
        >
          <HomeIcon className="w-4 h-4" />
          {t('results.chooseAnother')}
        </Link>
        <button
          onClick={onShare}
          className="focus-brand inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white/80 hover:border-white/40 transition"
        >
          <Share2 className="w-4 h-4" />
          {shareOk ? t('results.shareCopied') : t('results.share')}
        </button>
      </section>
    </main>
  );
}

function Kpi({
  label,
  value,
  tone,
  icon
}: {
  label: string;
  value: string | number;
  tone?: 'brand' | 'danger';
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-ink-100 p-4">
      <p className="text-[11px] uppercase tracking-widest text-white/50 mb-1 inline-flex items-center gap-2">
        {icon}
        {label}
      </p>
      <p
        className={`display text-3xl ${
          tone === 'brand' ? 'text-brand' : tone === 'danger' ? 'text-danger' : 'text-white'
        }`}
      >
        {value}
      </p>
    </div>
  );
}
