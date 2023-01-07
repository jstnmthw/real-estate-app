'use client';

import React from 'react';
import Header from '@/components/Header';

export default function Page() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-main bg-cover"></div>
      <Header />
      <main className="container">Some Content here</main>
    </>
  );
}
