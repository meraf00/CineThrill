import { HorizontalListView } from '@/components/client/ListView/HorizontalListView';
import { HeroSection } from '@/components/client/home/HeroSection';
import { MovieListSection } from '@/components/client/home/MovieListSection';
import { Poster } from '@/components/client/movie-detail/Poster';

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

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <div className="mt-8">
        <MovieListSection id="popular" section="Popular">
          <Poster
            imageSrc="/the_witcher_poster_1.jpg"
            title="The Witcher"
            isActive={true}
          />

          <Poster
            imageSrc="/the_witcher_poster_1.jpg"
            title="The Witcher"
            isActive={true}
          />
          <Poster
            imageSrc="/the_witcher_poster_1.jpg"
            title="The Witcher"
            isActive={true}
          />
          <Poster
            imageSrc="/the_witcher_poster_1.jpg"
            title="The Witcher"
            isActive={true}
          />
          <Poster
            imageSrc="/the_witcher_poster_1.jpg"
            title="The Witcher"
            isActive={true}
          />
          <Poster
            imageSrc="/the_witcher_poster_1.jpg"
            title="The Witcher"
            isActive={true}
          />

          <Poster
            imageSrc="/the_witcher_poster_1.jpg"
            title="The Witcher"
            isActive={true}
          />
          <Poster
            imageSrc="/the_witcher_poster_1.jpg"
            title="The Witcher"
            isActive={true}
          />
          <Poster
            imageSrc="/the_witcher_poster_1.jpg"
            title="The Witcher"
            isActive={true}
          />
        </MovieListSection>
      </div>

      <MovieListSection id="top-rated" section="Top Rated">
        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />

        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />
        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />
        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />
        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />

        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />
        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />
        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />
        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />
      </MovieListSection>

      <MovieListSection id="new-release" section="New Release">
        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />

        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />
        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />
        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />
        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />

        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />
        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />
        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />
        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />
      </MovieListSection>

      <MovieListSection id="upcoming" section="Upcoming">
        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />

        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />
        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />
        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />
        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />

        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />
        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />
        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />
        <Poster
          imageSrc="/the_witcher_poster_1.jpg"
          title="The Witcher"
          isActive={true}
        />
      </MovieListSection>
    </main>
  );
}
