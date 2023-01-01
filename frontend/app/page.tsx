'use client';

import React from 'react';
import Cta from '@/app/Cta';
import Hero from '@/app/Hero';
import Stats from '@/app/Stats';
import Header from '@/components/Header';

export default function Page() {
  return (
    <div className="isolate">
      <div className="bg-white p-5 shadow md:p-8">
        <Header />
      </div>
      <main className="relative overflow-hidden">
        <Hero />
        <Stats />
        <Cta />
      </main>
    </div>
  );
}
