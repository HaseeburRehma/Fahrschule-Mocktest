'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { questions } from '@/data/questions';
import { locales } from '@/i18n/routing';
import { ArrowDown } from 'lucide-react';

const categoryCount = 8;

export function Hero() {
  const t = useTranslations('home');

  return (
    <section className="relative overflow-hidden">
      {/* corner glows */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-[24rem] w-[24rem] rounded-full bg-brand/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 pt-12 pb-16 md:pt-20 md:pb-24 grid lg:grid-cols-12 gap-10 items-center">
        {/* Left — copy */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-brand animate-pulse-glow" />
            <span className="text-brand text-xs font-semibold tracking-widest uppercase">
              {t('tag')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="display text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] leading-[0.95] uppercase"
          >
            {t('headline')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg md:text-xl text-white/70 max-w-xl mx-auto lg:mx-0"
          >
            {t('subheadline')}
          </motion.p>

          {/* CTA + stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4 items-center justify-center lg:justify-start"
          >
            <a
              href="#classes"
              className="focus-brand inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-black hover:shadow-glow-lg transition"
            >
              {t('scrollToStart')}
              <ArrowDown className="w-4 h-4" />
            </a>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
              <Stat label={t('stats.questions', { count: questions.length })} />
              <Stat label={t('stats.categories', { count: categoryCount })} />
              <Stat label={t('stats.languages', { count: locales.length })} />
            </ul>
          </motion.div>
        </div>

        {/* Right — image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-ink-100">
            {/* Lion + Audi RS Q8 brand image */}
            <Image
              src="/images/hero-rsq8.webp"
              alt="Fahrschule Abgefahrn"
              width={900}
              height={1100}
              priority
              className="w-full h-auto object-cover"
            />
            {/* dark gradient to blend into the page */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-0 via-transparent to-transparent" />
            {/* corner brand chip */}
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-black/70 backdrop-blur px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <span className="text-xs font-semibold tracking-widest uppercase text-white/85">
                Mit Power zum Lappen
              </span>
            </div>
          </div>
          {/* subtle drop glow */}
          <div className="pointer-events-none absolute -inset-2 rounded-[28px] bg-brand/10 blur-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label }: { label: string }) {
  return (
    <li className="inline-flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      {label}
    </li>
  );
}
