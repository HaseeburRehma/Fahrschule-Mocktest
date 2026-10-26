/** Circular progress ring from the home "Deine Strecke" card. */
export function ProgressRing({
  value,
  size = 84,
  stroke = 9,
  label
}: {
  /** 0–100 */
  value: number;
  size?: number;
  stroke?: number;
  label?: string;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90" aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#1C1E1C" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#00FF24"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (pct / 100) * c}
          style={{ filter: 'drop-shadow(0 0 6px rgba(0,255,36,0.55))', transition: 'stroke-dashoffset 600ms ease' }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-heading-l text-white">
        {label ?? `${pct}%`}
      </span>
    </div>
  );
}
