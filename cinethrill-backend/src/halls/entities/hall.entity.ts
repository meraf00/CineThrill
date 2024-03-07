import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Seat } from './seat.entity';
import { Showtime } from '@/showtimes/entities/showtime.entity';

@Entity()
export class Hall {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  seatMapUrl: string;

  @Column()
  assetExternalId: string;

  @OneToMany(() => Seat, (seat) => seat.hall, { onDelete: 'CASCADE' })
  @JoinColumn()
  seats: Seat[];

  @ManyToMany(() => Showtime, (showtime) => showtime.halls)
  @JoinTable()
  showtimes: Showtime[];
}
