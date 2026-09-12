'use client';

import { Check, Share } from 'lucide-react';
import { useCopyButton } from 'fumadocs-ui/utils/use-copy-button';

export function ShareButton({ url }: { url: string }) {
  const [isChecked, onCopy] = useCopyButton(() => {
    void navigator.clipboard.writeText(`${window.location.origin}${url}`);
  });

  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
      style={{ backgroundColor: 'var(--color-fd-primary)' }}
      onClick={onCopy}
    >
      {isChecked ? <Check className="size-4" /> : <Share className="size-4" />}
      {isChecked ? 'Copied URL' : 'Share Post'}
    </button>
  );
}
