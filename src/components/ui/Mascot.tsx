import Image from 'next/image';

export type MascotPose = 'wave' | 'thumbs' | 'think';

const poses: Record<MascotPose, { src: string; width: number; height: number }> = {
  wave: { src: '/images/mascot/pose-wave.png', width: 469, height: 560 },
  thumbs: { src: '/images/mascot/pose-thumbs.png', width: 429, height: 560 },
  think: { src: '/images/mascot/pose-think.png', width: 365, height: 560 }
};

/** The green lion mascot from the "Maskottchen – Posen" sheet. Decorative. */
export function Mascot({
  pose = 'wave',
  className,
  priority = false,
  sizes = '200px'
}: {
  pose?: MascotPose;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const p = poses[pose];
  return (
    <Image
      src={p.src}
      alt=""
      aria-hidden
      width={p.width}
      height={p.height}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}

/** Rounded mascot avatar used in the feedback sheet (Figma "Mascot/Placeholder"). */
export function MascotAvatar({ pose = 'thumbs', size = 64 }: { pose?: MascotPose; size?: number }) {
  return (
    <span
      className="relative shrink-0 overflow-hidden rounded-[16px] bg-[#FEFBFA]"
      style={{ width: size, height: size }}
    >
      <Mascot pose={pose} sizes={`${size}px`} className="absolute inset-0 h-full w-full object-contain" />
    </span>
  );
}

/** Dark speech bubble with a downward tail (Figma "Speech Bubble"). */
export function SpeechBubble({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="rounded-option border border-ink-300 bg-ink-200 px-4 py-3 text-body-l text-white">
        {children}
      </div>
      <span
        aria-hidden
        className="absolute -bottom-[9px] left-[18px] h-0 w-0 border-x-[9px] border-t-[10px] border-x-transparent border-t-ink-200"
      />
    </div>
  );
}
