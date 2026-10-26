import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Info } from 'lucide-react';

export function InfoCard() {
  const t = useTranslations('home');
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-10 sm:pb-12">
      <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-ink-100 overflow-hidden grid md:grid-cols-2 gap-0">
        <div className="relative h-44 sm:h-56 md:h-auto md:min-h-[260px] overflow-hidden">
          <Image
            src="/images/roadmap.jpg"
            alt="Strukturierter Lehrplan"
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-ink-100 via-transparent to-transparent" />
        </div>
        <div className="p-5 sm:p-6 md:p-10 flex gap-3 sm:gap-4 items-start">
          <div className="shrink-0 rounded-xl bg-brand/10 p-2 text-brand border border-brand/20">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h3 className="display text-xl sm:text-2xl md:text-3xl uppercase mb-2 sm:mb-3">
              {t('infoTitle')}
            </h3>
            <p className="text-white/70 leading-relaxed text-sm md:text-base">
              {t('infoBody')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
