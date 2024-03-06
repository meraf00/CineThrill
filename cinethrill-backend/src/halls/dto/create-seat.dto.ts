import { z } from 'zod';

const createSeatSchema = z
  .object({
    label: z.string(),
    x: z.number(),
    y: z.number(),
    width: z.number(),
    height: z.number(),
  })
  .required();

export const createSeatsSchema = z.array(createSeatSchema).min(1);

export type CreateSeatsDto = z.infer<typeof createSeatsSchema>;
