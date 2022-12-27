'use client';

import Image from 'next/image';
import { useAuth } from '@/hooks/auth';
import Input from '@/components/form/Input';
import Select from '@/components/form/Select';

export default function Page() {
  const { user } = useAuth();

  if (!user) {
    return <>Loading</>;
  }

  return (
    <main className="flex-1">
      <div className="container py-6">
        <div className="flex-1 xl:overflow-y-auto">
          <div className="mx-auto py-6 px-4 sm:px-6 lg:py-12 lg:px-8">
            <h1 className="border-b text-3xl font-bold tracking-tight text-neutral-900">
              Account
            </h1>
            <form className="divide-y-neutral-200 mt-6 space-y-8 divide-y">
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                <div className="sm:col-span-6">
                  <h2 className="text-xl font-medium text-neutral-900">
                    Profile
                  </h2>
                  <p className="mt-1 text-sm text-neutral-500">
                    This information will be displayed publicly so be careful
                    what you share.
                  </p>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="mb-1 block text-sm font-medium text-neutral-900"
                  >
                    First name
                  </label>
                  <Input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    defaultValue={user.name.split(' ')[0]}
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="mb-1 block text-sm font-medium text-neutral-900"
                  >
                    Last name
                  </label>
                  <Input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    defaultValue={user.name.split(' ')[1]}
                  />
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="username"
                    className="mb-1 block text-sm font-medium text-neutral-900"
                  >
                    Username
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-neutral-300 bg-neutral-50 px-3 text-neutral-500 sm:text-sm">
                      example.com
                    </span>
                    <Input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      defaultValue={user.nickname}
                      className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-neutral-300 text-neutral-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="photo"
                    className="mb-1 block text-sm font-medium text-neutral-900"
                  >
                    Photo
                  </label>
                  <div className="mt-1 flex items-center">
                    <Image
                      width={48}
                      height={48}
                      className="inline-block h-12 w-12 rounded-full"
                      src={user.avatar}
                      alt=""
                    />
                    <div className="ml-4 flex">
                      <div className="relative flex cursor-pointer items-center rounded-md border border-neutral-300 bg-white py-2 px-3 shadow-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-neutral-50 hover:bg-neutral-50">
                        <label
                          htmlFor="user-photo"
                          className="pointer-events-none relative text-sm font-medium text-neutral-900"
                        >
                          <span>Change</span>
                          <span className="sr-only"> user photo</span>
                        </label>
                        <input
                          id="user-photo"
                          name="user-photo"
                          type="file"
                          className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                        />
                      </div>
                      <button
                        type="button"
                        className="ml-3 rounded-md border border-transparent bg-transparent py-2 px-3 text-sm font-medium text-neutral-900 hover:text-neutral-700 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-50"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="description"
                    className="mb-1 block text-sm font-medium text-neutral-900"
                  >
                    Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      defaultValue={''}
                    />
                  </div>
                  <p className="mt-3 text-sm text-neutral-500">
                    Brief description for your profile. URLs are hyperlinked.
                  </p>
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="url"
                    className="mb-1 block text-sm font-medium text-neutral-900"
                  >
                    URL
                  </label>
                  <Input type="text" name="url" id="url" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-y-6 pt-8 sm:grid-cols-6 sm:gap-x-6">
                <div className="sm:col-span-6">
                  <h2 className="text-xl font-medium text-neutral-900">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-sm text-neutral-500">
                    This information will be displayed publicly so be careful
                    what you share.
                  </p>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="email-address"
                    className="mb-1 block text-sm font-medium text-neutral-900"
                  >
                    Email address
                  </label>
                  <Input
                    type="text"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="phone-number"
                    className="mb-1 block text-sm font-medium text-neutral-900"
                  >
                    Phone number
                  </label>
                  <Input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="mb-1 block text-sm font-medium text-neutral-900"
                  >
                    Country
                  </label>
                  <Select />
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="language"
                    className="mb-1 block text-sm font-medium text-neutral-900"
                  >
                    Language
                  </label>
                  <Input type="text" name="language" id="language" />
                </div>
                <p className="text-sm text-neutral-500 sm:col-span-6">
                  This account was created on{' '}
                  <time dateTime="2017-01-05T20:35:40">
                    January 5, 2017, 8:35:40 PM
                  </time>
                  .
                </p>
              </div>
              <div className="flex justify-end pt-8">
                <button
                  type="button"
                  className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-neutral-900 shadow-sm hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
