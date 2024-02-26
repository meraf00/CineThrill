import { z } from 'zod';

export const signUpSchema = z
  .object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(8).max(100),
  })
  .required();

export type SignUpDto = z.infer<typeof signUpSchema>;
