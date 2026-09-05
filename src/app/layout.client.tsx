'use client';

import { useParams } from 'next/navigation';
import { type ReactNode, useId } from 'react';
import { getSection } from '@/lib/navigation';

export function Body({ children }: { children: ReactNode }) {
  const { slug = [] } = useParams();
  const section = Array.isArray(slug) ? getSection(slug[0]) : undefined;

  return <body className={`flex flex-col min-h-screen ${section || ''}`}>{children}</body>;
}

export function FumadocsIcon(props: React.SVGProps<SVGSVGElement>) {
  const id = useId();
  return (
    <svg width="80" height="80" viewBox="0 0 180 180" {...props}>
      <circle
        cx="90"
        cy="90"
        r="89"
        fill={`url(#${id}-iconGradient)`}
        stroke="var(--color-fd-primary)"
        strokeWidth="1"
      />
      <defs>
        <linearGradient id={`${id}-iconGradient`} gradientTransform="rotate(45)">
          <stop offset="45%" stopColor="var(--color-fd-background)" />
          <stop offset="100%" stopColor="var(--color-fd-primary)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
