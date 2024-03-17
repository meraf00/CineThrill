'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export interface SidePanelLinkProps {
  icon: React.ReactNode;
  href: string;
  text: string;
}

export const SidePanelLink = ({ icon, href, text }: SidePanelLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className="group hover:text-teal transition-colors duration-300 ease-in-out"
    >
      <div
        className="flex gap-4 rounded-l-full bg-transparent p-3 cursor-pointer group-hover:bg-blueblack-light"
        style={{
          backgroundColor: pathname === href ? '#0A0C11' : 'transparent',
        }}
      >
        <div className="flex rounded-full item-center p-1 bg-white bg-opacity-60 text-blueblack group-hover:text-teal group-hover:bg-opacity-0 transition-colors duration-300 ease-in-out">
          {icon}
        </div>

        {text}
      </div>
    </Link>
  );
};
