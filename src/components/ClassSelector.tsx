
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ClassIcon } from './icons/ClassIcons';
import type { LicenseClass } from '@/data/types';
import { getQuestionsForClass } from '@/data/questions';
import { ChevronRight } from 'lucide-react';

interface Tile {
  id: LicenseClass;
  /** Optional photo (when we have one). Falls back to the SVG icon. */
  photo?: { src: string; alt: string };
}

const tiles: Tile[] = [
  { id: 'A' }, // motorcycle — no real photo, use SVG
  { id: 'B', photo: { src: '/images/car-audi-q3.webp', alt: 'Audi Q3 — Klasse B' } },
  { id: 'AB', photo: { src: '/images/car-vw-tiguan.webp', alt: 'Klasse A + B' } },
  { id: 'Mofa' } // moped — no real photo, use SVG
];

export function ClassSelector() {
  const t = useTranslations();

  return (
    <section
      id="classes"
      aria-labelledby="class-heading"
      className="relative w-full max-w-6xl mx-auto px-6 py-14 md:py-16 bg-honeycomb"
    >
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2
            id="class-heading"
            className="display text-3xl md:text-5xl uppercase"
          >
            {t('home.classHeading')}
          </h2>
          <div className="h-[2px] w-12 bg-brand mt-3" />
        </div>
      </div>

      {/* 2 cols on small, 4 cols from md+ — single row on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {tiles.map(({ id, photo }, idx) => {
          const count = getQuestionsForClass(id).length;
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
            >
              <Link
                href={`/quiz/${id}`}
                className="focus-brand group relative block h-full rounded-2xl border border-white/10 bg-ink-100 transition-all duration-300 hover:border-brand hover:-translate-y-1 hover:shadow-glow overflow-hidden"
              >
                {/* Visual area — compact, square-ish */}
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-200">
                  {photo ? (
                    <>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.05]"
                      />
                      {/* bottom-fade so the text below sits cleanly */}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-100 via-ink-100/30 to-transparent" />
                      {/* brand-tint on hover */}
                      <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/[0.08] transition-colors" />
                    </>
                  ) : (
                    <div className="h-full w-full flex items-center justify-center p-6 text-white/85 group-hover:text-brand transition-colors">
                      <div className="w-2/3 h-2/3 max-w-[140px]">
                        <ClassIcon id={id} />
                      </div>
                    </div>
                  )}
                  {/* hover top glow line */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Text area — compact */}
                <div className="p-4">
                  <h3 className="display text-xl md:text-2xl uppercase mb-1 group-hover:text-white leading-tight">
                    {t(`classes.${id}.name`)}
                  </h3>
                  <p className="text-xs text-white/55 leading-snug line-clamp-2 min-h-[2.4em]">
                    {t(`classes.${id}.description`)}
                  </p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                    <span className="text-[10px] uppercase tracking-widest text-white/45">
                      {t('home.stats.questions', { count })}
                    </span>
                    <ChevronRight className="w-4 h-4 text-brand transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
