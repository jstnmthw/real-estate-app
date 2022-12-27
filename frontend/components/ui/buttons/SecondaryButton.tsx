import { FC, ReactNode } from 'react';
import { classNames } from '@/helpers/utilites';

const SecondaryButton: FC<{
  children: ReactNode;
  size?: string;
  className?: string;
}> = ({ children, size = 'md', className }) => {
  return (
    <>
      <button
        type="button"
        className={classNames(
          className ? className : '',
          size === 'sm' ? 'px-3 py-1.5 text-xs' : '',
          size === 'md' ? 'px-4 py-2 text-sm' : '',
          size === 'lg' ? 'px-5 py-2 text-sm' : '',
          size === 'xl' ? 'px-6 py-2 text-base' : '',
          size === '2xl' ? 'px-7 py-3 text-base' : '',
          'inline-flex items-center rounded-full border border-transparent bg-blue-100 font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        )}
      >
        {children}
      </button>
    </>
  );
};

export default SecondaryButton;
