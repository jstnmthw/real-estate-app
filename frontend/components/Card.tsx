import { FC } from 'react';
import Image from 'next/image';
import { classNames } from '@/helpers/utilites';
import { BedIcon } from '@/components/icons/BedIcon';
import { BathIcon } from '@/components/icons/BathIcon';
import { HeartIcon } from '@/components/icons/HeartIcon';

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
          <HeartIcon className="h-4 w-4" />
        </button>
        <span className="text-lg font-semibold text-lavender-500">
          {property?.currency}
          {property?.price.toLocaleString('en-US')}
        </span>
        <h2 className="text-lg font-semibold">{property?.title}</h2>
        <p className="mb-4 text-sm font-medium text-zinc-500">
          {property?.address}
        </p>
        <div className="flex justify-between">
          <div className="flex items-center font-medium">
            <BedIcon className="mr-2 h-5 w-5" /> {property.bedrooms} Bed
          </div>
          <div className="flex items-center font-medium">
            <BathIcon className="mr-2 h-5 w-5" /> {property.bathrooms} Bath
          </div>
          <div className="flex items-center font-medium">
            {property.area} {property.area_type}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
