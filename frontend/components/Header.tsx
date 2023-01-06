'use client';

import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import React, { useState } from 'react';
import UserMenu from '@/app/dashboard/UserMenu';
import PrimaryButton from '@/components/ui/buttons/PrimaryButton';
import { useAuth } from '@/hooks/auth';
import { Logo } from '@/components/icons/Logo';
import { Bars3Icon } from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const { user } = useAuth({ middleware: 'guest' });
  let [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Buy', href: '/buy' },
    { name: 'Rent', href: '/rent' },
    { name: 'Sell', href: '/sell' },
  ];

  function handleCloseMobileMenu() {
    setMobileMenuOpen(false);
  }
  return (
    <>
      <div className="bg-slate-900 py-1 font-medium text-white">
        <div className="mx-auto flex max-w-md text-sm sm:max-w-3xl lg:max-w-7xl">
          USD
        </div>
      </div>
      <nav className="mx-auto flex max-w-md py-6 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex md:min-w-0 md:flex-1" aria-label="Global">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">RealEstate</span>
            <Logo className="h-8 w-8 text-blue-600" />
          </Link>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-500"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:flex md:min-w-0 md:flex-1 md:justify-center md:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-gray-900 hover:text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden items-center space-x-5 md:flex md:min-w-0 md:flex-1 md:justify-end">
          {user ? (
            <UserMenu />
          ) : (
            <>
              <Link
                href={'/signin'}
                className="text-sm font-medium text-neutral-600"
              >
                Login
              </Link>
              <Link href={'/register'} className="font-medium">
                <PrimaryButton
                  size="md"
                  className="shadow-lg shadow-blue-300 transition-shadow hover:shadow-md hover:shadow-blue-300"
                >
                  Sign up
                </PrimaryButton>
              </Link>
            </>
          )}
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white p-5 md:hidden">
          <div className="flex h-9 items-center justify-between">
            <div className="flex">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">RealEstate</span>
                <Logo className={'h-8 w-8'} />
              </Link>
            </div>
            <div className="flex">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-8 w-8" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href={'/signin'}
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};
export default Header;
