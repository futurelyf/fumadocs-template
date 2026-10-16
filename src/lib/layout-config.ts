/**
 * Centralized layout configuration
 * Change ACTIVE_LAYOUT to switch between different layout styles
 */

export type LayoutType = 'docs' | 'spacious' | 'glass' | 'notebook';

/**
 * CHANGE THIS VALUE TO SWITCH LAYOUTS
 * - 'docs': Default Docs Layout (compact, traditional)
 * - 'spacious': Spacious Layout (panel-based, less compact)
 * - 'glass': Glass Layout (glassmorphism design)
 * - 'notebook': Notebook Layout (notebook-style design)
 */
export const ACTIVE_LAYOUT: LayoutType = 'spacious';

export const LAYOUT_CONFIG = {
  docs: {
    name: 'Default Docs Layout',
    description: 'Compact traditional documentation layout',
    requiresCustomCSS: false,
  },
  spacious: {
    name: 'Spacious Layout',
    description: 'Panel-based layout with page in inset beside sidebar',
    requiresCustomCSS: true,
  },
  glass: {
    name: 'Glass Layout',
    description: 'Modern glassmorphism design',
    requiresCustomCSS: true,
  },
  notebook: {
    name: 'Notebook Layout',
    description: 'Notebook-style documentation layout',
    requiresCustomCSS: true,
  },
} as const;
