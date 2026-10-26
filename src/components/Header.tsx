'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { Logo } from './ui/Logo';
import { LanguageMenu } from './LanguageMenu';
import { NAV_ITEMS, isActive, isImmersiveRoute } from './nav';

/** Top app bar: logo, desktop nav (the bottom nav takes over on phones), language. */
export function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  if (isImmersiveRoute(pathname)) return null;

  return (
    <header className="sticky top-0 z-40 border-b border-ink-300/60 bg-ink-0/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label={t('nav.home')} className="focus-brand rounded-lg">
          <Logo className="h-7 w-auto sm:h-8" />
        </Link>

        <nav aria-label={t('nav.main')} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map(({ href, labelKey, Icon }) => {
              const active = isActive(pathname, href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    className={[
                      'focus-brand inline-flex items-center gap-2 rounded-full px-4 py-2 text-label-m transition',
                      active ? 'bg-brand-800 text-brand' : 'text-muted hover:bg-ink-200 hover:text-white'
                    ].join(' ')}
                  >
                    <Icon size={18} weight={active ? 'fill' : 'regular'} />
                    {t(labelKey)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <LanguageMenu />
      </div>
    </header>
  );
}
