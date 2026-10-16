import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Icon } from '@iconify/react';
import { Signature } from 'lucide-react';
import { appName, blogRoute, docsRoute, gitConfig } from './shared';
import { FumadocsIcon } from '@/app/layout.client';

const githubUrl = `https://github.com/${gitConfig.user}`;

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
    links: [
      {
        type: 'icon',
        url: githubUrl,
        text: 'Github',
        label: 'GitHub',
        icon: <Icon icon="fa7-brands:github" />,
        external: true,
      },
      {
        type: 'icon',
        url: blogRoute,
        text: 'Blog',
        label: 'Blog',
        icon: <Signature />,
      },
    ],
  };
}

export function homeOptions(): BaseLayoutProps {
  return {
    ...baseOptions(),
    links: [
      {
        text: 'Docs',
        url: docsRoute,
      },
      {
        text: 'Blog',
        url: blogRoute,
      },
    ],
    githubUrl,
  };
}
