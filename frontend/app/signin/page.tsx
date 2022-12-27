'use client';

import { Logo } from '@/components/icons/Logo';
import Link from 'next/link';
import { FormEvent, SetStateAction, useEffect, useState } from 'react';
import { useAuth } from '@/hooks/auth';
import { useSearchParams } from 'next/navigation';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { GithubIcon } from '@/components/icons/GithubIcon';
import { GoogleIcon } from '@/components/icons/GoogleIcon';

export default function Page() {
  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  });
  const searchParams = useSearchParams();
  const reset = searchParams.get('reset');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shouldRemember, setShouldRemember] = useState(false);
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState<SetStateAction<any> | null>(null);

  useEffect(() => {
    if (reset && errors.length === 0) {
      setStatus(Buffer.from(reset, 'base64'));
    } else {
      setStatus(null);
    }
  }, [errors, reset]);

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await login({
      email,
      password,
      remember: shouldRemember,
      setErrors,
      setStatus,
    });
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {status && (
          <div className="rounded-md bg-black px-2 py-2 text-white shadow-md">
            {status}
          </div>
        )}
        <div>
          <div className={'flex justify-center'}>
            <Link href={'/'}>
              <Logo className={'mx-auto h-12 w-12 text-blue-500'} />
            </Link>
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link
              href={'/register'}
              className="font-medium text-blue-500 hover:text-blue-700"
            >
              start your 14-day free trial
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={submitForm}>
          <div className={'space-y-3'}>
            <Link
              href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/github/redirect`}
              className={
                'flex w-full items-center justify-center rounded-lg border border-neutral-300 py-2 text-center text-sm font-medium text-neutral-600 shadow transition-colors hover:border-neutral-400 hover:text-neutral-800'
              }
            >
              <GithubIcon className={'mr-1 inline-block h-5 w-5'} />
              Github
            </Link>
            <Link
              href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google/redirect`}
              className={
                'flex w-full items-center justify-center rounded-lg border border-neutral-300 py-2 text-center text-sm font-medium text-neutral-600 shadow transition-colors hover:border-neutral-400 hover:text-neutral-800'
              }
            >
              <GoogleIcon className={'mr-1 inline-block h-5 w-5'} />
              Google
            </Link>
          </div>
          <div className={'relative text-center text-sm text-neutral-400'}>
            <div
              className={'absolute left-0 top-2 z-0 h-px w-full bg-neutral-300'}
            ></div>
            <span className={'z-1 relative bg-white px-2'}>Or</span>
          </div>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="Email address"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                onChange={(event) => setShouldRemember(event.target.checked)}
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm font-medium text-gray-500"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link
                href={'forgot-password'}
                className="font-medium text-blue-500 hover:text-blue-700"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <LockClosedIcon
                className={
                  'mr-1 h-5 w-5 text-blue-300 group-hover:text-blue-200'
                }
              />
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
