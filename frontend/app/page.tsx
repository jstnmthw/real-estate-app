'use client';

import React from 'react';
import Cta from '@/app/Cta';
import Hero from '@/app/Hero';
import Stats from '@/app/Stats';
import Header from '@/components/Header';

export default function Page() {
  return (
    <div className="isolate">
      <Header />
      <main className="relative overflow-hidden">
        <Hero />
        <Stats />
        <Cta />
      </main>
    </div>
  );
}
