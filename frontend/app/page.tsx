'use client';

import React from 'react';
import Header from '@/components/Header';
import { classNames } from '@/helpers/utilites';
import { Lexend } from '@next/font/google';
import HeroSearchBar from '@/components/HeroSearchBar';

const lexend = Lexend({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function Page() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-main bg-cover"></div>
      <Header />
      <main className="container">
        {/* Hero */}
        <div
          className={classNames(
            lexend.className,
            'max-w-full py-20 text-3xl font-bold tracking-tight md:max-w-xl lg:text-6xl',
          )}
        >
          Thailand&apos;s #1 property listing platform
        </div>
        <div className="max-w-4xl">
          <HeroSearchBar />
        </div>
      </main>
    </>
  );
}
