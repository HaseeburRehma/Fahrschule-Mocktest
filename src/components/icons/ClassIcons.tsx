import type { LicenseClass } from '@/data/types';

/* Bold filled-silhouette SVG icons for the licence-class tiles.
   They use `currentColor` so they pick up text colour from the parent. */

function MotorcycleIcon() {
  return (
    <svg
      viewBox="0 0 120 70"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      fill="currentColor"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Rear wheel */}
      <circle cx="22" cy="52" r="16" />
      <circle cx="22" cy="52" r="9" fill="#111111" />
      <circle cx="22" cy="52" r="3" />
      {/* Front wheel */}
      <circle cx="98" cy="52" r="16" />
      <circle cx="98" cy="52" r="9" fill="#111111" />
      <circle cx="98" cy="52" r="3" />
      {/* Frame from rear wheel up to seat */}
      <path d="M22 52 L34 32 L46 32 L46 52 Z" />
      {/* Fuel tank + seat block */}
      <path d="M44 26 L72 26 L78 32 L46 32 Z" />
      <rect x="32" y="24" width="20" height="6" rx="2" />
      {/* Front fairing */}
      <path d="M72 26 L98 52 L82 52 L66 36 Z" />
      {/* Handlebar */}
      <path
        d="M76 22 L88 12"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="89" cy="11" r="3.5" />
      {/* Mirror */}
      <circle cx="92" cy="14" r="2.2" />
      {/* Headlight */}
      <path d="M84 30 L96 30 L98 38 L82 38 Z" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg
      viewBox="0 0 120 60"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      fill="currentColor"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Roof + body silhouette (hatchback) */}
      <path
        d="M10 42
           L18 28
           Q22 22 30 22
           L78 22
           Q86 22 92 28
           L108 38
           L112 42
           L112 50
           L8 50
           L8 42 Z"
      />
      {/* Window cutouts */}
      <path
        d="M28 28 L46 28 L46 38 L24 38 Z"
        fill="#111111"
      />
      <path
        d="M50 28 L78 28 Q86 28 90 32 L94 38 L50 38 Z"
        fill="#111111"
      />
      {/* B-pillar */}
      <rect x="46" y="28" width="4" height="10" />
      {/* Wheel arches (cut into body) */}
      <circle cx="28" cy="50" r="11" fill="#111111" />
      <circle cx="92" cy="50" r="11" fill="#111111" />
      {/* Wheels */}
      <circle cx="28" cy="50" r="9" />
      <circle cx="28" cy="50" r="4" fill="#111111" />
      <circle cx="92" cy="50" r="9" />
      <circle cx="92" cy="50" r="4" fill="#111111" />
      {/* Headlight stripe */}
      <rect x="105" y="40" width="5" height="3" rx="1" />
    </svg>
  );
}

function ComboIcon() {
  return (
    <svg
      viewBox="0 0 220 70"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      fill="currentColor"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* --- Motorcycle (left half) --- */}
      <g>
        <circle cx="18" cy="52" r="14" />
        <circle cx="18" cy="52" r="7.5" fill="#111111" />
        <circle cx="18" cy="52" r="2.5" />
        <circle cx="78" cy="52" r="14" />
        <circle cx="78" cy="52" r="7.5" fill="#111111" />
        <circle cx="78" cy="52" r="2.5" />
        <path d="M18 52 L30 32 L40 32 L40 52 Z" />
        <path d="M38 26 L62 26 L68 32 L40 32 Z" />
        <rect x="28" y="24" width="16" height="5" rx="2" />
        <path d="M62 26 L78 52 L66 52 L56 36 Z" />
        <path
          d="M64 22 L74 12"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="75" cy="11" r="3" />
      </g>

      {/* --- Plus --- */}
      <g transform="translate(96,18)" fill="currentColor">
        <rect x="11" y="0" width="6" height="28" rx="2" />
        <rect x="0" y="11" width="28" height="6" rx="2" />
      </g>

      {/* --- Car (right half) --- */}
      <g transform="translate(124,4)">
        <path
          d="M4 42
             L12 28
             Q16 22 24 22
             L66 22
             Q74 22 80 28
             L92 38
             L94 42
             L94 50
             L4 50
             L4 42 Z"
        />
        <path d="M22 28 L40 28 L40 38 L18 38 Z" fill="#111111" />
        <path
          d="M44 28 L66 28 Q74 28 78 32 L82 38 L44 38 Z"
          fill="#111111"
        />
        <rect x="40" y="28" width="4" height="10" />
        <circle cx="22" cy="50" r="10" fill="#111111" />
        <circle cx="78" cy="50" r="10" fill="#111111" />
        <circle cx="22" cy="50" r="8" />
        <circle cx="22" cy="50" r="3.5" fill="#111111" />
        <circle cx="78" cy="50" r="8" />
        <circle cx="78" cy="50" r="3.5" fill="#111111" />
      </g>
    </svg>
  );
}

function MofaIcon() {
  return (
    <svg
      viewBox="0 0 120 70"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      fill="currentColor"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Wheels */}
      <circle cx="24" cy="54" r="13" />
      <circle cx="24" cy="54" r="7" fill="#111111" />
      <circle cx="24" cy="54" r="2.5" />
      <circle cx="96" cy="54" r="13" />
      <circle cx="96" cy="54" r="7" fill="#111111" />
      <circle cx="96" cy="54" r="2.5" />
      {/* Step-through scooter body */}
      <path
        d="M24 54
           L34 38
           L60 38
           L72 22
           L86 22
           L92 30
           L96 54
           L82 54
           L72 42
           L46 42
           L40 54 Z"
      />
      {/* Seat */}
      <rect x="40" y="34" width="22" height="6" rx="3" />
      {/* Handlebar */}
      <path
        d="M86 22 L92 10"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="92" cy="10" r="3.5" />
      {/* Headlight */}
      <rect x="84" y="26" width="9" height="6" rx="1.5" />
    </svg>
  );
}

const icons: Record<LicenseClass, () => JSX.Element> = {
  A: MotorcycleIcon,
  B: CarIcon,
  AB: ComboIcon,
  Mofa: MofaIcon
};

export function ClassIcon({ id, className }: { id: LicenseClass; className?: string }) {
  const Icon = icons[id];
  return (
    <div
      className={
        'w-full h-full text-current flex items-center justify-center ' + (className ?? '')
      }
    >
      <Icon />
    </div>
  );
}
