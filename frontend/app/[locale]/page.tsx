import React from 'react';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import TopNavBar from '@/components/TopNavBar';
import HeroSearchBar from '@/components/HeroSearchBar';
import FeaturedProperties from '@/components/FeaturedProperties';
import { Lexend } from 'next/font/google';
import { classNames } from '@/helpers/utilites';
import { useLocale, useTranslations } from 'next-intl';
import { SparklesIcon } from '@heroicons/react/24/solid';

const lexend = Lexend({
  variable: '--font-lexend',
  subsets: ['latin'],
});

const property = {
  id: 7,
  title: 'Garden Villas',
  sales_price: 1450000,
  rental_price: 2000,
  currency: '$',
  address: '123 Candy Cane Lane, Elm Street, CA',
  area_size: 76,
  area_type: 'sqm',
  bedrooms: 1,
  bathrooms: 1,
  image: '/img/properties/property7.jpg',
};

export default function Page() {
  const locale = useLocale();
  const t = useTranslations('page');
  return (
    <div className="bg-main bg-no-repeat">
      <TopNavBar defaultLocale={locale} />
      <main className="container">
        <div className="items-center md:grid md:grid-cols-2">
          <div
            className={classNames(
              lexend.className,
              'col-span-1 py-20 text-5xl font-bold tracking-tight md:max-w-xl xl:text-6xl',
            )}
          >
            {t('hero.title')}
          </div>
          <Card
            priority
            property={property}
            className={'relative mt-10 w-72'}
          />
        </div>
        <div className="mb-20 max-w-4xl">
          <HeroSearchBar />
        </div>
        <h2
          className={classNames(
            'mb-5 text-2xl font-bold tracking-tight text-lavender-700',
          )}
        >
          <SparklesIcon className="relative -top-0.5 mr-1 inline-block h-6 w-6 text-lavender-400" />{' '}
          {t('featured-properties.title')}
        </h2>
        <FeaturedProperties />
      </main>
      <Footer />
    </div>
  );
}
