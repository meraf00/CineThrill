import { Button } from '@/components/Button/Button';
import {
  IconParkOutlineSearch,
  MingcuteFilterLine,
  TablerPlus,
} from '@/components/Icons';
import { Input } from '@/components/Input/Input';
import { ShowtimeTable } from '@/components/admin/Tables/ShowtimeTable';
import Link from 'next/link';

export default function Halls() {
  return (
    <main className="w-full">
      <div className="flex  justify-between">
        <h1 className="font-bold text-xl">CineThrill Halls</h1>
        <Link href="/dashboard/halls/new">
          <Button>
            <span className="flex item-center justify-center gap-2 px-2">
              <span>Add Hall</span>
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

      <ShowtimeTable
        showtimes={[
          {
            id: '1',
            movie: {
              id: '1',
              description: '',
              title: 'The Matrix',
              poster: 'https://via.placeholder.com/150',
              released: new Date(),
              directors: ['Lana Wachowski'],
              actors: ['Keanu Reeves', 'Carrie-Anne Moss'],
              genres: ['Action', 'Sci-Fi'],
              rating: '10',
            },
            startAt: new Date(),
            endAt: new Date(),
            halls: [
              {
                id: '1',
                name: 'Hall 1',
                seatMapImage: 'https://via.placeholder.com/150',
                seats: [],
              },
              {
                id: '2',
                name: 'Hall 2',
                seatMapImage: 'https://via.placeholder.com/150',
                seats: [],
              },
            ],
          },
        ]}
      />
    </main>
  );
}
