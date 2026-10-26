'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { X } from '@phosphor-icons/react';
import { SpeechBubble } from '../ui/Mascot';

export interface IntroStat {
  value: string;
  label: string;
  tone: 'green' | 'pink' | 'gold';
}

const toneClass: Record<IntroStat['tone'], string> = {
  green: 'text-brand-600',
  pink: 'text-[#C21E5C]',
  gold: 'text-gold-deep'
};

/** Figma "09/Quiz Intro": light screen, waving mascot, white start card. */
export function QuizIntro({
  title,
  speech,
  kicker,
  heading,
  stats,
  startLabel,
  onStart,
  onClose
}: {
  title: string;
  speech: string;
  kicker: string;
  heading: string;
  stats: IntroStat[];
  startLabel: string;
  onStart: () => void;
  onClose: () => void;
}) {
  const t = useTranslations();
  return (
    <main className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[#FEFBFA] text-paper-ink">
      <Image
        src="/images/mascot/wave.jpg"
        alt=""
        aria-hidden
        fill
        priority
        sizes="(max-width: 768px) 100vw, 900px"
        className="object-cover object-[50%_35%] md:object-contain md:object-bottom"
      />

      <div className="relative mx-auto flex w-full max-w-2xl items-center gap-3 px-5 pt-4">
        <button onClick={onClose} aria-label={t('common.close')} className="icon-btn focus-brand">
          <X size={22} />
        </button>
        <p className="flex-1 pe-10 text-center text-heading-l text-paper-ink">{title}</p>
      </div>

      <div className="relative mx-auto w-full max-w-2xl px-10 pt-4">
        <SpeechBubble className="max-w-[240px]">{speech}</SpeechBubble>
      </div>

      <div className="relative mt-auto px-4 pb-[calc(16px+env(safe-area-inset-bottom))]">
        <div className="mx-auto flex max-w-md flex-col gap-4 rounded-sheet bg-paper px-5 py-[22px] shadow-card">
          <div className="font-tomorrow">
            <p className="text-[12px] font-semibold uppercase tracking-[1px] text-brand-600">{kicker}</p>
            <h1 className="font-tomorrow text-[22px] font-bold tracking-normal text-paper-ink">{heading}</h1>
          </div>
          <dl className="flex gap-2.5 text-center font-tomorrow">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-1 flex-col-reverse items-center gap-1 rounded-[16px] bg-paper-tile px-2 py-4">
                <dt className="text-[12px] font-medium text-paper-sub">{s.label}</dt>
                <dd className={`text-[22px] font-bold ${toneClass[s.tone]}`}>{s.value}</dd>
              </div>
            ))}
          </dl>
          <button
            type="button"
            onClick={onStart}
            autoFocus
            className="focus-brand flex min-h-[54px] w-full items-center justify-center rounded-full bg-brand font-tomorrow text-[16px] font-bold text-brand-900 transition hover:shadow-glow"
          >
            {startLabel}
          </button>
        </div>
      </div>
    </main>
  );
}
