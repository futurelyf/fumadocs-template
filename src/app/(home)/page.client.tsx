'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState, type RefObject } from 'react';
import { cn } from '@/lib/cn';
import HeroImage from './hero-preview.jpeg';
import dynamic from 'next/dynamic';

const GrainGradient = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.GrainGradient),
  {
    ssr: false,
  },
);

const Dithering = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.Dithering),
  {
    ssr: false,
  },
);

export function Hero() {
  const { resolvedTheme } = useTheme();
  const ref = useRef<HTMLImageElement | null>(null);
  const visible = useIsVisible(ref);
  const [showGradient, setShowGradient] = useState(false);
  const [showDithering, setShowDithering] = useState(false);
  const [imageReady, setImageReady] = useState(false);

  useEffect(() => {
    const gradientTimer = setTimeout(() => {
      setShowGradient(true);
    }, 200);

    const ditheringTimer = setTimeout(() => {
      setShowDithering(true);
    }, 600);

    return () => {
      clearTimeout(gradientTimer);
      clearTimeout(ditheringTimer);
    };
  }, []);

  return (
    <>
      {showGradient && (
        <GrainGradient
          className="absolute inset-0 animate-fd-fade-in duration-800"
          colors={
            resolvedTheme === 'dark'
              ? ['#39BE1C', '#9c2f05', '#7A2A0000']
              : ['#fcfc51', '#ffa057', '#7A2A0020']
          }
          colorBack="#00000000"
          softness={1}
          intensity={0.9}
          noise={0.5}
          speed={visible ? 1 : 0}
          shape="corners"
          minPixelRatio={1}
          maxPixelCount={1920 * 1080}
        />
      )}
      {showDithering && (
        <Dithering
          width={720}
          height={720}
          colorBack="#00000000"
          colorFront={resolvedTheme === 'dark' ? '#DF3F00' : '#fa8023'}
          shape="sphere"
          type="4x4"
          scale={0.5}
          size={3}
          speed={0}
          frame={5000 * 120}
          className="absolute animate-fd-fade-in duration-400 max-lg:bottom-[-50%] max-lg:left-[-200px] lg:top-[-5%] lg:right-0"
          minPixelRatio={1}
        />
      )}
      <Image
        ref={ref}
        src={HeroImage}
        alt="hero-image"
        className={cn(
          'absolute top-[460px] left-[20%] max-w-[1200px] rounded-xl border-2 lg:top-[400px]',
          imageReady ? 'animate-in fade-in duration-400' : 'invisible',
        )}
        onLoad={() => setImageReady(true)}
        priority
      />
    </>
  );
}

let observer: IntersectionObserver;
const observerTargets = new WeakMap<Element, (entry: IntersectionObserverEntry) => void>();

function useIsVisible(ref: RefObject<HTMLElement | null>) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    observer ??= new IntersectionObserver((entries) => {
      for (const entry of entries) {
        observerTargets.get(entry.target)?.(entry);
      }
    });

    const element = ref.current;
    if (!element) return;
    observerTargets.set(element, (entry) => {
      setVisible(entry.isIntersecting);
    });
    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observerTargets.delete(element);
    };
  }, [ref]);

  return visible;
}
