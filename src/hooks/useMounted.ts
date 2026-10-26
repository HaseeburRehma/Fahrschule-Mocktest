'use client';

import { useEffect, useState } from 'react';

/**
 * False during SSR and the first client render. Components that read the
 * localStorage-persisted quiz store gate on this so server and client
 * markup match (no hydration warnings), then fill in the real numbers.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
