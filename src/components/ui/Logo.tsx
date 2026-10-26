import Image from 'next/image';

/**
 * "#FAHRSCHULE ABGEFAHRN" wordmark (Figma "Logo/Full"), served from
 * /public so no third-party origin can swap it out.
 */
export function Logo({ className = 'h-8 w-auto' }: { className?: string }) {
  return (
    <Image
      src="/images/logo-abgefahrn.svg"
      alt="Fahrschule Abgefahrn"
      width={158}
      height={32}
      priority
      unoptimized
      className={className}
    />
  );
}
