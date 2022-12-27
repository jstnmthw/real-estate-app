import { FC, ReactNode } from 'react';

export const Hero: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="container my-24">
      <div className="mx-auto max-w-4xl">{children}</div>
    </div>
  );
};

export default Hero;
