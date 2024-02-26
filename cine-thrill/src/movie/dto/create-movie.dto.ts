import { z } from 'zod';

export const createMovieSchema = z
  .object({
    title: z.string(),
    genres: z.array(z.string()),
    directors: z.array(z.string()),
    actors: z.array(z.string()),
    plot: z.string(),
    poster: z.string(),
    runtime: z.string(),
    imdbRating: z.number(),
    production: z.string(),
    released: z.string(),
  })
  .required();

export type CreateMovieDto = z.infer<typeof createMovieSchema>;
