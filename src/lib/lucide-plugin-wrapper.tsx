import { createElement } from 'react';
import { icons } from 'lucide-react';

/**
 * Custom Lucide Icons plugin that skips Iconify-formatted icons (those containing ':')
 * This allows Lucide and Iconify to co-exist without conflicts.
 */
export function lucideIconsPluginWrapper(options: { defaultIcon?: keyof typeof icons } = {}) {
  const { defaultIcon } = options;

  return {
    name: 'fumadocs:lucide-icons',
    transformPageTree: {
      file: (node: any) => {
        if (node.icon !== undefined && typeof node.icon === 'string') {
          // Skip icons with colon (Iconify format)
          if (node.icon.includes(':')) {
            return node;
          }
          const Icon = icons[node.icon as keyof typeof icons];
          if (!Icon) {
            console.warn(`[lucide-icons-plugin] Unknown icon detected: ${node.icon}.`);
            return node;
          }
          node.icon = createElement(Icon);
        } else if (node.icon === undefined && defaultIcon) {
          node.icon = createElement(icons[defaultIcon]);
        }
        return node;
      },
      folder: (node: any) => {
        if (node.icon !== undefined && typeof node.icon === 'string') {
          // Skip icons with colon (Iconify format)
          if (node.icon.includes(':')) {
            return node;
          }
          const Icon = icons[node.icon as keyof typeof icons];
          if (!Icon) {
            console.warn(`[lucide-icons-plugin] Unknown icon detected: ${node.icon}.`);
            return node;
          }
          node.icon = createElement(Icon);
        } else if (node.icon === undefined && defaultIcon) {
          node.icon = createElement(icons[defaultIcon]);
        }
        return node;
      },
      separator: (node: any) => {
        if (node.icon !== undefined && typeof node.icon === 'string') {
          // Skip icons with colon (Iconify format)
          if (node.icon.includes(':')) {
            return node;
          }
          const Icon = icons[node.icon as keyof typeof icons];
          if (!Icon) {
            console.warn(`[lucide-icons-plugin] Unknown icon detected: ${node.icon}.`);
            return node;
          }
          node.icon = createElement(Icon);
        } else if (node.icon === undefined && defaultIcon) {
          node.icon = createElement(icons[defaultIcon]);
        }
        return node;
      },
    },
  };
}
