import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { SCHOOL_LINKS } from '@/lib/site';

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 sm:mt-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 grid gap-6 sm:gap-8 md:grid-cols-3 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          {/* Same Fahrschule Abgefahrn logos used in the header —
              mark on mobile, full wordmark on sm+. */}
          <div className="inline-flex items-center">
            <Image
              src="/images/logo-mark.svg"
              alt="Fahrschule Abgefahrn"
              width={36}
              height={36}
              unoptimized
              className="h-9 w-9 sm:hidden"
            />
            <Image
              src="/images/logo-wordmark.png"
              alt="Fahrschule Abgefahrn"
              width={180}
              height={40}
              unoptimized
              className="hidden sm:block h-9 w-auto"
            />
          </div>
          <p className="text-sm text-white/55 mt-3 max-w-xs leading-relaxed">
            {t('footer.tagline')}
          </p>
        </div>

        <ul className="flex flex-wrap items-start gap-x-6 sm:gap-x-8 gap-y-2 sm:gap-y-3 text-sm justify-center">
          <li>
            <a href={SCHOOL_LINKS.imprint} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand transition-colors">
              {t('footer.imprint')}
            </a>
          </li>
          <li>
            <a href={SCHOOL_LINKS.privacy} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand transition-colors">
              {t('footer.privacy')}
            </a>
          </li>
          <li>
            <a href={SCHOOL_LINKS.contact} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand transition-colors">
              {t('footer.contact')}
            </a>
          </li>
        </ul>

        <ul className="flex items-start gap-3 justify-center md:justify-end">
          {[
            { Icon: Instagram, label: 'Instagram', href: SCHOOL_LINKS.instagram },
            { Icon: Facebook, label: 'Facebook', href: SCHOOL_LINKS.facebook },
            { Icon: Youtube, label: 'YouTube', href: SCHOOL_LINKS.youtube }
          ].map(({ Icon, label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 hover:text-brand hover:border-brand/60 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-white/5 py-4">
        <p className="max-w-6xl mx-auto px-4 sm:px-6 text-[11px] sm:text-xs text-white/40 text-center md:text-left">
          {t('footer.copyright', { year })}
        </p>
      </div>
    </footer>
  );
}
