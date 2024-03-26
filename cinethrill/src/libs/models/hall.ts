import { Seat } from './seat';

export interface Hall {
  id: string;
  seatMapImage: string;
  name: string;
  seats: Seat[];
}
