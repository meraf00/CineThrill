import { z } from 'zod';

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
export const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const createHallSchema = z
  .object({
    name: z.string(),
  })
  .required();

export type CreateHallDto = z.infer<typeof createHallSchema>;
