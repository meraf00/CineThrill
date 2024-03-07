import { z } from 'zod';

export const updateShowtimeSchema = z
  .object({
    halls: z.array(z.string().uuid()).min(1),
    movie: z.string().uuid(),
    startAt: z.coerce.date().refine((data) => data > new Date(), {
      message: 'Start time must be in the future',
    }),
    endAt: z.coerce.date(),
  })
  .partial()
  .refine((data) => data.endAt > data.startAt, {
    message: 'End time cannot be earlier than start time.',
    path: ['endAt'],
  });

export type UpdateShowtimeDto = z.infer<typeof updateShowtimeSchema>;
