import Header from '@/components/Header';
import React from 'react';
import Image from 'next/image';

async function getData() {
  await fetch('http://localhost/sanctum/csrf-cookie');
  return await fetch('http://localhost/api/property/search');
  // return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <>
      <div className="bg-white p-5 shadow md:p-6">
        <Header />
      </div>
      <div className="grid grid-cols-6">
        <div className="col-span-6 p-4 lg:col-span-4">
          <div className="flex rounded-3xl border border-neutral-200 bg-white p-4 shadow">
            <Image
              src="https://loremflickr.com/g/280/180/villa,condo,apartment,house,townhouse"
              width={200}
              height={175}
              alt={''}
              className="mr-7 max-w-full rounded-xl"
            />
            <h2 className="text-lg font-medium tracking-tight">
              2 bedrooms 3 bathroom condo for sale in Phuket
            </h2>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </>
  );
}
