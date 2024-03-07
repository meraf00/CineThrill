import { Hall } from '@/halls/entities/hall.entity';
import { Movie } from '@/movie/entities/movie.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ticket } from './ticket.entity';

@Entity()
export class Showtime {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  startAt: Date;

  @Column()
  endAt: Date;

  @ManyToOne(() => Movie, (movie) => movie.showtimes)
  @JoinColumn()
  movie: Movie;

  @ManyToMany(() => Hall, (hall) => hall.showtimes)
  halls: Hall[];

  @OneToMany(() => Ticket, (ticket) => ticket.showtime)
  @JoinTable()
  tickets: Ticket[];
}
