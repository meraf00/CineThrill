import { z } from 'zod';

export const createShowtimeTicketSchema = z
  .object({
    price: z.number().min(0),
    cancellable: z.boolean(),
    cancellationFee: z.number().min(0),
    cancellationDate: z.date().optional(),
    reservationLifeInSeconds: z.number().min(0),
    seat: z.string().uuid(),
  })
  .required();

export type CreateShowtimeTicketDto = z.infer<
  typeof createShowtimeTicketSchema
>;
