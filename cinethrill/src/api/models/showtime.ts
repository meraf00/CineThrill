import { Hall } from './hall';
import { Movie } from './movie';

export interface Showtime {
  id: string;
  halls: Hall[];
  movie: Movie;
  startAt: Date;
  endAt: Date;
}
