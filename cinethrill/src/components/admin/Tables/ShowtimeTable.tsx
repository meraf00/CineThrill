'use client';

import React, { useEffect, useState } from 'react';

import { TableFooter } from '../../Tables/TableFooter';
import { TableHead } from '../../Tables/TableHead';
import { TableBody } from '../../Tables/TableBody';
import { Row } from '../../Tables/Row';
import { Showtime } from '@/libs/models/showtime';
import { useRouter } from 'next/navigation';
import { yyyyMMdd } from '@/libs/utils/time-formatter';

export interface ShowtimeTableProps {
  showtimes: Showtime[];
}

export const ShowtimeTable = ({ showtimes }: ShowtimeTableProps) => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="mt-6 text-sm overflow-auto no-scrollbar w-full">
      <div className="min-w-[592px]">
        <TableHead>
          <div className="w-96 border-r-2 border-opacity-10 border-white">
            Movie
          </div>
          <div className="w-96 border-r-2 border-opacity-10 border-white">
            Start At
          </div>
          <div className="w-96 border-r-2 border-opacity-10 border-white">
            End At
          </div>
          <div className="w-full border-r-2 border-opacity-10 border-white">
            Halls
          </div>
        </TableHead>

        {/* body */}
        <TableBody>
          {showtimes.map((showtime) => (
            <Row key={showtime.id}>
              <div className="w-96">{showtime.movie.title}</div>
              <div className="w-96">{yyyyMMdd(showtime.startAt)}</div>
              <div className="w-96">{yyyyMMdd(showtime.endAt)}</div>
              <div className="w-full">
                {showtime.halls.map((hall, idx) => {
                  if (isClient === false) return null;
                  return (
                    <span key={`hall-${hall.id}`}>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          router.push('/dashboard');
                        }}
                        className="hover:text-teal"
                      >
                        {hall.name}
                      </button>
                      {idx === showtime.halls.length - 1 ? '' : ', '}
                    </span>
                  );
                })}
              </div>
            </Row>
          ))}
        </TableBody>

        {/* Table footer */}
        <TableFooter current={2} total={2} />
      </div>
    </div>
  );
};
