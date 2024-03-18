import { Button } from '@/components/Button/Button';
import {
  IconParkOutlineSearch,
  MingcuteFilterLine,
  TablerPlus,
} from '@/components/Icons';
import { Input } from '@/components/Input/Input';
import { MovieTable } from '@/components/admin/MovieTable/MovieTable';
import Link from 'next/link';

export default function Movies() {
  return (
    <main className="w-full">
      <div className="flex  justify-between">
        <h1 className="font-bold text-xl">CineThrill Movies</h1>
        <Link href="/dashboard/movies/new">
          <Button>
            <span className="flex item-center justify-center gap-2 px-2">
              <span>Add Movie</span>
              <TablerPlus className="text-lg font-bold" />
            </span>
          </Button>
        </Link>
      </div>

      <div className="flex mt-10 gap-8">
        {/* Search bar */}
        <div className="relative w-1/3 h-fit">
          <button
            className="absolute top-[50%] right-0 -translate-y-[50%] 
        flex items-center justify-center
        h-full px-3 
        bg-teal-dark hover:bg-teal hover:text-blueblack         
        rounded-r z-10
        border-t border-r border-b border-white border-opacity-10"
          >
            <IconParkOutlineSearch />
          </button>
          <Input placeholder="Search" className="pr-12" />
        </div>

        {/* Filter bar */}
        <div className="relative flex items-center">
          <button
            className="
          flex items-center gap-2 text-sm bg-teal-dark bg-opacity-0 
          border-opacity-0 hover:bg-opacity-50 hover:border-opacity-50 
          px-3 py-2 rounded border border-teal-dark
          transition-all duration-300 ease-in-out group"
          >
            <MingcuteFilterLine className="group-hover:-translate-y-[1px] transition-all ease-in-out duration-300" />
            <span className="">Filter</span>
          </button>
        </div>
      </div>

      <MovieTable movies={[]} />
    </main>
  );
}
