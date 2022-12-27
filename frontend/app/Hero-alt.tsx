import Link from 'next/link';
import Image from 'next/image';
import PatternBg from '@/components/ui/PatternBg';
import PrimaryButton from '@/components/ui/buttons/PrimaryButton';
import LightButton from '@/components/ui/buttons/LightButton';
import BottomGradientBg from '@/components/ui/BottomGradientBg';
import { UsersIcon } from '@heroicons/react/24/outline';
import React, { FC } from 'react';

export const HeroAlt: FC = () => {
  return (
    <>
      <PatternBg />
      <div className="relative px-6 md:px-8">
        <div className="mx-auto max-w-3xl pb-32 pt-20 sm:pb-48 sm:pt-48">
          <div>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                {/* Announcement banner */}
                <span className="text-gray-600">
                  Announcing our next round of funding.{' '}
                  <Link
                    href={'/dashboard'}
                    className="font-semibold text-blue-600"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </Link>
                </span>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                Thailand&apos;s #1 property listing platform.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                Hundreds and thousands for listing all over the major areas
                inside Thailand.
              </p>
              <div className="mt-8 flex gap-x-4 sm:justify-center">
                <PrimaryButton
                  size="xl"
                  className="shadow-lg shadow-blue-300 transition-shadow hover:shadow-md hover:shadow-blue-300"
                >
                  Search Now
                </PrimaryButton>
                <LightButton size="xl">Learn More</LightButton>
              </div>
            </div>
            <BottomGradientBg />
          </div>
        </div>
      </div>
      <div className="relative bg-white">
        <div className="h-56 bg-blue-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
          <Image
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Support team"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white">
                <UsersIcon className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Deliver what your customers want every time
            </h2>
            <p className="mt-6 text-lg text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              nihil ea rerum ipsa. Nostrum consectetur sequi culpa doloribus
              omnis, molestiae esse placeat, exercitationem magnam quod
              molestias quia aspernatur deserunt voluptatibus.
            </p>
            <div className="mt-8 overflow-hidden">
              <dl className="-mx-8 -mt-8 flex flex-wrap">
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base font-medium text-gray-500">
                    Delivery
                  </dt>
                  <dd className="order-1 text-2xl font-bold text-blue-600 sm:text-3xl sm:tracking-tight">
                    24/7
                  </dd>
                </div>
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base font-medium text-gray-500">
                    Pepperoni
                  </dt>
                  <dd className="order-1 text-2xl font-bold text-blue-600 sm:text-3xl sm:tracking-tight">
                    99.9%
                  </dd>
                </div>
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base font-medium text-gray-500">
                    Calories
                  </dt>
                  <dd className="order-1 text-2xl font-bold text-blue-600 sm:text-3xl sm:tracking-tight">
                    100k+
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
