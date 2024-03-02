'use client';

import Image from 'next/image';
import { NavLink } from './NavLink';
import { IconParkOutlineSearch } from '../Icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Section = 'popular' | 'top-rated' | 'new-release' | 'upcoming' | null;

export const NavBar = () => {
  const [activeSection, setActiveSection] = useState<Section>(null);

  useEffect(() => {
    const handleScroll = () => {
      const popularSection = document.getElementById('popular') as HTMLElement;
      const topRatedSection = document.getElementById(
        'top-rated'
      ) as HTMLElement;
      const newReleaseSection = document.getElementById(
        'new-release'
      ) as HTMLElement;
      const upcomingSection = document.getElementById(
        'upcoming'
      ) as HTMLElement;

      const popular = popularSection.getBoundingClientRect();
      const topRated = topRatedSection.getBoundingClientRect();
      const newRelease = newReleaseSection.getBoundingClientRect();
      const upcoming = upcomingSection.getBoundingClientRect();
      const bodyHeight = body.getBoundingClientRect().height;

      if (popular.y > 0 && popular.y < bodyHeight) {
        setActiveSection('popular');
      } else if (topRated.y > 0 && topRated.y < bodyHeight) {
        setActiveSection('top-rated');
      } else if (newRelease.y > 0 && newRelease.y < bodyHeight) {
        setActiveSection('new-release');
      } else if (upcoming.y > 0 && upcoming.y < bodyHeight) {
        setActiveSection('upcoming');
      } else {
        setActiveSection(null);
      }
    };

    const body = document.getElementById('body') as HTMLElement;

    body.addEventListener('scroll', handleScroll);

    return () => {
      body.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="sticky top-0 flex justify-between px-16 borde border-gray-600 border-opacity-20 border-1 text-sm z-50 backdrop-blur-sm">
      <Link href="/">
        <div className="flex item-center py-3 gap-2 font-medium text-teal text tracking-wide">
          <div className="w-fit h-fit my-auto">
            <Image
              src="/logo.png"
              width={22}
              height={20.9}
              alt="Picture of the author"
            />
          </div>
          <div>
            <span className="text-2xl">C</span>ineThrill
          </div>
        </div>
      </Link>

      <div className="flex gap-5 items-center">
        <ul className="flex gap-10 font-light h-full">
          <NavLink href="/#popular" isActive={activeSection === 'popular'}>
            Popular
          </NavLink>
          <NavLink href="/#top-rated" isActive={activeSection === 'top-rated'}>
            Top Rated
          </NavLink>
          <NavLink
            href="/#new-release"
            isActive={activeSection === 'new-release'}
          >
            New Release
          </NavLink>
          <NavLink href="/#upcoming" isActive={activeSection === 'upcoming'}>
            Upcoming
          </NavLink>
        </ul>

        <div className="w-[1px] h-[1rem] bg-foreground-dark"></div>

        <button className="bg-teal-light hover:bg-opacity-50 bg-opacity-20 w-8 h-8 rounded-[9999px]">
          <IconParkOutlineSearch className="m-auto w-[1.1rem] h-[1.1rem]" />
        </button>
      </div>

      <div className="flex items-center gap-3 font-light">
        <Link href="/login">Login</Link>
        <div className="w-[1px] h-[1rem] bg-foreground-dark"></div>
        <Link href="/signup">Sign Up</Link>
      </div>
    </nav>
  );
};
