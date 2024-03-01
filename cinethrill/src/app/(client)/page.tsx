import {
  MaterialSymbolsLightFavorite,
  MaterialSymbolsLightStar,
  MaterialSymbolsLightStarOutline,
  RiPlayFill,
} from '@/components/Icons';
import { Poster } from '@/components/client/movie-detail/Poster';
import { SimilarMoviesList } from '@/components/client/movie-detail/SimilarMoviesList';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-full h-[90vh] overflow-y-auto pt-14 px-40">
      <Image
        className="absolute -z-10 top-0 right-0 object-contain w-full h-full feathered-edge md:feathered-edge opacity-70"
        src="/the_witcher_poster.jpg"
        width={1185}
        height={720}
        alt="Movie poster"
      />

      {/* Title and season */}
      <div className="flex flex-col gap-2 mb-4">
        <h1 className="text-4xl tracking-wider font-black">The Witcher</h1>
        <h2 className="font-bold">Season 1</h2>
      </div>

      {/* Starts */}
      <div className="flex text-3xl -ml-[4px] mb-2">
        <span className="flex text-yellow-500">
          <MaterialSymbolsLightStar />
          <MaterialSymbolsLightStar />
          <MaterialSymbolsLightStar />
          <MaterialSymbolsLightStar />
        </span>
        <span className="flex text-gray-400">
          <MaterialSymbolsLightStarOutline />
        </span>
      </div>

      {/* Genre */}
      <div className="flex items-center gap-3 text-foreground-dark font-light text-sm mb-4">
        <span>Crime</span>
        <div className="w-[1px] h-[0.875rem] bg-foreground-dark"></div>
        <span>Drama</span>
        <div className="w-[1px] h-[0.875rem] bg-foreground-dark"></div>
        <span>Mystery</span>
      </div>

      {/* Play, buy or add to favorite */}
      <div className="flex my-4">
        <button className="bg-teal-dark hover:bg-teal px-3 py-2 flex item-center justify-center text-2xl">
          <RiPlayFill />
        </button>
        <button className="bg-teal hover:bg-teal-light px-3 py-2 flex item-center justify-center text-2xl ">
          <MaterialSymbolsLightFavorite />
        </button>
      </div>

      {/* Plot */}
      <div className="relative flex flex-col text-sm gap-4 w-1/2 text-opacity-80 text-foreground-dark tracking-wider leading-loose h-[15rem] overflow-y-auto no-scrollbar">
        <div className="fixed bottom-0 h-[30%] w-1/2 bg-gradient-to-t from-blueblack-light to-transparent pointer-events-none"></div>
        <p>
          In the tumultuous land of Temeria, where monsters and political
          intrigue abound, Geralt of Rivia, the renowned Witcher, finds himself
          entangled in a web of dark magic and forgotten history. The story
          unfolds when Geralt receives a mysterious letter from an old friend,
          Triss Merigold, a powerful sorceress. Triss reveals that a powerful
          artifact, known as the "Eclipse Crystal," has resurfaced, and its dark
          magic threatens to plunge the entire continent into chaos.
        </p>
        <p className="mb-32">
          The Eclipse Crystal, a relic of ancient elven origin, possesses the
          ability to manipulate time itself. Legend has it that whoever controls
          the crystal can reshape history, bringing either salvation or
          destruction to the world. Triss enlists Geralt's help to prevent the
          crystal from falling into the wrong hands, especially those
        </p>
      </div>

      {/* Similar movies */}

      <SimilarMoviesList
        movies={[
          {
            poster: '/the_witcher_poster_1.jpg',
            title: 'The Witcher',
            id: '1',
            year: '2021',
            rating: '4.5',
            description:
              "In the tumultuous land of Temeria, where monsters and political intrigue abound, Geralt of Rivia, the renowned Witcher, finds himself entangled in a web of dark magic and forgotten history. The story unfolds when Geralt receives a mysterious letter from an old friend, Triss Merigold, a powerful sorceress. Triss reveals that a powerful artifact, known as the 'Eclipse Crystal,' has resurfaced, and its dark magic threatens to plunge the entire continent into chaos.",
          },
          {
            poster: '/the_witcher_poster_1.jpg',
            title: 'The Witcher',
            id: '2',
            year: '2021',
            rating: '4.5',
            description:
              "In the tumultuous land of Temeria, where monsters and political intrigue abound, Geralt of Rivia, the renowned Witcher, finds himself entangled in a web of dark magic and forgotten history. The story unfolds when Geralt receives a mysterious letter from an old friend, Triss Merigold, a powerful sorceress. Triss reveals that a powerful artifact, known as the 'Eclipse Crystal,' has resurfaced, and its dark magic threatens to plunge the entire continent into chaos.",
          },
          {
            poster: '/the_witcher_poster_1.jpg',
            title: 'The Witcher',
            id: '6',
            year: '2021',
            rating: '4.5',
            description:
              "In the tumultuous land of Temeria, where monsters and political intrigue abound, Geralt of Rivia, the renowned Witcher, finds himself entangled in a web of dark magic and forgotten history. The story unfolds when Geralt receives a mysterious letter from an old friend, Triss Merigold, a powerful sorceress. Triss reveals that a powerful artifact, known as the 'Eclipse Crystal,' has resurfaced, and its dark magic threatens to plunge the entire continent into chaos.",
          },
          {
            poster: '/the_witcher_poster_1.jpg',
            title: 'The Witcher',
            id: '5',
            year: '2021',
            rating: '4.5',
            description:
              "In the tumultuous land of Temeria, where monsters and political intrigue abound, Geralt of Rivia, the renowned Witcher, finds himself entangled in a web of dark magic and forgotten history. The story unfolds when Geralt receives a mysterious letter from an old friend, Triss Merigold, a powerful sorceress. Triss reveals that a powerful artifact, known as the 'Eclipse Crystal,' has resurfaced, and its dark magic threatens to plunge the entire continent into chaos.",
          },
          {
            poster: '/the_witcher_poster_1.jpg',
            title: 'The Witcher',
            id: '3',
            year: '2021',
            rating: '4.5',
            description:
              "In the tumultuous land of Temeria, where monsters and political intrigue abound, Geralt of Rivia, the renowned Witcher, finds himself entangled in a web of dark magic and forgotten history. The story unfolds when Geralt receives a mysterious letter from an old friend, Triss Merigold, a powerful sorceress. Triss reveals that a powerful artifact, known as the 'Eclipse Crystal,' has resurfaced, and its dark magic threatens to plunge the entire continent into chaos.",
          },
          {
            poster: '/the_witcher_poster_1.jpg',
            title: 'The Witcher',
            id: '4',
            year: '2021',
            rating: '4.5',
            description:
              "In the tumultuous land of Temeria, where monsters and political intrigue abound, Geralt of Rivia, the renowned Witcher, finds himself entangled in a web of dark magic and forgotten history. The story unfolds when Geralt receives a mysterious letter from an old friend, Triss Merigold, a powerful sorceress. Triss reveals that a powerful artifact, known as the 'Eclipse Crystal,' has resurfaced, and its dark magic threatens to plunge the entire continent into chaos.",
          },
          {
            poster: '/the_witcher_poster_1.jpg',
            title: 'The Witcher',
            id: '9',
            year: '2021',
            rating: '4.5',
            description:
              "In the tumultuous land of Temeria, where monsters and political intrigue abound, Geralt of Rivia, the renowned Witcher, finds himself entangled in a web of dark magic and forgotten history. The story unfolds when Geralt receives a mysterious letter from an old friend, Triss Merigold, a powerful sorceress. Triss reveals that a powerful artifact, known as the 'Eclipse Crystal,' has resurfaced, and its dark magic threatens to plunge the entire continent into chaos.",
          },
          {
            poster: '/the_witcher_poster_1.jpg',
            title: 'The Witcher',
            id: '8',
            year: '2021',
            rating: '4.5',
            description:
              "In the tumultuous land of Temeria, where monsters and political intrigue abound, Geralt of Rivia, the renowned Witcher, finds himself entangled in a web of dark magic and forgotten history. The story unfolds when Geralt receives a mysterious letter from an old friend, Triss Merigold, a powerful sorceress. Triss reveals that a powerful artifact, known as the 'Eclipse Crystal,' has resurfaced, and its dark magic threatens to plunge the entire continent into chaos.",
          },
        ]}
      ></SimilarMoviesList>
    </main>
  );
}
