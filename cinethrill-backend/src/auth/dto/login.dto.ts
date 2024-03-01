import { z } from 'zod';

export const loginSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8).max(100),
  })
  .required();

export type LoginDto = z.infer<typeof loginSchema>;
