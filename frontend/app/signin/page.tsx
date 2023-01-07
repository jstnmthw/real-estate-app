'use client';

import { Logo } from '@/components/icons/Logo';
import Link from 'next/link';
import { GithubIcon } from '@/components/icons/GithubIcon';
import { useAuth } from '@/hooks/auth';
import { useSearchParams } from 'next/navigation';
import { FormEvent, SetStateAction, useEffect, useState } from 'react';
import { GoogleIcon } from '@/components/icons/GoogleIcon';

export default function Page() {
  const { login } = useAuth({
    middleware: 'guest',
    // redirectIfAuthenticated: '/dashboard',
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
    <>
      <div className="flex min-h-full">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <Link href={'/'} className="block w-[47px]">
                <Logo />
              </Link>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Or{' '}
                <a
                  href="#"
                  className="font-medium text-lavender-600 hover:text-lavender-500"
                >
                  register an account for free
                </a>
              </p>
            </div>
            <div className="mt-8">
              <div>
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Sign in with
                  </p>
                  <div className="mt-1 grid grid-cols-2 gap-3">
                    <div>
                      <Link
                        href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/github/redirect`}
                        className={
                          'inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50'
                        }
                      >
                        <GithubIcon className={'mr-1 inline-block h-5 w-5'} />
                      </Link>
                    </div>
                    <div>
                      <Link
                        href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google/redirect`}
                        className={
                          'inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50'
                        }
                      >
                        <GoogleIcon className={'mr-1 inline-block h-5 w-5'} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative mt-6">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <form onSubmit={submitForm} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 shadow-sm focus:border-lavender-500 focus:outline-none focus:ring-lavender-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 shadow-sm focus:border-lavender-500 focus:outline-none focus:ring-lavender-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-lavender-600 focus:ring-lavender-500"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-lavender-600 hover:text-lavender-500"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-gradient-to-tl from-lavender-800 to-lavender-900 py-3 px-4 text-sm font-medium text-white hover:bg-lavender-700 focus:outline-none focus:ring-2 focus:ring-lavender-500 focus:ring-offset-2"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 bg-main_dark lg:block"></div>
      </div>
    </>
  );
}
