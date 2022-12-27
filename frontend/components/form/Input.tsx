import React, { FC } from 'react';
import { classNames } from '@/helpers/utilites';

const Input: FC<React.ComponentPropsWithoutRef<'input'>> = ({
  disabled,
  className,
  ...props
}) => (
  <input
    disabled={disabled}
    className={classNames(
      className ? className : '',
      'relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm',
    )}
    {...props}
  />
);

export default Input;
