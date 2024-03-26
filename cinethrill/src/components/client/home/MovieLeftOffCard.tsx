import { Movie } from '@/libs/models/movie';
import Image from 'next/image';
import React from 'react';

export interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  let progress = null;

  if (movie.progress) {
    progress = (movie.progress * 100).toString();
  }

  return (
    <div className="flex items-end">
      <div className="shadow-md rounded-sm overflow-clip w-24">
        <Image
          className="object-contain w-full h-full"
          src={movie.poster}
          width={1185}
          height={720}
          alt={`${movie.title} poster`}
        />
      </div>
      <div
        className="relative flex flex-col justify-center gap-4 overflow-hidden 
              w-64 h-28 bg-teal-dark rounded shadow-md p-5 bg-opacity-80"
      >
        <div className="flex flex-col gap-1">
          <h1 className="font-bold tracking-wide">{movie.title}</h1>
          <p
            className={`relative italic text-ellipsis text-xs 
                text-nowrap max-w-full overflow-hidden 
                before:content-['"'] after:content-['"'] after:absolute after:right-0`}
          >
            {movie.description}
          </p>
        </div>
        <div className="flex gap-3">
          <button className="uppercase hover:text-teal text-sm font-semibold">
            Play Trailer
          </button>
          <div className="w-[1px] h-full bg-gray-600"></div>
          <button className="uppercase hover:text-teal text-sm font-semibold">
            Remove
          </button>
        </div>
        {/* Progress */}
        {progress !== null ? (
          <div
            className={`absolute bottom-0 h-[3px] bg-gradient-to-r from-teal-dark to-teal`}
            style={{ width: `${progress}%` }}
          ></div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
