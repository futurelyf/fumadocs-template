import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Undo2 } from 'lucide-react';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import { blogLoader } from '@/lib/source';
import { getMDXComponents } from '@/components/mdx';
import { ShareButton } from './page.client';

export default async function Page(props: PageProps<'/blog/[slug]'>) {
  const params = await props.params;
  const page = blogLoader.getPage([params.slug]);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <article className="mx-auto flex w-full max-w-[800px] flex-col px-4 py-8">
      <div className="mb-8 flex flex-row gap-6 text-sm">
        <div>
          <p className="mb-1 text-fd-muted-foreground">Written by</p>
          <p className="font-medium">{page.data.author}</p>
        </div>
        <div>
          <p className="mb-1 text-fd-muted-foreground">At</p>
          <p className="font-medium">{new Date(page.data.date).toDateString()}</p>
        </div>
      </div>

      <h1 className="mb-4 text-3xl font-semibold">{page.data.title}</h1>
      <p className="mb-8 text-fd-muted-foreground">{page.data.description}</p>

      <div className="prose min-w-0 flex-1">
        <div className="not-prose mb-8 flex flex-row gap-2">
          <ShareButton url={page.url} />
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border bg-fd-secondary px-4 py-2 text-sm font-medium text-fd-secondary-foreground transition-colors hover:bg-fd-accent"
          >
            <Undo2 className="size-4" />
            Back
          </Link>
        </div>

        <InlineTOC items={page.data.toc} />
        <MDX components={getMDXComponents()} />
      </div>
    </article>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return blogLoader.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

export async function generateMetadata(props: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const params = await props.params;
  const page = blogLoader.getPage([params.slug]);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
