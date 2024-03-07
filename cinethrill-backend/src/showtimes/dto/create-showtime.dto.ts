import { z } from 'zod';

export const createShowtimeSchema = z
  .object({
    halls: z.array(z.string().uuid()),
    movie: z.string().uuid(),
    startAt: z.coerce.date().refine((data) => data > new Date(), {
      message: 'Start time must be in the future',
    }),
    endAt: z.coerce.date(),
  })
  .required()
  .refine((data) => data.endAt > data.startAt, {
    message: 'End time cannot be earlier than start time.',
    path: ['endAt'],
  });

export type CreateShowtimeDto = z.infer<typeof createShowtimeSchema>;
