'use client';

/**
 * Auto-scrolling 3-row testimonial marquee. Each row loops infinitely
 * (rows 1 + 3 left, row 2 right). Hover anywhere in the strip pauses
 * all three rows. Edges fade so cards bleed off-canvas inside the
 * page-aligned container.
 *
 * Container: same `max-w-6xl mx-auto px-6` rhythm the other home
 * sections use, so the slider lines up with the hero, class grid,
 * info card, and social-proof block above it.
 */

const BASE = 'https://fahrschule-abgefahrn.de/wp-content/uploads/2026/04/';

const photos = [
  'abgefahrn-dusseldorf.webp',
  'bestandener-fahrschuler-abgefahrn-.webp',
  'bestbewertete-fahrschule-abgefahrn-.webp',
  'Bestandene-Fahrschulerin-.webp',
  'bestandene-fahrschulerin-dusseldorf.webp',
  'fuhrerschein-bestanden-abgefahrn-.webp',
  'fuhrerscheinklasse-b197-abgefahrn-1.webp',
  'Fuhrerscheinausbildung-dusseldorf.webp',
  'frauen-fuhrerschein-abgefahrn-.webp',
  'fuhrerschein-bestanden-dusseldorf.webp',
  'fuhrerschein-bestanden-in-dusseldorf.webp',
  'fahrschulerin-besteht-fuhrerschein.webp',
  'fahrschuler-fahrschule-abgefahrn-.webp',
  'fahrschule-abgefahrn-fuhrerschein-.webp',
  'fahrschule-bestanden-dusseldorf.webp',
  'fahrschule-dusseldorf-abgefahrn-.webp',
  'fahrschule-in-meiner-nahe-in-dusseldorf-.webp',
  'fahrschule-in-der-Nahe-dusseldorf.webp',
  'fahrerlaubnis-bestanden-dusseldorf.webp',
  'Frame-8.png'
];

const frames = [
  'Frame-5.png',
  'Frame-8.png',
  'Frame-4.png',
  'Frame-6.png',
  'Frame-2.png',
  'Frame-7.png',
  'Frame-3-1.png',
  'Frame-5-1.png',
  'Frame-4-1.png',
  'Frame-3.png'
];

const row1Items = [
  photos[0], photos[1], photos[2], photos[3], photos[4], photos[5], photos[6],
  frames[0], frames[1], frames[2]
];
const row2Items = [
  photos[7], photos[8], photos[9], photos[10], photos[11], photos[12], photos[13],
  frames[3], frames[4], frames[5]
];
const row3Items = [
  photos[14], photos[15], photos[16], photos[17], photos[18], photos[19],
  frames[6], frames[7], frames[8], frames[9]
];

function MarqueeRow({
  items,
  variant
}: {
  items: string[];
  variant: 'l1' | 'r' | 'l2';
}) {
  const doubled = [...items, ...items];
  return (
    <div className={`ab-row ab-row--${variant}`}>
      {doubled.map((src, i) => (
        <div key={`${variant}-${i}`} className="ab-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${BASE}${src}`} alt="Bestandene Fahrschüler" loading="lazy" />
        </div>
      ))}
    </div>
  );
}

export function TestimonialSlider() {
  return (
    <>
      {/* Page-aligned wrapper — matches the rest of the home sections */}
      <section className="w-full max-w-6xl mx-auto px-6 pb-20">
        <div className="ab-outer rounded-3xl border border-white/10">
          <div className="ab-wrap">
            <MarqueeRow items={row1Items} variant="l1" />
            <MarqueeRow items={row2Items} variant="r" />
            <MarqueeRow items={row3Items} variant="l2" />
          </div>
        </div>
      </section>

      {/* Global styles — keyframes must NOT be scoped or styled-jsx
          will hash the names and the animation references won't bind. */}
      <style jsx global>{`
        .ab-outer {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #0a0a0a;
        }
        .ab-wrap {
          overflow: hidden;
          background: #0a0a0a;
          padding: 24px 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .ab-row {
          display: flex;
          width: max-content;
          gap: 16px;
          will-change: transform;
        }
        .ab-row--l1 {
          animation: scrollLeft 40s linear infinite;
        }
        .ab-row--r {
          animation: scrollRight 36s linear infinite;
        }
        .ab-row--l2 {
          animation: scrollLeft 44s linear infinite;
        }
        .ab-wrap:hover .ab-row {
          animation-play-state: paused;
        }
        .ab-card {
          flex-shrink: 0;
          width: 220px;
          height: 260px;
          border-radius: 18px;
          overflow: hidden;
          border: 2px solid rgba(100, 230, 60, 0.18);
          box-shadow:
            0 4px 32px rgba(0, 0, 0, 0.45),
            0 0 0 1px rgba(255, 255, 255, 0.04);
          background: #111;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
          cursor: pointer;
        }
        .ab-card:hover {
          transform: scale(1.06) translateY(-4px);
          box-shadow:
            0 0 20px rgba(142, 255, 161, 0.35),
            0 0 60px rgba(0, 255, 36, 0.1),
            0 12px 48px rgba(0, 255, 36, 0.1);
          border: 1px solid rgba(80, 255, 120, 0.6);
          z-index: 10;
        }
        .ab-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .ab-card:hover img {
          transform: scale(1.04);
        }
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        /* Edge fades — narrower because the slider is now boxed in */
        .ab-outer::before,
        .ab-outer::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 64px;
          z-index: 2;
          pointer-events: none;
        }
        .ab-outer::before {
          left: 0;
          background: linear-gradient(to right, #0a0a0a, transparent);
        }
        .ab-outer::after {
          right: 0;
          background: linear-gradient(to left, #0a0a0a, transparent);
        }
        @media (prefers-reduced-motion: reduce) {
          .ab-row--l1,
          .ab-row--r,
          .ab-row--l2 {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
