import { z } from 'zod';

export const updateTicketSchema = z
  .object({
    price: z.number().min(0),
    cancellable: z.boolean(),
    cancellationFee: z.number().min(0),
    cancellationDate: z.date(),
    reservationLifeInSeconds: z.number().min(0),
    showtime: z.string().uuid(),
    seat: z.string().uuid(),
  })
  .partial();

export type UpdateTicketDto = z.infer<typeof updateTicketSchema>;
