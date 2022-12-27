import React, { FC } from 'react';
import { classNames } from '@/helpers/utilites';

const Select: FC<React.ComponentPropsWithoutRef<'select'>> = ({
  disabled,
  className,
  ...props
}) => (
  <select
    id="location"
    name="location"
    className={classNames(
      className ? className : '',
      'mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm',
    )}
    defaultValue="Canada"
    {...props}
  >
    <option>United States</option>
    <option>Canada</option>
    <option>Mexico</option>
  </select>
);

export default Select;
