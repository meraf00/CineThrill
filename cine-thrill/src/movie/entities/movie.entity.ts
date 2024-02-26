import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinColumn,
  JoinTable,
} from 'typeorm';
import { Genre } from './genre.entity';
import { Cast } from './cast.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @ManyToMany(() => Genre, (genre) => genre.movies, { eager: true })
  @JoinTable()
  genres: Genre[];

  @ManyToMany(() => Cast, (director) => director.movies, { eager: true })
  @JoinTable()
  directors: Cast[];

  @ManyToMany(() => Cast, (actor) => actor.movies, { eager: true })
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
}
