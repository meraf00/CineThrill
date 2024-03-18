import Link from 'next/link';
import React from 'react';
import { GrommetIconsFormPrevious } from '../Icons';

export interface TableFooterProps {
  current: number;
  total: number;
  prevPageLink?: string;
  nextPageLink?: string;
}

export const TableFooter = ({
  current,
  total,
  prevPageLink,
  nextPageLink,
}: TableFooterProps) => {
  return (
    <div className="flex justify-end gap-4 p-5 items-center ">
      {current} of {total}
      <Link
        href={prevPageLink ?? ''}
        className={
          prevPageLink === undefined
            ? 'opacity-50 pointer-events-none cursor-default'
            : ''
        }
      >
        <GrommetIconsFormPrevious className="text-lg" />
      </Link>
      <Link
        href={nextPageLink ?? ''}
        className={
          nextPageLink === undefined
            ? 'opacity-50 pointer-events-none cursor-default'
            : ''
        }
      >
        <GrommetIconsFormPrevious className="text-lg rotate-180" />
      </Link>
    </div>
  );
};
