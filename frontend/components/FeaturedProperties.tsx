'use client';

import { FC } from 'react';
import useSWR from 'swr';
import axios from '@/lib/axios';
import { Property } from '@/types/property';
import Card from '@/components/Card';

const FeaturedProperties: FC = () => {
  let {
    data: properties,
    error,
    mutate,
  } = useSWR<any, string>('/api/property', () =>
    axios
      .get('/api/property')
      .then((res) => {
        return res.data.data;
      })
      .catch((error) => {
        throw error;
      }),
  );

  properties = properties?.slice(0, 4);

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
      {properties?.map((property: Property, index: number) => {
        return <Card key={index} property={property} />;
      })}
    </div>
  );
};

export default FeaturedProperties;
