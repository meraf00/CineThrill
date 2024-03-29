'use client';

import ShowtimeForm, {
  ShowtimeFormProps,
} from '@/components/Forms/ShowtimeForm';
import { useParams } from 'next/navigation';

export default function EditShowtime() {
  const { showtimeId } = useParams();

  let form: ShowtimeFormProps = {};

  if (showtimeId !== 'new') {
  }

  return (
    <main className="w-full">
      <div className="flex  justify-between">
        <h1 className="font-bold text-xl">CineThrill Showtimes</h1>
      </div>

      <ShowtimeForm {...form} />
    </main>
  );
}
