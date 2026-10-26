import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Star } from '@phosphor-icons/react/dist/ssr';

export async function SocialProof() {
  const t = await getTranslations('socialProof');
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6">
      <div className="card-hero grid overflow-hidden md:grid-cols-5">
        <div className="flex flex-col justify-center p-6 sm:p-10 md:col-span-3">
          <div className="mb-4 inline-flex items-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} weight="fill" aria-hidden />
            ))}
            <span className="ms-2 text-caption uppercase text-muted">{t('rating')}</span>
          </div>
          <p className="mb-3 text-[clamp(1.5rem,4vw,2.25rem)] font-extrabold leading-tight text-white">
            {t('title')} <span className="text-emphasis">{t('city')}</span>
          </p>
          <p className="max-w-md text-body-l text-muted">{t('body')}</p>
        </div>
        <div className="relative h-56 sm:h-72 md:col-span-2 md:h-auto md:min-h-[320px]">
          <Image
            src="/images/student-passed.webp"
            alt={t('imageAlt')}
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-100/70 via-transparent to-transparent md:bg-gradient-to-r" />
        </div>
      </div>
    </section>
  );
}
