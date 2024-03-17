'use client';

import { GrommetIconsFormPrevious, RiPlayFill } from '@/components/Icons';
import { FancyButton } from '@/components/Button/FancyButton';
import { Backdrop } from '@/components/client/home/Backdrop';
import { MovieCard } from '@/components/client/home/MovieLeftOffCard';

import { protestRevolution } from '@/libs/fonts';
import { useState } from 'react';

const movies = [
  {
    title: 'Avengers : End Game',
    poster: '/avengers.jpg',
    id: '1',
    year: '2021',
    rating: '4.5',
    description:
      "In the tumultuous land of Temeria, where monsters and political intrigue abound, Geralt of Rivia, the renowned Witcher, finds himself entangled in a web of dark magic and forgotten history. The story unfolds when Geralt receives a mysterious letter from an old friend, Triss Merigold, a powerful sorceress. Triss reveals that a powerful artifact, known as the 'Eclipse Crystal,' has resurfaced, and its dark magic threatens to plunge the entire continent into chaos.",
  },
  {
    title: 'The Witcher',
    poster: '/the_witcher_poster.jpg',
    id: '2',
    year: '2021',
    rating: '4.5',
    description:
      "In the tumultuous land of Temeria, where monsters and political intrigue abound, Geralt of Rivia, the renowned Witcher, finds himself entangled in a web of dark magic and forgotten history. The story unfolds when Geralt receives a mysterious letter from an old friend, Triss Merigold, a powerful sorceress. Triss reveals that a powerful artifact, known as the 'Eclipse Crystal,' has resurfaced, and its dark magic threatens to plunge the entire continent into chaos.",
  },
];

export const HeroSection = () => {
  const [movieIdx, setMovieIdx] = useState(0);

  return (
    <section className="flex flex-col gap-20 items-center w-full h-[90vh]">
      <button
        className="absolute left-16 top-[50%] -translate-y-[50%] text-3xl hover:text-teal"
        onClick={() =>
          setMovieIdx((movieIdx) =>
            movieIdx - 1 < 0 ? movies.length - 1 : movieIdx - 1
          )
        }
      >
        <GrommetIconsFormPrevious />
      </button>
      <button
        className="absolute right-16 top-[50%] -translate-y-[50%] text-3xl rotate-180 hover:text-teal"
        onClick={() =>
          setMovieIdx((movieIdx) =>
            movieIdx + 1 >= movies.length ? 0 : movieIdx + 1
          )
        }
      >
        <GrommetIconsFormPrevious />
      </button>

      {/* Backdrop */}
      <Backdrop
        images={movies.map((movie) => movie.poster)}
        activeIdx={movieIdx}
      />

      {/* Title and play trailer */}
      <div className="flex flex-col gap-10 items-center justify-center mt-32">
        <h1
          className={`text-4xl tracking-wide font-black drop-shadow-2xl ${protestRevolution.className}`}
        >
          {movies[movieIdx].title}
        </h1>

        <FancyButton href="">
          <span className="text-2xl flex justify-center items-center">
            <RiPlayFill />
          </span>
          <span className="text-sm uppercase flex items-center justify-center font-semibold">
            Watch Trailer
          </span>
        </FancyButton>
      </div>

      {/* Recommended */}
      <div className="flex flex-col gap-8 items-center">
        <h2 className="uppercase text-xs font-semibold">
          Recommendations for you
        </h2>

        {/* List of Recommended */}
        <div className="flex max-w-[46rem] gap-8 overflow-auto no-scrollbar">
          {/* Recommended card */}
          <MovieCard
            movie={{
              poster: '/the_witcher_poster_1.jpg',
              title: 'The Witcher',
              id: '1',
              year: '2021',
              rating: '4.5',
              description:
                "In the tumultuous land of Temeria, where monsters and political intrigue abound, Geralt of Rivia, the renowned Witcher, finds himself entangled in a web of dark magic and forgotten history. The story unfolds when Geralt receives a mysterious letter from an old friend, Triss Merigold, a powerful sorceress. Triss reveals that a powerful artifact, known as the 'Eclipse Crystal,' has resurfaced, and its dark magic threatens to plunge the entire continent into chaos.",
            }}
          />
          <MovieCard
            movie={{
              poster: '/the_witcher_poster_1.jpg',
              title: 'The Witcher',
              id: '1',
              year: '2021',
              rating: '4.5',
              description:
                "In the tumultuous land of Temeria, where monsters and political intrigue abound, Geralt of Rivia, the renowned Witcher, finds himself entangled in a web of dark magic and forgotten history. The story unfolds when Geralt receives a mysterious letter from an old friend, Triss Merigold, a powerful sorceress. Triss reveals that a powerful artifact, known as the 'Eclipse Crystal,' has resurfaced, and its dark magic threatens to plunge the entire continent into chaos.",
              progress: 0.7,
            }}
          />
        </div>
      </div>
    </section>
  );
};
