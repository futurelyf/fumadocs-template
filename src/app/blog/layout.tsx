import { HomeLayout } from '@/layouts/home';
import { homeOptions } from '@/lib/layout.shared';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <HomeLayout {...homeOptions()}>{children}</HomeLayout>;
}
