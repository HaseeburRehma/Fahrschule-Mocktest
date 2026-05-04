import Image from 'next/image';
import { Star } from 'lucide-react';

export function SocialProof() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
      <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-ink-100 overflow-hidden grid md:grid-cols-5">
        <div className="md:col-span-3 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
          <div className="inline-flex items-center gap-1 text-brand mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
            <span className="ml-2 text-xs uppercase tracking-widest text-white/60">
              5.0 Bewertung
            </span>
          </div>
          <p className="display text-2xl sm:text-3xl md:text-4xl uppercase leading-tight mb-3">
            Bestanden in <span className="text-brand">Düsseldorf</span>
          </p>
          <p className="text-white/65 leading-relaxed max-w-md">
            Tausende Fahrschüler:innen haben mit unserem Trainingsformat den Lappen
            gemacht — bereite dich auf die offizielle Theorieprüfung vor.
          </p>
        </div>
        <div className="md:col-span-2 relative h-56 sm:h-72 md:h-auto md:min-h-[320px] overflow-hidden">
          <Image
            src="/images/student-passed.webp"
            alt="Bestandene Fahrschülerin in Düsseldorf"
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-ink-100/70 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
