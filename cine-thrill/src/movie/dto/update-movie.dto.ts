import { z } from 'zod';

export const updateMovieSchema = z
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
  .partial();

export type UpdateMovieDto = z.infer<typeof updateMovieSchema>;
