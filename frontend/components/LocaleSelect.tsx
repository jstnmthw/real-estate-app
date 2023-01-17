'use client';

import Link from 'next/link';
// import { i18n, Locale2 } from '@/i18n/confg';
import { Fragment, useEffect, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { classNames } from '@/helpers/utilites';
import { usePathname } from 'next/navigation';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function LocaleSelect() {
  const pathName = usePathname();
  const [locale, setLocale] = useState<undefined>(undefined);

  // useEffect(() => {
  //   if (pathName) {
  //     const defaultLocale = pathName.split('/')[1];
  //     const locale = i18n.locales2.find(
  //       (local) => local.locale === defaultLocale,
  //     );
  //     setLocale(locale);
  //   }
  // }, [pathName]);

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? 'text-white' : 'text-zinc-100',
              'group inline-flex items-center rounded-md text-base text-sm font-medium hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-lavender-500 focus:ring-offset-2 focus:ring-offset-lavender-1000',
            )}
          >
            {/*<span>{locale?.label ?? ''}</span>*/}
            <ChevronDownIcon
              className={classNames(
                open ? 'text-lavender-500' : 'text-lavender-700',
                'ml-1 h-5 w-5 group-hover:text-lavender-500',
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
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-56 -translate-x-1/2 transform px-2 sm:px-0">
              <div className="overflow-hidden">
                <div className="relative grid w-48 rounded-lg bg-white px-5 py-8 shadow-lg ring-1 ring-black ring-opacity-5 sm:p-4">
                  {/*{i18n.locales2.map((locale) => {*/}
                  {/*  return (*/}
                  {/*    <div key={locale.locale} className="flex">*/}
                  {/*      <Link*/}
                  {/*        href={redirectedPathName(locale.locale)}*/}
                  {/*        className="w-full py-2 font-medium text-zinc-500 hover:text-zinc-900"*/}
                  {/*      >*/}
                  {/*        {locale.label}*/}
                  {/*      </Link>*/}
                  {/*    </div>*/}
                  {/*  );*/}
                  {/*})}*/}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
