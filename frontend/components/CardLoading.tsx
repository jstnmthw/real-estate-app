import { FC } from 'react';
import { classNames } from '@/helpers/utilites';

const CardLoading: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <div
      className={classNames(
        className ? className : '',
        'overflow-hidden rounded-xl bg-white shadow-lg',
      )}
    >
      <div className="relative aspect-video w-full animate-pulse bg-gray-100"></div>
      <div className="bg-white p-5">
        <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-100"></div>
        <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-100"></div>
        <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-100"></div>
        <div className="flex space-x-10">
          <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-100"></div>
          <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-100"></div>
          <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
};

export default CardLoading;
