import { source } from '@/lib/source';
import { DocsLayoutWrapper } from './layout.client';
import { baseOptions } from '@/lib/layout.shared';
import { ACTIVE_LAYOUT } from '@/lib/layout-config';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayoutWrapper layoutType={ACTIVE_LAYOUT} tree={source.getPageTree()} {...baseOptions()}>
      {children}
    </DocsLayoutWrapper>
  );
}
