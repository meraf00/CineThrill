import React from 'react';

import { TableFooter } from '../../Tables/TableFooter';
import { TableHead } from '../../Tables/TableHead';
import { TableBody } from '../../Tables/TableBody';
import { Row } from '../../Tables/Row';
import Image from 'next/image';
import { Movie } from '@/api/models/movie';

export interface MovieTableProps {
  movies: Movie[];
}

export const MovieTable = ({ movies }: MovieTableProps) => {
  return (
    <div className="mt-6 text-sm overflow-auto no-scrollbar w-full">
      <div className="min-w-[592px]">
        <TableHead>
          <div className="w-52 border-r-2 border-opacity-10 border-white">
            <span className="px-3">Poster</span>
          </div>
          <div className="w-52 border-r-2 border-opacity-10 border-white">
            Title
          </div>
          <div className="w-52 border-r-2 border-opacity-10 border-white">
            Genres
          </div>
          <div className="w-32 border-r-2 border-opacity-10 border-white">
            Rating
          </div>
          <div className="w-52 border-r-2 border-opacity-10 border-white">
            Director
          </div>
          <div className="w-52 border-r-2 border-opacity-10 border-white">
            Casts
          </div>
          <div className="w-32">Duration</div>
        </TableHead>

        {/* body */}
        <TableBody>
          {movies.map((movie) => (
            <Row key={movie.id}>
              <div className="w-52 h-[80px] min-w-min">
                <Image
                  src={movie.poster}
                  alt=""
                  width={208}
                  height={208}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-52">{movie.title}</div>
              <div className="w-52">{movie.genres}</div>
              <div className="w-32">{movie.rating}</div>
              <div className="w-52">{movie.directors}</div>
              <div className="w-52">{movie.actors}</div>
              <div className="w-32">{movie.runtime}</div>
            </Row>
          ))}
        </TableBody>

        {/* Table footer */}
        <TableFooter current={2} total={2} />
      </div>
    </div>
  );
};
