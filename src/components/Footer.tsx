import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          {/* Same Fahrschule Abgefahrn logos used in the header —
              mark on mobile, full wordmark on sm+. */}
          <div className="inline-flex items-center">
            <Image
              src="https://fahrschule-abgefahrn.de/wp-content/uploads/2024/05/Logo-Mark-Driving-School.svg"
              alt="Fahrschule Abgefahrn"
              width={36}
              height={36}
              unoptimized
              className="h-9 w-9 sm:hidden"
            />
            <Image
              src="https://fahrschule-abgefahrn.de/wp-content/uploads/2022/02/logo.png"
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

        <ul className="flex flex-wrap items-start gap-x-8 gap-y-3 text-sm md:justify-center">
          <li>
            <a href="#" className="text-white/70 hover:text-brand transition-colors">
              {t('footer.imprint')}
            </a>
          </li>
          <li>
            <a href="#" className="text-white/70 hover:text-brand transition-colors">
              {t('footer.privacy')}
            </a>
          </li>
          <li>
            <a href="#" className="text-white/70 hover:text-brand transition-colors">
              {t('footer.contact')}
            </a>
          </li>
        </ul>

        <ul className="flex items-start gap-3 md:justify-end">
          {[
            { Icon: Instagram, label: 'Instagram', href: '#' },
            { Icon: Facebook, label: 'Facebook', href: '#' },
            { Icon: Youtube, label: 'YouTube', href: '#' }
          ].map(({ Icon, label, href }) => (
            <li key={label}>
              <a
                href={href}
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
        <p className="max-w-6xl mx-auto px-6 text-xs text-white/40">
          {t('footer.copyright', { year })}
        </p>
      </div>
    </footer>
  );
}
