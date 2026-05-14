'use client';

import { useDeferredValue, useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Search as SearchIcon, ChevronRight } from 'lucide-react';
import { questions } from '@/data/questions';
import { pickText, type LicenseClass } from '@/data/types';

interface Props {
  licenseClass: LicenseClass;
}

const CLASSES: { id: LicenseClass; key: string }[] = [
  { id: 'A',    key: 'A' },
  { id: 'B',    key: 'B' },
  { id: 'AB',   key: 'AB' },
  { id: 'Mofa', key: 'Mofa' }
];

const MAX_RESULTS = 30;

export function SearchClient({ licenseClass: initialClass }: Props) {
  const t = useTranslations();
  const locale = useLocale();
  const [licenseClass, setLicenseClass] = useState<LicenseClass>(initialClass);
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  // Filter the global pool by chosen class first, then by text match.
  const pool = useMemo(() => {
    return questions.filter((q) => {
      if (licenseClass === 'AB') {
        return q.classes.includes('AB') || q.classes.includes('A') || q.classes.includes('B');
      }
      return q.classes.includes(licenseClass);
    });
  }, [licenseClass]);

  const matches = useMemo(() => {
    const needle = deferredQuery.trim().toLowerCase();
    if (!needle) return [] as typeof questions;
    return pool
      .filter((q) => {
        const haystack = [
          q.question.de,
          q.question.en,
          q.explanation.de,
          q.explanation.en,
          ...q.options.flatMap((o) => [o.text.de, o.text.en])
        ]
          .join(' ')
          .toLowerCase();
        return haystack.includes(needle);
      })
      .slice(0, MAX_RESULTS);
  }, [pool, deferredQuery]);

  return (
    <main className="flex-1 px-4 sm:px-6 py-10 sm:py-14">
      <header className="max-w-3xl mx-auto mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 mb-5">
          <SearchIcon className="w-4 h-4 text-brand" />
          <span className="text-brand text-xs font-semibold tracking-[0.2em] uppercase">
            {t('search.title')}
          </span>
        </div>
        <h1 className="display text-[clamp(1.5rem,4.5vw,2.75rem)] uppercase leading-tight">
          {t('search.title')}
        </h1>
        <p className="text-white/60 mt-3 max-w-2xl">{t('search.subtitle')}</p>

        <div className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] p-1">
          {CLASSES.map(({ id, key }) => (
            <button
              key={id}
              onClick={() => setLicenseClass(id)}
              aria-pressed={licenseClass === id}
              className={[
                'focus-brand px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition',
                licenseClass === id ? 'bg-brand text-black' : 'text-white/65 hover:text-white'
              ].join(' ')}
            >
              {t(`classes.${key}.name`)}
            </button>
          ))}
        </div>

        <label className="mt-6 block">
          <div className="relative">
            <SearchIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('search.placeholder')}
              className="focus-brand w-full rounded-2xl border border-white/10 bg-ink-100 pl-12 pr-4 py-3.5 text-base text-white placeholder-white/40"
            />
          </div>
        </label>

        {deferredQuery.trim().length > 0 && (
          <p className="mt-3 text-xs uppercase tracking-widest text-white/45">
            {t('search.resultsCount', { count: matches.length })}
          </p>
        )}
      </header>

      <section className="max-w-3xl mx-auto">
        {deferredQuery.trim().length > 0 && matches.length === 0 && (
          <p className="text-center text-white/55 py-12">{t('search.noResults')}</p>
        )}

        <ul className="space-y-2.5">
          {matches.map((q) => (
            <li key={q.id}>
              <Link
                href={`/quiz/${licenseClass}?topic=${encodeURIComponent(q.topicCode ?? '')}`}
                className="focus-brand group flex items-start gap-3 rounded-2xl border border-white/10 bg-ink-100 p-4 hover:border-brand transition"
              >
                <span className="rounded-md border border-white/15 bg-white/[0.04] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-white/70 shrink-0">
                  {q.topicCode ?? '—'}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm sm:text-base text-white leading-snug line-clamp-2">
                    {pickText(q.question, locale)}
                  </p>
                  <p className="text-[11px] uppercase tracking-widest text-white/40 mt-1">
                    {t(`categories.${q.category}`)} · {t(`classes.${q.classes[0]}.name`)}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-brand mt-1 opacity-0 group-hover:opacity-100 transition" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
