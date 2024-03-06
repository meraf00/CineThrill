import { z } from 'zod';

const updateSeatSchema = z.object({
  id: z.string(),
  label: z.string().optional(),
  x: z.number().optional(),
  y: z.number().optional(),
  width: z.number().optional(),
  height: z.number().optional(),
});

export const updateSeatsSchema = z.array(updateSeatSchema).min(1);

export type UpdateSeatsDto = z.infer<typeof updateSeatsSchema>;
