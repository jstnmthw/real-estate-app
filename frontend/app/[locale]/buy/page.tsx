import React from 'react';
import fetcher from '@/lib/fetcher';
import TopNavBar from '@/components/TopNavBar';
import Footer from '@/components/Footer';
import { useLocale } from 'next-intl';
import Card from '@/components/Card';
import { Property } from '@/types/property';

async function getData() {
  return fetcher<Property[]>('/api/property/search');
}

export default async function Page() {
  const locale = useLocale();
  // const t = useTranslations('page');
  const properties = await getData();
  return (
    <div className="bg-main bg-no-repeat">
      <TopNavBar defaultLocale={locale} />
      <main className="container grid grid-cols-4 gap-4">
        {properties.map((property: Property) => {
          return <Card key={property.id} property={property} />;
        })}
      </main>
      <Footer />
    </div>
  );
}
