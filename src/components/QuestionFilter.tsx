'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/routing';
import { motion } from 'framer-motion';
import {
  Search,
  Signpost,
  Flame,
  BookmarkCheck,
  Image as ImageIcon,
  Play,
  ListChecks,
  Hash,
  Sparkles,
  Shuffle,
  GraduationCap
} from 'lucide-react';
import type { LicenseClass } from '@/data/types';
import { isClassEnabled } from '@/data/types';

export type FilterId =
  | 'topics'
  | 'search'
  | 'signs'
  | 'tough'
  // `wrong` is kept as a valid filter ID so legacy bookmarks still work,
  // but it is no longer surfaced on the home page. The store still
  // tracks wrong answers — it just isn't a tile anymore.
  | 'wrong'
  | 'marked'
  | 'picture'
  | 'video'
  | 'selection'
  | 'numbers'
  | 'new'
  | 'random';

interface Filter {
  id: FilterId;
  icon: React.ComponentType<{ className?: string }>;
  /** Translation key under `home.filter.<id>`. */
  labelKey: string;
  /** Tone used for the tile background tint. */
  tone: 'brand' | 'amber' | 'danger' | 'sky' | 'violet';
  /** If true the tile navigates to /topics; otherwise to /quiz with ?filter=. */
  topicsOnly?: boolean;
}

const filters: Filter[] = [
  { id: 'topics',   icon: GraduationCap,  labelKey: 'topics',    tone: 'brand',  topicsOnly: true },
  { id: 'search',   icon: Search,         labelKey: 'search',    tone: 'sky' },
  { id: 'signs',    icon: Signpost,       labelKey: 'signs',     tone: 'brand' },
  { id: 'tough',    icon: Flame,          labelKey: 'tough',     tone: 'danger' },
  { id: 'marked',   icon: BookmarkCheck,  labelKey: 'marked',    tone: 'amber' },
  { id: 'picture',  icon: ImageIcon,      labelKey: 'picture',   tone: 'sky' },
  { id: 'video',    icon: Play,           labelKey: 'video',     tone: 'violet' },
  { id: 'selection',icon: ListChecks,     labelKey: 'selection', tone: 'brand' },
  { id: 'numbers',  icon: Hash,           labelKey: 'numbers',   tone: 'sky' },
  { id: 'new',      icon: Sparkles,       labelKey: 'new',       tone: 'amber' },
  { id: 'random',   icon: Shuffle,        labelKey: 'random',    tone: 'violet' }
];

const toneClass: Record<Filter['tone'], { ring: string; icon: string; glow: string }> = {
  brand:  { ring: 'group-hover:border-brand',        icon: 'text-brand',        glow: 'group-hover:shadow-glow-soft' },
  amber:  { ring: 'group-hover:border-amber-400',    icon: 'text-amber-300',    glow: 'group-hover:shadow-[0_0_20px_rgba(251,191,36,0.25)]' },
  danger: { ring: 'group-hover:border-rose-500',     icon: 'text-rose-300',     glow: 'group-hover:shadow-[0_0_20px_rgba(244,63,94,0.25)]' },
  sky:    { ring: 'group-hover:border-sky-400',      icon: 'text-sky-300',      glow: 'group-hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]' },
  violet: { ring: 'group-hover:border-violet-400',   icon: 'text-violet-300',   glow: 'group-hover:shadow-[0_0_20px_rgba(167,139,250,0.25)]' }
};

const CLASSES: { id: LicenseClass; key: string }[] = (
  [
    { id: 'A',    key: 'A' },
    { id: 'B',    key: 'B' },
    { id: 'AB',   key: 'AB' },
    { id: 'Mofa', key: 'Mofa' }
  ] as const
).filter((c) => isClassEnabled(c.id));

export function QuestionFilter() {
  const t = useTranslations();
  const router = useRouter();
  const [licenseClass, setLicenseClass] = useState<LicenseClass>('B');

  const onPick = (f: Filter) => {
    if (f.id === 'topics') {
      router.push(`/topics?class=${licenseClass}`);
      return;
    }
    if (f.id === 'search') {
      router.push(`/search?class=${licenseClass}`);
      return;
    }
    router.push(`/quiz/${licenseClass}?filter=${f.id}`);
  };

  return (
    <section
      id="filter"
      aria-labelledby="filter-heading"
      className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14 md:py-16"
    >
      <div className="flex flex-col gap-4 mb-6 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2
            id="filter-heading"
            className="display text-[clamp(1.5rem,5vw,3rem)] uppercase leading-tight"
          >
            {t('home.filter.heading')}
          </h2>
          <p className="text-sm text-white/55 mt-2 max-w-xl">{t('home.filter.subheading')}</p>
          <div className="h-[2px] w-12 bg-brand mt-3" />
        </div>

        {/* Class chooser — hidden when only one class is enabled. */}
        {CLASSES.length > 1 && (
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] p-1">
            {CLASSES.map(({ id, key }) => (
              <button
                key={id}
                onClick={() => setLicenseClass(id)}
                aria-pressed={licenseClass === id}
                className={[
                  'focus-brand px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition',
                  licenseClass === id
                    ? 'bg-brand text-black'
                    : 'text-white/65 hover:text-white'
                ].join(' ')}
              >
                {t(`classes.${key}.name`)}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3">
        {filters.map((f, idx) => {
          const Icon = f.icon;
          const tone = toneClass[f.tone];
          return (
            <motion.button
              key={f.id}
              onClick={() => onPick(f)}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className={[
                'focus-brand group relative aspect-[4/3] rounded-2xl border border-white/10 bg-ink-100',
                'flex flex-col items-center justify-center gap-2 p-3 transition-all',
                tone.ring,
                tone.glow,
                'hover:-translate-y-0.5'
              ].join(' ')}
            >
              <Icon className={['w-7 h-7 sm:w-8 sm:h-8 transition-colors', tone.icon].join(' ')} />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-center text-white/85 leading-tight">
                {t(`home.filter.${f.labelKey}`)}
              </span>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
