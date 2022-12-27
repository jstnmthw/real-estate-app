import { FC, ReactNode } from 'react';
import { classNames } from '@/helpers/utilites';

const LightButton: FC<{
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
          'inline-flex items-center rounded-full border border-gray-300 bg-white font-medium text-gray-700 shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2',
        )}
      >
        {children}
      </button>
    </>
  );
};

export default LightButton;
