import { FC, ReactNode } from 'react';
import { classNames } from '@/helpers/utilites';

const PrimaryButton: FC<{
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
          size === 'sm' ? 'px-3 py-1 text-xs' : '',
          size === 'md' ? 'px-4 py-1.5 text-sm' : '',
          size === 'lg' ? 'px-5 py-2 text-sm' : '',
          size === 'xl' ? 'px-6 py-2.5 text-base' : '',
          size === '2xl' ? 'px-7 py-3 text-base' : '',
          'inline-flex items-center rounded-full border border-transparent bg-blue-500 font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2',
        )}
      >
        {children}
      </button>
    </>
  );
};

export default PrimaryButton;
