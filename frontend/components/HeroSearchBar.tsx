import { FC } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const HeroSearchBar: FC = () => {
  return (
    <>
      <div className="ml-4">
        <button
          type="button"
          className="rounded-tl-xl border-b-2 border-lavender-500 px-8 py-3 font-medium"
        >
          Buy
        </button>
        <button
          type="button"
          className="px-8 py-3 font-medium text-gray-500 hover:text-lavender-600"
        >
          Rent
        </button>
        <button
          type="button"
          className="rounded-tr-xl px-8  py-3 font-medium text-gray-500 hover:text-lavender-600"
        >
          Sell
        </button>
      </div>
      <div className="flex grid flex-col items-center gap-4 rounded-xl bg-white px-8 py-6 shadow-xl md:grid-cols-10 md:gap-6">
        <div className="col-span-full md:col-span-3">
          <div className="mb-2 text-sm text-zinc-500">Location</div>
          <div className="group flex cursor-pointer items-center justify-between text-left font-semibold">
            Bangkok, Thailand
            <div className="rounded bg-lavender-50 p-0.5 text-lavender-500 transition-all group-hover:bg-lavender-100">
              <ChevronDownIcon className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="col-span-full md:col-span-2">
          <div className="mb-2 text-sm text-zinc-500">Price</div>
          <div className="group flex cursor-pointer items-center justify-between text-left font-semibold">
            100k - 250k
            <div className="rounded bg-lavender-50 p-0.5 text-lavender-500 transition-all group-hover:bg-lavender-100">
              <ChevronDownIcon className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="mb-2 text-sm text-zinc-500">Bed(s)</div>
          <div className="group flex cursor-pointer items-center justify-between text-left font-semibold">
            1+
            <div className="rounded bg-lavender-50 p-0.5 text-lavender-500 transition-all group-hover:bg-lavender-100">
              <ChevronDownIcon className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="mb-2 text-sm text-zinc-500">Bath(s)</div>
          <div className="group flex cursor-pointer items-center justify-between text-left font-semibold">
            1+
            <div className="rounded bg-lavender-50 p-0.5 text-lavender-500 transition-all group-hover:bg-lavender-100">
              <ChevronDownIcon className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="col-span-3 mt-3 md:mt-0">
          <button className="w-full items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-lavender-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-lavender-300 hover:bg-lavender-600 hover:text-lavender-50">
            Browse Properties
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSearchBar;
