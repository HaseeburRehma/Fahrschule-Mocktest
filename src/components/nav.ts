import { BookOpen, ChartLineUp, House, MagnifyingGlass, type Icon } from '@phosphor-icons/react';

export const NAV_ITEMS: { href: string; labelKey: string; Icon: Icon }[] = [
  { href: '/', labelKey: 'nav.home', Icon: House },
  { href: '/topics', labelKey: 'nav.topics', Icon: BookOpen },
  { href: '/search', labelKey: 'nav.search', Icon: MagnifyingGlass },
  { href: '/progress', labelKey: 'nav.progress', Icon: ChartLineUp }
];

export function isActive(pathname: string, href: string): boolean {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
}

/** Full-screen flows (Figma quiz screens) render without the app chrome. */
export function isImmersiveRoute(pathname: string): boolean {
  return pathname.startsWith('/quiz/');
}
