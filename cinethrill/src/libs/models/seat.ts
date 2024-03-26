export type SeatStatus = 'available' | 'reserved';

export interface Seat {
  row: number;
  column: number;
  price: number;
  status: string;
  id: string;
  height: number;
  width: number;
}
