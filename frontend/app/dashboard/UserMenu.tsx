'use client';

import React, { FC, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import { classNames } from '@/helpers/utilites';
import { useAuth } from '@/hooks/auth';
import Link from 'next/link';

const userNavigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Settings', href: '/dashboard/settings' },
];

const UserMenu: FC = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <></>;
  }

  return (
    <>
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
            <span className="sr-only">Open user menu</span>
            <Image
              src={user.avatar}
              alt={user.name}
              width={28}
              height={28}
              className={'h-7 w-7 rounded-full'}
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {userNavigation.map((item) => (
              <div key={item.name}>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href={item.href}
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </Menu.Item>
              </div>
            ))}
            <div>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type={'button'}
                    onClick={logout}
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block w-full px-4 py-2 text-left text-sm text-gray-700',
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default UserMenu;
