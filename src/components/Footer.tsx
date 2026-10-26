'use client';

import { useTranslations } from 'next-intl';
import { FacebookLogo, InstagramLogo, TiktokLogo, YoutubeLogo } from '@phosphor-icons/react';
import { usePathname } from '@/i18n/routing';
import { SCHOOL_LINKS } from '@/lib/site';
import { Logo } from './ui/Logo';
import { isImmersiveRoute } from './nav';

const socials = [
  { Icon: InstagramLogo, label: 'Instagram', href: SCHOOL_LINKS.instagram },
  { Icon: FacebookLogo, label: 'Facebook', href: SCHOOL_LINKS.facebook },
  { Icon: TiktokLogo, label: 'TikTok', href: SCHOOL_LINKS.tiktok },
  { Icon: YoutubeLogo, label: 'YouTube', href: SCHOOL_LINKS.youtube }
];

export function Footer() {
  const t = useTranslations();
  const pathname = usePathname();
  if (isImmersiveRoute(pathname)) return null;
  const year = new Date().getFullYear();

  // Imprint / privacy are legally required in Germany (§5 DDG, DSGVO) —
  // they live on the driving school's main site.
  const legal = [
    { label: t('footer.imprint'), href: SCHOOL_LINKS.imprint },
    { label: t('footer.privacy'), href: SCHOOL_LINKS.privacy },
    { label: t('footer.contact'), href: SCHOOL_LINKS.contact }
  ];

  return (
    <footer className="mt-12 border-t border-ink-300 pb-[calc(88px+env(safe-area-inset-bottom))] md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-3 md:items-start">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <Logo className="h-8 w-auto" />
          <p className="max-w-xs text-center text-body-s text-muted md:text-start">{t('footer.tagline')}</p>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {legal.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-brand rounded text-body-s text-muted transition-colors hover:text-brand"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex justify-center gap-2 md:justify-end">
          {socials.map(({ Icon, label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="icon-btn focus-brand text-muted hover:text-brand"
              >
                <Icon size={20} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="border-t border-ink-300/60 px-4 py-4 text-center text-caption text-subtle">
        {t('footer.copyright', { year })}
      </p>
    </footer>
  );
}
