import Image from 'next/image';
import { NavLink } from './NavLink';
import { IconParkOutlineSearch } from '../Icons';
import Link from 'next/link';

export const NavBar = () => {
  return (
    <nav className="sticky top-0 flex justify-between px-16 bordeb border-gray-600 border-opacity-20 border-1 text-sm z-50 backdrop-blur-sm">
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
          <NavLink href="/popular">Popular</NavLink>
          <NavLink href="/top-rated">Top Rated</NavLink>
          <NavLink href="/new-release">New Release</NavLink>
          <NavLink href="/upcoming">Upcoming</NavLink>
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
