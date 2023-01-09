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

  useEffect(() => {
    setLoading(true);
    axios
      .get('/api/property')
      .then((res) => {
        setProperties(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-4">
      {loading
        ? [...Array(10)].map((k, i) => {
            return <CardLoading key={i} />;
          })
        : properties?.map((property: Property, index: number) => {
            return <Card key={index} property={property} />;
          })}
    </div>
  );
};

export default FeaturedProperties;
