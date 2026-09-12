'use client';

import { addCollection } from '@iconify/react';
import { useEffect } from 'react';

/**
 * Preload icon collections for offline use.
 * This ensures icons work without CDN dependency.
 *
 * To add more icon sets:
 * 1. Install: pnpm install -D @iconify-json/<collection-name>
 * 2. Import the JSON data in this file
 * 3. Add to the collections array below
 */

// Import your icon collections here
import fa7BrandsIcons from '@iconify-json/fa7-brands/icons.json';

// Add all collections to this array
const collections = [
  fa7BrandsIcons,
  // Add more icon sets here
];

// Register all collections
collections.forEach((collection) => {
  addCollection(collection as any);
});

/**
 * IconRegistry component - must be rendered in your root layout
 * to ensure icons are registered on the client
 */
export function IconRegistry() {
  useEffect(() => {
    // Re-register on client mount to ensure they're available
    collections.forEach((collection) => {
      addCollection(collection as any);
    });
  }, []);

  return null;
}
