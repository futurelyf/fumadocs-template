import Link from 'next/link';
import { cn } from '@/lib/cn';
import { Hero } from './page.client';

export default function HomePage() {
  return (
    <div className="pt-4 pb-6 md:pb-12">
      <div className="relative flex min-h-[600px] h-[70vh] max-h-[900px] border rounded-2xl overflow-hidden mx-auto w-full max-w-[1400px] bg-origin-border">
        <Hero />
        <div className="flex flex-col z-2 px-4 size-full md:p-12 max-md:items-center max-md:text-center">
          <p
            className="mt-12 text-xs font-medium rounded-full p-2 border w-fit"
            style={{
              color: 'var(--color-fd-primary)',
              borderColor: 'color-mix(in srgb, var(--color-fd-primary) 50%, transparent)',
            }}
          >
            The docs template you love!
          </p>
          <h1 className="text-4xl my-8 leading-tight font-medium xl:text-5xl xl:mb-12">
            Build excellent
            <br className="md:hidden" /> documentation,
            <br />
            your <span style={{ color: 'var(--color-fd-primary)' }}>style</span>.
          </h1>
          <div className="flex flex-row items-center justify-center gap-4 flex-wrap w-fit">
            <Link
              href="/docs"
              className={cn(
                'inline-flex justify-center px-5 py-3 rounded-full font-medium tracking-tight transition-colors max-sm:text-sm',
                'text-fd-primary-foreground hover:opacity-90'
              )}
              style={{ backgroundColor: 'var(--color-fd-primary)' }}
            >
              Get Started
            </Link>
            <a
              href="https://futurestudio.dev"
              target="_blank"
              rel="noreferrer noopener"
              className={cn(
                'inline-flex justify-center px-5 py-3 rounded-full font-medium tracking-tight transition-colors max-sm:text-sm',
                'border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent'
              )}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
