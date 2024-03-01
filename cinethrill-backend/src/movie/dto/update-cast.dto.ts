import { z } from 'zod';

export const updateCastSchema = z
  .object({
    name: z.string(),
  })
  .required();

export type UpdateCastDto = z.infer<typeof updateCastSchema>;
