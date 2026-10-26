'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { NAV_ITEMS, isActive, isImmersiveRoute } from './nav';

/** Figma "BottomNav": phone-only tab bar with the green active indicator. */
export function BottomNav() {
  const t = useTranslations();
  const pathname = usePathname();
  if (isImmersiveRoute(pathname)) return null;

  return (
    <nav
      aria-label={t('nav.main')}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-300 bg-ink-100 pb-[env(safe-area-inset-bottom)] shadow-nav md:hidden"
    >
      <ul className="flex h-[64px] items-center px-1.5 pt-1">
        {NAV_ITEMS.map(({ href, labelKey, Icon }) => {
          const active = isActive(pathname, href);
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                aria-current={active ? 'page' : undefined}
                className="focus-brand flex flex-col items-center gap-[5px] rounded-lg py-1"
              >
                <span
                  aria-hidden
                  className={`h-[3px] w-[22px] rounded-[2px] ${active ? 'bg-brand shadow-glow' : 'bg-transparent'}`}
                />
                <Icon
                  size={26}
                  weight={active ? 'fill' : 'regular'}
                  className={active ? 'text-brand drop-shadow-[0_0_8px_rgba(0,255,36,0.6)]' : 'text-subtle'}
                />
                <span className={`text-nav ${active ? 'text-brand' : 'text-subtle'}`}>{t(labelKey)}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
