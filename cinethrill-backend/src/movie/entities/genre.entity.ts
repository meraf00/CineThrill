import { PrimaryGeneratedColumn, Column, Entity, ManyToMany } from 'typeorm';
import { Movie } from './movie.entity';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Movie, (movie) => movie.genres, { onDelete: 'CASCADE' })
  movies: Movie[];
}
