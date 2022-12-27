'use client';

import Link from 'next/link';
import PrimaryButton from '@/components/ui/buttons/PrimaryButton';
import MobileMenu from '@/components/MobileMenu';
import { Logo } from '@/components/icons/Logo';
import { Bars3Icon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { useAuth } from '@/hooks/auth';
import Image from 'next/image';
const Header = () => {
  const { user } = useAuth({ middleware: 'guest' });
  let [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  function handleCloseMobileMenu() {
    setMobileMenuOpen(false);
  }
  return (
    <div className="container">
      <div className="flex justify-center pt-6 md:justify-between">
        <div className="flex items-center">
          <Link
            href={'/'}
            className="mt-6 inline-block text-black md:mt-0 md:mr-4"
          >
            <h1>
              <Logo className="h-20 w-20 md:h-12 md:w-12" />
            </h1>
          </Link>
          <nav className="ml-4 hidden md:block">
            <ul className="tracking-loose flex gap-6">
              <li>
                <Link
                  href={'/'}
                  className="block py-1.5 font-medium transition-colors hover:text-blue-600"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="block py-1.5 font-medium transition-colors hover:text-blue-600"
                >
                  APIs
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="block py-1.5 font-medium transition-colors hover:text-blue-600"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="block py-1.5 font-medium transition-colors hover:text-blue-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {!user ? (
          <div className="ml-4 hidden items-center gap-4 md:flex">
            <Link href={'signin'} className={'font-medium'}>
              Sign in
            </Link>
            <PrimaryButton>Get started</PrimaryButton>
          </div>
        ) : (
          <div className="ml-4 hidden items-center gap-4 md:flex">
            <Link
              href={'/dashboard'}
              className={'rounded-full font-semibold hover:text-blue-600'}
            >
              <Image
                src={user.avatar}
                alt={user.name ?? 'Avatar'}
                width={24}
                height={24}
                className={'block h-6 w-6 rounded-full'}
              />
              {user.name}
            </Link>
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => {
            setMobileMenuOpen(true);
          }}
          className="absolute top-5 right-5 block rounded-lg border border-neutral-300 p-1.5 text-neutral-900 shadow-md transition-all hover:border-neutral-500 hover:shadow-lg focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 md:hidden"
        >
          <Bars3Icon className="h-5 w-5" />
        </button>
        <MobileMenu
          handleClose={handleCloseMobileMenu}
          isOpen={mobileMenuOpen}
          body={
            <ul className="tracking-loose w-full rounded-lg bg-white py-2">
              <li>
                <Link
                  href={'/'}
                  className="block px-4 py-1.5 font-medium transition-colors hover:text-blue-600"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="block px-4 py-1.5 font-medium transition-colors hover:text-blue-600"
                >
                  APIs
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="block px-4 py-1.5 font-medium transition-colors hover:text-blue-600"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="block px-4 py-1.5 font-medium transition-colors hover:text-blue-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          }
        />
      </div>
    </div>
  );
};
export default Header;
