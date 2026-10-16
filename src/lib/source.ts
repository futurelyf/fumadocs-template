import { llms, loader } from 'fumadocs-core/source';
import { lucideIconsPluginWrapper } from './lucide-plugin-wrapper';
import { iconifyPlugin } from './iconify-plugin';
import { docsContentRoute, docsImageRoute, docsRoute } from './shared';
import { defineDocs, defineCollections } from 'fumadocs-mdx/macro';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { type BlogAuthor, blogPageSchema } from './blog';

const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

const blog = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  schema: blogPageSchema,
});

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPluginWrapper(), iconifyPlugin()],
});

export const blogSource = loader({
  baseUrl: '/blog',
  source: blog.toFumadocsSource(),
});

export const blogAuthors: Record<string, BlogAuthor> = {
  futurelyf: {
    name: 'Yifan Liang',
    title: 'Developer',
    url: 'https://github.com/futurelyf',
    image: 'https://avatars.githubusercontent.com/futurelyf',
  },
};

export const docsLlms = llms(source, {
  renderPage: async (page) => `# ${page.data.title} (${page.url})

${await page.data.getText('processed')}`,
});
