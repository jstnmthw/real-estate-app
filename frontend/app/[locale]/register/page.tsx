import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import Input from '@/components/form/Input';

export default function Page() {
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <div className={'flex justify-center'}>
            <Link href={'/'}>
              <Logo className={'h-12 w-12 text-blue-500'} />
            </Link>
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Register your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link
              href={'/en/signin'}
              className="font-medium text-blue-600 hover:text-blue-600"
            >
              sign in to your account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="space-y-5 rounded-md shadow-sm">
            <div>
              <label htmlFor="full-name" className="sr-only">
                Full Name
              </label>
              <Input
                id="full-name"
                name="name"
                type="name"
                autoComplete="name"
                required
                placeholder="Full name"
              />
            </div>
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
                className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm"
                placeholder="Email address"
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
                className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="password-confirm" className="sr-only">
                Password
              </label>
              <input
                id="password-confirm"
                name="password-confirm"
                type="password-confirm"
                autoComplete="password-confirm"
                required
                className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-lg border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              <LockClosedIcon
                className={
                  'mr-1 h-5 w-5 text-blue-400 group-hover:text-blue-300'
                }
              />
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
