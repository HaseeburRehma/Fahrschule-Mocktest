'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  BookmarkSimple,
  FilmSlate,
  Fire,
  GraduationCap,
  Hash,
  ImageSquare,
  ListChecks,
  MagnifyingGlass,
  Shuffle,
  Sparkle,
  TrafficSign,
  type Icon
} from '@phosphor-icons/react';
import { Link } from '@/i18n/routing';
import type { FilterId } from '@/lib/exam';
import { classOptions, type LicenseClass } from '@/data/types';

interface Tile {
  id: Exclude<FilterId, 'wrong'>;
  Icon: Icon;
}

// `wrong` stays a valid filter id (legacy links, progress page) but is
// not a tile here.
const tiles: Tile[] = [
  { id: 'topics', Icon: GraduationCap },
  { id: 'search', Icon: MagnifyingGlass },
  { id: 'signs', Icon: TrafficSign },
  { id: 'tough', Icon: Fire },
  { id: 'marked', Icon: BookmarkSimple },
  { id: 'picture', Icon: ImageSquare },
  { id: 'video', Icon: FilmSlate },
  { id: 'selection', Icon: ListChecks },
  { id: 'numbers', Icon: Hash },
  { id: 'new', Icon: Sparkle },
  { id: 'random', Icon: Shuffle }
];

function hrefFor(id: Tile['id'], licenseClass: LicenseClass): string {
  if (id === 'topics') return `/topics?class=${licenseClass}`;
  if (id === 'search') return `/search?class=${licenseClass}`;
  return `/quiz/${licenseClass}?filter=${id}`;
}

/** Figma "Schnellzugriff" grid — one tile per practice filter. */
export function QuestionFilter() {
  const t = useTranslations();
  const [licenseClass, setLicenseClass] = useState<LicenseClass>(classOptions[0]?.id ?? 'B');

  return (
    <section aria-labelledby="filter-heading" className="mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 id="filter-heading" className="text-heading-m text-white">
            {t('home.filter.heading')}
          </h2>
          <p className="mt-1 text-body-s text-muted">{t('home.filter.subheading')}</p>
        </div>

        {classOptions.length > 1 && (
          <div className="inline-flex gap-1 rounded-full bg-ink-200 p-1">
            {classOptions.map(({ id, key }) => (
              <button
                key={id}
                onClick={() => setLicenseClass(id)}
                aria-pressed={licenseClass === id}
                className={[
                  'focus-brand rounded-full px-3.5 py-1.5 text-label-m transition',
                  licenseClass === id ? 'bg-brand text-ink-0' : 'text-muted hover:text-white'
                ].join(' ')}
              >
                {t(`classes.${key}.name`)}
              </button>
            ))}
          </div>
        )}
      </div>

      <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
        {tiles.map(({ id, Icon }) => (
          <li key={id}>
            <Link
              href={hrefFor(id, licenseClass)}
              className="card focus-brand group flex h-full flex-col gap-2.5 p-4 transition hover:-translate-y-0.5 hover:border-brand/60 hover:shadow-glow-soft"
            >
              <span className="icon-tile h-[42px] w-[42px] transition group-hover:bg-brand group-hover:text-ink-0">
                <Icon size={22} />
              </span>
              <span className="text-title-m text-white">{t(`home.filter.${id}`)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
