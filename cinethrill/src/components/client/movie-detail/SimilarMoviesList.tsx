'use client';

import { Movie } from '@/api/models/movie';
import React, { createRef, useEffect, useRef, useState } from 'react';
import { Poster } from './Poster';

export interface SimilarMoviesListProps {
  movies: Movie[];
}

export const SimilarMoviesList = ({ movies }: SimilarMoviesListProps) => {
  const [selectedMovie, setSelectedMovie] = useState<string>(movies[0].id);
  const containerRef = createRef<HTMLDivElement>();

  return (
    <div
      ref={containerRef}
      className="z-10 px-16 mb-4 
flex items-end gap-10
fixed bottom-0 right-0 h-1/3 w-1/2
overflow-x-auto overflow-y-hidden no-scrollbar
feathered-edge-linear-balanced"
    >
      {movies.map((movie, idx) => {
        if (idx === movies.length - 1) {
          return (
            <div className="mr-72" key={movie.id}>
              <Poster
                imageSrc={movie.poster}
                title={movie.title}
                isActive={selectedMovie === movie.id}
              />
            </div>
          );
        } else {
          return (
            <Poster
              key={movie.id}
              imageSrc={movie.poster}
              title={movie.title}
              isActive={selectedMovie === movie.id}
            />
          );
        }
      })}
    </div>
  );
};
