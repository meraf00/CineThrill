import Link from 'next/link';
import React from 'react';

export interface DropDownProps {
  show: boolean;
}

export const DropDown = ({ show }: DropDownProps) => {
  return (
    <div
      className="fixed top-16 p-5 right-20 backdrop-blur-lg z-50 rounded-lg 
      flex flex-col gap-3 text-sm w-52 shadow shadow-teal-dark  overflow-hidden
      transition-all duration-300"
      style={{
        height: show ? '137px' : '0px',
        padding: show ? '1.25rem' : '0px',
      }}
    >
      <Link href="" className="hover:text-teal transition-colors duration-300">
        Favorites
      </Link>
      <Link href="" className="hover:text-teal transition-colors duration-300">
        Tickets
      </Link>
      <hr className="opacity-50" />
      <Link
        href=""
        className="text-red-500 hover:text-red-400 transition-colors duration-300"
      >
        Sign Out
      </Link>
    </div>
  );
};
