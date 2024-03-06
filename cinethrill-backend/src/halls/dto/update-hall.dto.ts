import { z } from 'zod';

export const updateHallSchema = z.object({
  name: z.string(),
});

export type UpdateHallDto = z.infer<typeof updateHallSchema>;
