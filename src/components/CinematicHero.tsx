'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, Play, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { GlassHeadline } from './cinematic/GlassHeadline';
import { MagneticCTA } from './cinematic/MagneticCTA';
import { ScrollIndicator } from './cinematic/ScrollIndicator';

/**
 * Cinematic hero V3 — same load orchestration and copy column, but
 * the right column is now the brand car photo instead of a 3D scene.
 *
 *  - Cursor-driven 3D tilt on the photo (perspective + rotateX/Y)
 *  - Soft brand-green halo behind the frame
 *  - Locked aspect ratio per breakpoint so the image is never awkwardly
 *    tall on mobile or stretched on desktop
 *  - Mouse parallax keeps copy + scene moving in opposite directions
 *  - Respects prefers-reduced-motion + coarse pointers
 */
export function CinematicHero() {
  const t = useTranslations('home');
  const stageRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  // Cursor parallax — runs on a single rAF, eased toward target.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (reduced) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const onMove = (e: MouseEvent) => {
      const rect = stageRef.current?.getBoundingClientRect();
      if (!rect) return;
      tx = (e.clientX - rect.left - rect.width / 2) / rect.width;
      ty = (e.clientY - rect.top - rect.height / 2) / rect.height;
    };
    const tick = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      if (copyRef.current) {
        copyRef.current.style.transform = `translate3d(${cx * -10}px, ${cy * -6}px, 0)`;
      }
      if (sceneRef.current) {
        sceneRef.current.style.transform = `translate3d(${cx * 14}px, ${cy * 8}px, 0)`;
      }
      if (tiltRef.current) {
        // Subtle 3D tilt — perspective applied at the wrapper, never harsh
        const rotY = cx * 5;
        const rotX = cy * -3.5;
        tiltRef.current.style.transform = `perspective(1400px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <section
      ref={stageRef}
      className="relative bg-grain hero-vignette overflow-hidden"
      style={{ minHeight: 'calc(100vh - 4rem)' }}
    >
      {/* Atmospheric glows — slightly smaller on mobile to keep blur cheap */}
      <div className="pointer-events-none absolute -top-20 right-[-10rem] h-[24rem] w-[24rem] sm:h-[40rem] sm:w-[40rem] rounded-full bg-brand/15 blur-3xl stage-light" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-[18rem] w-[18rem] sm:h-[28rem] sm:w-[28rem] rounded-full bg-brand/10 blur-3xl" />

      <div className="relative z-[2] max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-6 pb-20 sm:pt-10 sm:pb-24 md:pt-14 md:pb-28 min-h-[inherit]">
        {/* LEFT — copy */}
        <div ref={copyRef} className="lg:col-span-7 relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 mb-7"
          >
            <span className="h-2 w-2 rounded-full bg-brand animate-pulse-glow" />
            <span className="text-brand text-xs font-semibold tracking-[0.2em] uppercase">
              {t('tag')}
            </span>
          </motion.div>

          <GlassHeadline
            lines={[
              { text: t('cinemaLine1') },
              { text: t('cinemaLine2'), accent: true }
            ]}
            startDelay={0.4}
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-white/65 max-w-xl mx-auto lg:mx-0 leading-relaxed px-1"
          >
            {t('cinemaSubheadline')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 1.4 }}
            className="mt-7 sm:mt-8 flex flex-wrap gap-3 items-center justify-center lg:justify-start"
          >
            <MagneticCTA href="#classes" variant="primary">
              {t('ctaPrimary')}
              <ArrowRight className="w-4 h-4" />
            </MagneticCTA>
            <MagneticCTA href="#video" variant="ghost">
              <Play className="w-4 h-4" />
              {t('ctaSecondary')}
            </MagneticCTA>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mt-6 sm:mt-7 flex flex-wrap gap-x-4 sm:gap-x-5 gap-y-2 text-[11px] sm:text-xs text-white/55 justify-center lg:justify-start"
          >
            <li className="inline-flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-brand text-brand" />
              {t('trustReviews')}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-brand" />
              {t('trustTheory')}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-brand" />
              {t('trustLanguages')}
            </li>
          </motion.ul>
        </div>

        {/* RIGHT — Audi Q3 brand photo */}
        <div ref={sceneRef} className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-[clamp(240px,72vw,420px)] lg:max-w-none"
          >
            {/* Soft brand halo behind the frame */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-brand/20 blur-3xl opacity-70"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-brand/20"
            />

            {/* Tiltable frame — subtle 3D perspective on cursor */}
            <div
              ref={tiltRef}
              style={{ willChange: 'transform', transformStyle: 'preserve-3d' }}
              className="transition-transform duration-300 ease-out"
            >
              <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-ink-100 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
                <Image
                  src="/images/car-audi-q3.webp"
                  alt="Fahrschule Abgefahrn — Audi Q3 in Brand-Wrap"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 540px"
                  className="object-cover object-center"
                />

                {/* Subtle bottom gradient so the brand chip + edge read clean */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-0/65 via-ink-0/15 to-transparent"
                />
                {/* Top sheen — tiny brand glow line */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent"
                />

                {/* Corner brand chip — pinned bottom, never wraps internally.
                    On the very narrowest phones the "Düsseldorf" tag tucks
                    under the chip in a stack instead of fighting for width. */}
                <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4 flex flex-col-reverse sm:flex-row items-start sm:items-end sm:justify-between gap-2 sm:gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-black/70 backdrop-blur px-2.5 sm:px-3 py-1 sm:py-1.5 max-w-full">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-glow shrink-0" />
                    <span className="text-[9px] sm:text-[11px] font-semibold tracking-[0.14em] sm:tracking-[0.18em] uppercase text-white/90 whitespace-nowrap">
                      Mit Power zum Lappen
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/55 self-end sm:self-auto whitespace-nowrap">
                    Düsseldorf
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ScrollIndicator href="#classes" label={t('scrollHint')} />
    </section>
  );
}
