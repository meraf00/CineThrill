import { z } from 'zod';

export const createCastSchema = z
  .object({
    name: z.string(),
  })
  .required();

export type CreateCastDto = z.infer<typeof createCastSchema>;
