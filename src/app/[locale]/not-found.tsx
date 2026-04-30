import { Link } from '@/i18n/routing';

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
      <p className="text-brand text-sm tracking-widest uppercase mb-3">404</p>
      <h1 className="display text-5xl mb-4">Seite nicht gefunden</h1>
      <p className="text-white/70 max-w-md mb-8">
        Diese Seite existiert nicht oder wurde verschoben.
      </p>
      <Link
        href="/"
        className="rounded-full bg-brand px-6 py-3 text-black font-semibold hover:shadow-glow transition"
      >
        Zur Startseite
      </Link>
    </main>
  );
}
