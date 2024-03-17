'use client';

import {
  AkarIconsSchedule,
  IcSharpMovie,
  IonTicketOutline,
  TablerTheater,
} from '@/components/Icons';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { SidePanelLink } from './SidePanelLink';

export const AdminSidePanel = () => {
  const [shrink, setShrink] = useState(false);

  return (
    <div className="h-full w-1/4 min-w-64 py-3 px-2">
      <div className="flex flex-col gap-8 h-full w-full rounded-xl backdrop-blur-lg shadow-lg shadow-[#00000030] pt-5 pl-5">
        <div className="flex">
          <Link href="/dashboard" className="block">
            <div className="flex item-center gap-2 font-medium text-teal text tracking-wide">
              <div className="w-fit h-fit my-auto">
                <Image
                  src="/logo.png"
                  width={22}
                  height={20.9}
                  alt="Logo Picture"
                />
              </div>
              <div>
                <span className="text-2xl">C</span>ineThrill
              </div>
            </div>
          </Link>
          <button
            onClick={() => setShrink(!shrink)}
            className="ml-auto mr-3 bg-blueblack-light bg-opacity-30 p-2 rounded-full hover:bg-opacity-50"
          >
            <span
              className={`block w-4 h-[2px] bg-white transition-all duration-300 ease-in-out ${
                shrink ? 'rotate-45' : ''
              }`}
            ></span>
            <span
              className={`block w-4 h-[2px] bg-white transition-all duration-300 ease-in-out ${
                shrink ? 'hidden' : ''
              }`}
            ></span>
            <span
              className={`block w-4 h-[2px] bg-white transition-all duration-300 ease-in-out ${
                shrink ? '-rotate-45' : ''
              }`}
            ></span>
          </button>
        </div>

        <div className="flex flex-col overflow-auto gap-3">
          <SidePanelLink
            text="Movies"
            icon={<IcSharpMovie />}
            href="/dashboard/movies"
          />
          <SidePanelLink
            text="Halls"
            icon={<TablerTheater />}
            href="/dashboard/halls"
          />
          <SidePanelLink
            text="Showtimes"
            icon={<AkarIconsSchedule />}
            href="/dashboard/showtimes"
          />
          <SidePanelLink
            text="Bookings"
            icon={<IonTicketOutline />}
            href="/dashboard/bookings"
          />
        </div>
      </div>
    </div>
  );
};
