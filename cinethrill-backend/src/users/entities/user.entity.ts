import { Booking } from '@/bookings/entities/booking.entity';
import { Movie } from '@/movie/entities/movie.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isAdmin: boolean;

  @Column({ default: false })
  isVerified: boolean;

  @Column({ default: '' })
  avatar: string;

  @ManyToMany(() => Movie, (movie) => movie.viewers, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  watchedMovies: Movie[];

  @ManyToMany(() => Movie, (movie) => movie.viewers, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  likedMovies: Movie[];

  @OneToMany(() => Booking, (booking) => booking.user, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  bookings: Booking[];
}
