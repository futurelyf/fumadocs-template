import { Icon } from '@iconify/react';
import { createElement } from 'react';

interface IconifyPluginOptions {
  defaultIcon?: string;
}

/**
 * Convert icon names into Iconify Icons, requires `@iconify/react` to be installed.
 *
 * Icon names should follow the format: "source:name" (e.g., "cbi:claude-clawd", "lucide:home")
 */
export function iconifyPlugin(options: IconifyPluginOptions = {}) {
  const { defaultIcon } = options;

  return {
    name: 'fumadocs:iconify-icons',
    transformPageTree: {
      file: (node: any) => {
        if (node.icon !== undefined && typeof node.icon === 'string' && node.icon.includes(':')) {
          node.icon = createElement(Icon, { icon: node.icon });
        } else if (node.icon === undefined && defaultIcon) {
          node.icon = createElement(Icon, { icon: defaultIcon });
        }
        return node;
      },
      folder: (node: any) => {
        if (node.icon !== undefined && typeof node.icon === 'string' && node.icon.includes(':')) {
          node.icon = createElement(Icon, { icon: node.icon });
        } else if (node.icon === undefined && defaultIcon) {
          node.icon = createElement(Icon, { icon: defaultIcon });
        }
        return node;
      },
      separator: (node: any) => {
        if (node.icon !== undefined && typeof node.icon === 'string' && node.icon.includes(':')) {
          node.icon = createElement(Icon, { icon: node.icon });
        } else if (node.icon === undefined && defaultIcon) {
          node.icon = createElement(Icon, { icon: defaultIcon });
        }
        return node;
      },
    },
  };
}
