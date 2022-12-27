import Image from 'next/image';
import { FC } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

const Hero: FC = () => {
  return (
    <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div>
          <div className="mt-20">
            <div>
              <a href="#" className="inline-flex space-x-4">
                <span className="rounded bg-blue-50/50 px-2.5 py-1 text-sm font-semibold text-blue-500">
                  What&apos;s new
                </span>
                <span className="inline-flex items-center space-x-1 text-sm font-medium text-blue-500">
                  <span>Just shipped version 0.1.0</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </a>
            </div>
            <div className="mt-6 sm:max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Thailand&apos;s #1 property listing platform.
              </h1>
              <p className="mt-6 text-xl text-gray-500">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo.
              </p>
            </div>
            <form action="#" className="mt-12 sm:flex sm:w-full sm:max-w-lg">
              <div className="min-w-0 flex-1">
                <label htmlFor="hero-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="hero-email"
                  type="email"
                  className="block w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Bangkok, Thailand"
                />
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="block w-full rounded-md border border-transparent bg-blue-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:px-10"
                >
                  Search
                </button>
              </div>
            </form>
            <div className="mt-6">
              <div className="inline-flex items-center divide-x divide-gray-300">
                <div className="flex flex-shrink-0 pr-5">
                  <StarIcon
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                  <StarIcon
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                  <StarIcon
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                  <StarIcon
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                  <StarIcon
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0 flex-1 py-1 pl-5 text-sm text-gray-500 sm:py-3">
                  <span className="font-medium text-gray-900">
                    Rated 5 stars
                  </span>{' '}
                  by over{' '}
                  <span className="font-medium text-blue-500">100k users</span>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
        <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="hidden sm:block">
            <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full" />
            <svg
              className="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
              />
            </svg>
          </div>
          <div className="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
            <Image
              width={800}
              height={530}
              src={
                'https://images.unsplash.com/photo-1633362066954-9d08733e909e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2084&q=80'
              }
              alt={''}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
