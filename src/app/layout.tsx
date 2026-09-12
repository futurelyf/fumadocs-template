import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import { Body } from './layout.client';
import type { Metadata } from 'next';
import { IconRegistry } from '@/lib/icon-registry';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Future Studio',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <Body>
        <IconRegistry />
        <RootProvider>{children}</RootProvider>
      </Body>
    </html>
  );
}
