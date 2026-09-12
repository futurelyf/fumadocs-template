import Link from 'next/link';
import Image from 'next/image';
import { blogLoader } from '@/lib/source';
import { appName } from '@/lib/shared';
import BannerImage from './banner.png';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: `Latest announcements of ${appName}.`,
};

export default function Page() {
  const posts = [...blogLoader.getPages()].sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  return (
    <main className="mx-auto w-full max-w-[1400px] px-4 pb-12 md:py-12">
      <div className="dark relative z-2 mb-4 aspect-[3.2] p-8 md:p-12">
        <Image
          src={BannerImage}
          priority
          alt="banner"
          className="absolute inset-0 -z-1 size-full object-cover"
        />
        <h1 className="mb-4 font-mono text-3xl font-medium text-(--banner-text-color-up)">
          {appName} Blog
        </h1>
        <p className="font-mono text-sm text-(--banner-text-color-down)">
          Latest announcements of {appName}.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 xl:grid-cols-4">
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="flex flex-col rounded-2xl border bg-fd-card p-4 shadow-sm transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            <p className="font-medium">{post.data.title}</p>
            <p className="text-sm text-fd-muted-foreground">{post.data.description}</p>
            <p className="mt-auto pt-4 text-xs" style={{ color: 'var(--color-fd-primary)' }}>
              {new Date(post.data.date).toDateString()}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
