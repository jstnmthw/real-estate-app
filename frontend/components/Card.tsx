import { FC } from 'react';
import Image from 'next/image';
import { classNames } from '@/helpers/utilites';
import { HeartIcon } from '@heroicons/react/24/outline';

interface PropertyProps {
  price: number;
  currency: string;
  title: string;
  address: string;
  area: string;
  area_type: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
}

/**
 * @todo: Must change the toLocalString() parameter on price to match currency selected
 */
const Card: FC<{ className?: string; property: PropertyProps }> = ({
  className,
  property,
}) => {
  return (
    <div
      className={classNames(
        className ? className : '',
        'overflow-hidden rounded-xl bg-white shadow-lg',
      )}
    >
      <Image
        width={500}
        height={500}
        src={property?.image}
        alt={''}
        className="object-cover"
      />
      <div className="relative p-6">
        <button
          className="absolute top-4 right-4 rounded-lg border border-zinc-200 bg-white p-2 text-zinc-500 shadow hover:text-pink-500"
          type="button"
        >
          <span className="sr-only">Favorite this property</span>
          <HeartIcon className="h-5 w-5" />
        </button>
        <span className="text-lg font-semibold text-lavender-500">
          {property?.currency}
          {property?.price.toLocaleString('en-US')}
        </span>
        <h2 className="text-lg font-semibold">{property?.title}</h2>
        <p className="mb-4 text-sm font-medium text-zinc-600">
          {property?.address}
        </p>
        <div className="flex space-x-10">
          <span className="font-medium">{property.bedrooms} Bed</span>
          <span className="font-medium">{property.bathrooms} Bath</span>
          <span className="font-medium">
            {property.area} {property.area_type.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
