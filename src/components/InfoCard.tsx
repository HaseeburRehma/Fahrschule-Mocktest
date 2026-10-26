import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Info } from '@phosphor-icons/react/dist/ssr';

export async function InfoCard() {
  const t = await getTranslations('home');
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6">
      <div className="card grid overflow-hidden md:grid-cols-2">
        <div className="relative h-44 sm:h-56 md:h-auto md:min-h-[260px]">
          <Image
            src="/images/roadmap.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-100 via-transparent to-transparent md:bg-gradient-to-l" />
        </div>
        <div className="flex items-start gap-4 p-5 sm:p-8">
          <span className="icon-tile h-[42px] w-[42px]">
            <Info size={22} />
          </span>
          <div>
            <h2 className="mb-2 text-heading-l text-white">{t('infoTitle')}</h2>
            <p className="text-body-l text-muted">{t('infoBody')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
