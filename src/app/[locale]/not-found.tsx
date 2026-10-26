import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Mascot } from '@/components/ui/Mascot';

export default async function NotFound() {
  const t = await getTranslations('notFound');
  return (
    <main className="mx-auto flex max-w-md flex-1 flex-col items-center justify-center px-6 py-16 text-center">
      <Mascot pose="think" sizes="180px" className="mb-4 h-auto w-40" />
      <p className="mb-2 text-label-m uppercase text-brand">404</p>
      <h1 className="mb-2 text-heading-l text-white">{t('title')}</h1>
      <p className="mb-6 text-body-l text-muted">{t('body')}</p>
      <Link href="/" className="btn-primary focus-brand">
        {t('home')}
      </Link>
    </main>
  );
}
