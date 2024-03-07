import { z } from 'zod';

export const createBookingSchema = z
  .object({
    tickets: z.array(z.string().uuid()),
  })
  .required();

export type CreateBookingDto = z.infer<typeof createBookingSchema>;
