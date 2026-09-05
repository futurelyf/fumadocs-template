import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import { FumadocsIcon } from '@/app/layout.client';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <FumadocsIcon className="size-5" />
          {appName}
        </>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}`,
  };
}
