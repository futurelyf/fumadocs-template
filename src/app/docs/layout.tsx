import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { getSection } from '@/lib/navigation';
import type { CSSProperties } from 'react';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...baseOptions()}
      tabs={{
        transform(option, node) {
          const meta = source.getNodeMeta(node);
          if (!meta || !node.icon) return option;
          const color = `var(--${getSection(meta.path)}-color, var(--color-fd-foreground))`;

          return {
            ...option,
            icon: (
              <div
                className="[&_svg]:size-full rounded-lg size-full text-(--tab-color) max-md:bg-(--tab-color)/10 max-md:border max-md:p-1.5"
                style={
                  {
                    '--tab-color': color,
                  } as CSSProperties
                }
              >
                {node.icon}
              </div>
            ),
          };
        },
      }}
    >
      {children}
    </DocsLayout>
  );
}
