'use client';

import { FC, useEffect, useState } from 'react';
import { Property } from '@/types/property';
import axios from '@/lib/axios';
import Card from '@/components/Card';
import CardLoading from '@/components/CardLoading';

const FeaturedProperties: FC = () => {
  const [properties, setProperties] = useState<Property[] | undefined>(
    undefined,
  );
  const [loading, setLoading] = useState<boolean>(true);
  const limit = 12;
  const host = process.env.NEXT_PUBLIC_API_HOST;

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${host}/api/property?limit=${limit}`)
      .then((res) => {
        setProperties(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        throw error;
      });
  }, [host]);

  return (
    <div className="flex snap-x flex-nowrap gap-5 overflow-x-scroll px-2 pb-5">
      {loading
        ? [...Array(limit)].map((key, index) => {
            return (
              <div key={index} className="w-72 flex-none snap-center">
                <CardLoading />
              </div>
            );
          })
        : properties?.map((property: Property, index: number) => {
            return (
              <div key={index} className="w-72 flex-none snap-center">
                <Card key={index} property={property} />
              </div>
            );
          })}
    </div>
  );
};

export default FeaturedProperties;
