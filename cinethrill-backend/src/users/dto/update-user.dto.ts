import { z } from 'zod';

export const updateUserSchema = z
  .object({
    name: z.string().min(1),
    password: z.string().min(8).max(100),
  })
  .partial();

export type UpdateUserDto = z.infer<typeof updateUserSchema>;
