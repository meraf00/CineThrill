import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Genre } from './genre.entity';
import { Cast } from './cast.entity';
import { User } from '@/users/entities/user.entity';
import { Showtime } from '@/showtimes/entities/showtime.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @ManyToMany(() => Genre, (genre) => genre.movies, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable()
  genres: Genre[];

  @ManyToMany(() => Cast, (director) => director.movies, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable()
  directors: Cast[];

  @ManyToMany(() => Cast, (actor) => actor.movies, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable()
  actors: Cast[];

  @Column()
  plot: string;

  @Column()
  poster: string;

  @Column()
  runtime: string;

  @Column()
  imdbRating: number;

  @Column()
  production: string;

  @Column()
  released: string;

  @ManyToMany(() => User, (viewer) => viewer.watchedMovies, {
    onDelete: 'CASCADE',
  })
  viewers: User[];

  @ManyToMany(() => User, (viewer) => viewer.likedMovies, {
    onDelete: 'CASCADE',
  })
  likedBy: User[];

  @OneToMany(() => Showtime, (showtime) => showtime.movie)
  showtimes: Showtime[];
}
