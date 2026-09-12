'use client';

import { useParams, usePathname } from 'next/navigation';
import { type ReactNode, useId } from 'react';
import { getSection } from '@/lib/navigation';
import { blogRoute } from '@/lib/shared';

export function Body({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { slug } = useParams();
  const section = pathname.startsWith(blogRoute)
    ? 'blog'
    : getSection(Array.isArray(slug) ? slug[0] : slug);

  return <body className={`flex flex-col min-h-screen ${section}`}>{children}</body>;
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
