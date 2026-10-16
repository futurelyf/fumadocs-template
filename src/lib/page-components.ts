import { ACTIVE_LAYOUT } from '@/lib/layout-config';

/**
 * Dynamic page component exports based on active layout
 * Automatically switches between Docs, Spacious, Glass, and Notebook page components
 */

// Layout-specific imports
import * as DocsPageComponents from 'fumadocs-ui/layouts/docs/page';
import * as SpaciousPageComponents from '@/layouts/spacious/page';
import * as GlassPageComponents from '@/layouts/glass/page';
import * as NotebookPageComponents from '@/layouts/notebook/page';

// Select the correct components based on active layout
let components;

switch (ACTIVE_LAYOUT) {
  case 'spacious':
    components = SpaciousPageComponents;
    break;
  case 'glass':
    components = GlassPageComponents;
    break;
  case 'notebook':
    components = NotebookPageComponents;
    break;
  case 'docs':
  default:
    components = DocsPageComponents;
    break;
}

// Re-export all page components
export const DocsPage = components.DocsPage;
export const DocsBody = components.DocsBody;
export const DocsDescription = components.DocsDescription;
export const DocsTitle = components.DocsTitle;
export const MarkdownCopyButton = components.MarkdownCopyButton;
export const ViewOptionsPopover = components.ViewOptionsPopover;

// Type exports for convenience
export type { DocsPageProps } from 'fumadocs-ui/layouts/docs/page';
