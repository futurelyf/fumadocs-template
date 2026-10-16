import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogAuthors, blogSource } from '@/lib/source';
import { getPosts, getTagPosts, getTags } from '@/lib/blog';
import { BlogBackLink, BlogCards, BlogDescription, BlogHeader, BlogTitle } from '@/components/blog';

export default async function Page(props: { params: Promise<{ tag: string }> }) {
  const params = await props.params;
  const result = getTagPosts(getPosts(blogSource.getPages(), blogAuthors), params.tag);
  if (!result) notFound();

  return (
    <div className="mx-auto flex w-full max-w-page flex-col gap-4 px-4 py-12">
      <BlogHeader>
        <BlogBackLink href="/blog/tags">All Tags</BlogBackLink>
        <BlogTitle>{result.tag.name}</BlogTitle>
        <BlogDescription>{result.posts.length} matching posts.</BlogDescription>
      </BlogHeader>
      <BlogCards posts={result.posts} />
    </div>
  );
}

export async function generateMetadata(props: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const params = await props.params;
  const result = getTagPosts(getPosts(blogSource.getPages()), params.tag);
  if (!result) notFound();

  return {
    title: `${result.tag.name} - Blog`,
    description: `Posts tagged ${result.tag.name} on Future Studio Blog`,
  };
}

export function generateStaticParams(): { tag: string }[] {
  return getTags(getPosts(blogSource.getPages())).map((tag) => ({ tag: tag.slug }));
}
