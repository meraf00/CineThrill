import { z } from 'zod';

export const updateGenreSchema = z
  .object({
    name: z.string(),
  })
  .required();

export type UpdateGenreDto = z.infer<typeof updateGenreSchema>;
