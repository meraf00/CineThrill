import { Movie } from '@/movie/entities/movie.entity';

export class UserDto {
  id: string;

  name: string;

  email: string;

  isActive: boolean;

  isAdmin: boolean;

  isVerified: boolean;

  avatar: string;

  watchedMovies: Movie[];

  likedMovies: Movie[];
}
