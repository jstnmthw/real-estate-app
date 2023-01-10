import { FC } from 'react';
import Image from 'next/image';
import { classNames } from '@/helpers/utilites';
import { BedIcon } from '@/components/icons/BedIcon';
import { BathIcon } from '@/components/icons/BathIcon';
import { HeartIcon } from '@/components/icons/HeartIcon';
import { Property } from '@/types/property';

/**
 *
 * @todo: Must change the toLocalString('en-US') parameter on price to match currency selected
 * @param property
 * @param className
 * @param priority Sets whether the image should be a priority load (see: https://nextjs.org/docs/basic-features/image-optimization#priority)
 * @constructor
 */
const Card: FC<{
  property: Property;
  className?: string;
  priority?: boolean;
}> = ({ property, className, priority = false }) => {
  return (
    <div
      className={classNames(
        className ? className : '',
        'overflow-hidden rounded-xl bg-white shadow-lg',
      )}
    >
      <Image
        width={288}
        height={162}
        src={property?.image}
        alt={''}
        className="object-cover"
        priority={priority}
      />
      <div className="relative p-6">
        <button
          className="absolute top-4 right-4 rounded-lg border border-zinc-200 bg-white p-2 text-zinc-500 shadow hover:text-pink-500"
          type="button"
          title="Favorite this property"
        >
          <span className="sr-only">Favorite this property</span>
          <HeartIcon className="h-4 w-4" />
        </button>
        <span className="text-base font-semibold text-lavender-500 md:text-lg">
          {property?.currency}
          {property?.sales_price?.toLocaleString()}
        </span>
        <h2 className="font-semibold md:text-lg">{property?.title}</h2>
        <p className="mb-4 text-sm font-medium text-zinc-500">
          {property?.address}
        </p>
        <div className="flex justify-between text-sm">
          <div className="flex items-center font-medium">
            <BedIcon className="mr-2 h-5 w-5 text-lavender-300" />{' '}
            {property.bedrooms} Bed
          </div>
          <div className="flex items-center font-medium">
            <BathIcon className="mr-2 h-5 w-5 text-lavender-300" />{' '}
            {property.bathrooms} Bath
          </div>
          <div className="flex items-center font-medium">
            {property.area_size?.toLocaleString()} {property.area_type}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
