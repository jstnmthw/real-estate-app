'use client';

import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  BookmarkSquareIcon,
  BuildingOfficeIcon,
  CalendarIcon,
  HomeModernIcon,
  KeyIcon,
  LifebuoyIcon,
  MegaphoneIcon,
  ShieldCheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { classNames } from '@/helpers/utilites';
import { Logo } from '@/components/icons/Logo';
import Link from 'next/link';

const menu = [
  {
    name: 'Buy',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: HomeModernIcon,
  },
  {
    name: 'Rent',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Sell',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: KeyIcon,
  },
];
const resources = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
  },
  { id: 3, name: 'Improve your customer experience', href: '#' },
];

export default function Header() {
  return (
    <Popover className="relative bg-white md:bg-transparent">
      <div className="hidden bg-lavender-1000 py-2.5 text-sm md:block">
        <div className="container flex justify-between">
          <div className="text-lavender-50">
            <MegaphoneIcon className="mr-2 inline-block h-5 w-5 text-lavender-400" />
            Special announcements can go here too
          </div>
          <div className="flex space-x-5">
            <button type="button" className="group font-medium text-zinc-200">
              <span>English</span>
              <ChevronDownIcon
                className={
                  'ml-0.5 inline-block h-5 w-5 text-zinc-600 group-hover:text-gray-500'
                }
                aria-hidden="true"
              />
            </button>
            <button type="button" className="group font-medium text-zinc-200">
              <span>USD</span>
              <ChevronDownIcon
                className={
                  'ml-0.5 inline-block h-5 w-5 text-zinc-600 group-hover:text-gray-500'
                }
                aria-hidden="true"
              />
            </button>
            <Link href={'signin'} className="font-medium text-zinc-200">
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex items-center justify-between border-b border-gray-100 py-4 md:justify-start md:space-x-10 md:border-0 md:py-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href={'/'}>
              <span className="sr-only">Real Estate</span>
              <Logo />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lavender-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            {menu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-lavender-900 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-lavender-900',
                      'group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-lavender-500 focus:ring-offset-2',
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-lavender-700' : 'text-lavender-500',
                        'ml-2 h-5 w-5 group-hover:text-gray-500',
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-lavender-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-base font-medium text-gray-500">
                              Recent Posts
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li
                                  key={post.id}
                                  className="truncate text-base"
                                >
                                  <a
                                    href={post.href}
                                    className="font-medium text-gray-900 hover:text-gray-700"
                                  >
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a
                              href="#"
                              className="font-medium text-lavender-600 hover:text-lavender-500"
                            >
                              View all posts
                              <span aria-hidden="true"> &rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link
              href={'register'}
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-lavender-600 drop-shadow hover:text-lavender-800"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <Logo />
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lavender-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {menu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-lavender-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <Link
                  href={'register'}
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-lavender-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-lavender-700"
                >
                  Sign up
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <Link
                    href={'signin'}
                    className="text-lavender-600 hover:text-lavender-500"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
