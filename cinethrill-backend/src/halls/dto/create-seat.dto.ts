import { z } from 'zod';

export const createSeatSchema = z
  .object({
    label: z.string(),
    x: z.number(),
    y: z.number(),
    width: z.number(),
    height: z.number(),
  })
  .required();

export type CreateSeatDto = z.infer<typeof createSeatSchema>;
