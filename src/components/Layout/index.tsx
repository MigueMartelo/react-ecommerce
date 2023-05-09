import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return <div className='flex flex-col mt-20 items-center'>{children}</div>;
};
