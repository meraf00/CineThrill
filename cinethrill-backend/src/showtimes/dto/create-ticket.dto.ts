import { z } from 'zod';

export const createTicketSchema = z
  .object({
    price: z.number().min(0),
    cancellable: z.boolean(),
    cancellationFee: z.number().min(0),
    cancellationDate: z.date().optional(),
    reservationLifeInSeconds: z.number().min(0),
    showtime: z.string().uuid(),
    seat: z.string().uuid(),
  })
  .required();

export type CreateTicketDto = z.infer<typeof createTicketSchema>;
