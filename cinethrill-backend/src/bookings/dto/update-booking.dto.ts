import { z } from 'zod';

export const updateBookingSchema = z
  .object({
    tickets: z.array(z.string().uuid()),
  })
  .required();

export type UpdateBookingDto = z.infer<typeof updateBookingSchema>;
