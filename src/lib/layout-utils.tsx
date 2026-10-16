import { source } from '@/lib/source';
import { getSection } from '@/lib/navigation';
import type { CSSProperties } from 'react';
import type * as PageTree from 'fumadocs-core/page-tree';
import type { LayoutType } from './layout-config';

/**
 * Shared tab transform logic used by all layouts
 * Applies section-based coloring to tab icons
 */
export function createTabTransform(layoutType?: LayoutType) {
  return (option: any, node: PageTree.Node) => {
    const meta = source.getNodeMeta(node);
    if (!meta || !node.icon) return option;

    const color = `var(--${getSection(meta.path)}-color, var(--color-fd-foreground))`;

    // Glass layout needs constrained icon size
    if (layoutType === 'glass') {
      return {
        ...option,
        icon: (
          <div
            className="[&_svg]:size-4 rounded-lg text-(--tab-color) max-md:bg-(--tab-color)/10 max-md:border max-md:p-1.5"
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
    }

    // Default for docs, spacious, notebook
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
  };
}
