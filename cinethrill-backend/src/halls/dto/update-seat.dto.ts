import { z } from 'zod';

export const updateSeatSchema = z
  .object({
    label: z.string(),
    x: z.number(),
    y: z.number(),
    width: z.number(),
    height: z.number(),
  })
  .partial();

export type UpdateSeatDto = z.infer<typeof updateSeatSchema>;
