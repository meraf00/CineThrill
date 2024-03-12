import Link from 'next/link';
import React from 'react';

export interface FancyButtonProps {
  children: React.ReactNode;
  href: string;
}

export const FancyButton = ({ children, href }: FancyButtonProps) => {
  return (
    <Link
      href={href}
      className="relative group bg-teal hover:bg-opacity-20 text-blueblack-light 
          hover:text-foreground px-3 py-2 flex items-center justify-center gap-2
          transition-all duration-300 ease-in-out
          text-nowrap"
    >
      <div
        className="absolute top-0 left-0 w-[1px] h-0 group-hover:h-full 
            bg-gradient-to-b from-transparent to-teal
            transition-all duration-700 ease-in-out
          "
      ></div>
      <div
        className="absolute top-0 left-0 w-0 group-hover:w-full h-[1px]
            bg-gradient-to-r from-transparent to-teal
            transition-all duration-700 ease-in-out
          "
      ></div>
      <div
        className="absolute bottom-0 right-0 w-[1px] h-0 group-hover:h-full 
            bg-gradient-to-t from-transparent to-teal
            transition-all duration-700 ease-in-out
          "
      ></div>
      <div
        className="absolute bottom-0 right-0 w-0 group-hover:w-full h-[1px]
            bg-gradient-to-l from-transparent to-teal
            transition-all duration-700 ease-in-out
          "
      ></div>
      {children}
    </Link>
  );
};
