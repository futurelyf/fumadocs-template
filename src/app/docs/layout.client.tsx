'use client';

import { DocsLayout as DocsLayoutDefault } from 'fumadocs-ui/layouts/docs';
import { DocsLayout as DocsLayoutSpacious } from '@/layouts/spacious';
import { DocsLayout as DocsLayoutGlass } from '@/layouts/glass';
import { DocsLayout as DocsLayoutNotebook } from '@/layouts/notebook';
import { createTabTransform } from '@/lib/layout-utils';
import type { ReactNode } from 'react';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import type * as PageTree from 'fumadocs-core/page-tree';
import type { LayoutType } from '@/lib/layout-config';

interface DocsLayoutWrapperProps extends BaseLayoutProps {
  layoutType: LayoutType;
  tree: PageTree.Root;
  children: ReactNode;
}

/**
 * Unified layout wrapper that switches between all available layouts
 * based on the layoutType prop
 */
export function DocsLayoutWrapper({ layoutType, children, ...props }: DocsLayoutWrapperProps) {
  let Layout;

  switch (layoutType) {
    case 'spacious':
      Layout = DocsLayoutSpacious;
      break;
    case 'glass':
      Layout = DocsLayoutGlass;
      break;
    case 'notebook':
      Layout = DocsLayoutNotebook;
      break;
    case 'docs':
    default:
      Layout = DocsLayoutDefault;
      break;
  }

  return (
    <Layout
      {...props}
      tabs={{
        transform: createTabTransform(layoutType),
      }}
    >
      {children}
    </Layout>
  );
}
