import { blogSource } from '@/lib/source';
import { getPosts, getTags } from '@/lib/blog';
import {
  BlogBackLink,
  BlogDescription,
  BlogHeader,
  BlogTagCards,
  BlogTitle,
} from '@/components/blog';

export const metadata = {
  title: 'Blog Tags',
  description: 'All tags of Future Studio Blog',
};

export default function Page() {
  const tags = getTags(getPosts(blogSource.getPages()));

  return (
    <div className="mx-auto flex w-full max-w-page flex-col gap-4 px-4 py-12">
      <BlogHeader>
        <BlogBackLink href="/blog" />
        <BlogTitle>All Tags</BlogTitle>
        <BlogDescription>{tags.length} tags in total.</BlogDescription>
      </BlogHeader>
      <BlogTagCards tags={tags} />
    </div>
  );
}
