'use client';

import React from 'react';
import Header from '@/components/Header';
import { classNames } from '@/helpers/utilites';
import { Lexend } from '@next/font/google';
import HeroSearchBar from '@/components/HeroSearchBar';
import Card from '@/components/Card';
import Image from 'next/image';
import Footer from '@/components/Footer';

const lexend = Lexend({
  variable: '--font-inter',
  subsets: ['latin'],
});

const property = {
  title: 'Garden Villas',
  price: 1450000,
  currency: '$',
  address: '123 Candy Cane Lane, Elm Street, CA',
  area: '76',
  area_type: 'sqm',
  bedrooms: 1,
  bathrooms: 1,
  image: '/img/properties/property7.jpg',
};

export default function Page() {
  return (
    <div className="bg-main">
      <Header />
      <main className="container">
        {/* Hero */}
        <div className="items-center md:grid md:grid-cols-2">
          <div
            className={classNames(
              lexend.className,
              'col-span-1 py-20 text-3xl font-bold tracking-tight md:max-w-xl lg:text-6xl',
            )}
          >
            Thailand&apos;s #1 property listing platform
          </div>
          <Card property={property} className={'relative mt-10 max-w-xs'} />
        </div>
        <div className="max-w-4xl">
          <HeroSearchBar />
        </div>
      </main>
      <Footer />
    </div>
  );
}
