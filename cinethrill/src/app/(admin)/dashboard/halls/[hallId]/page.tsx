'use client';

import HallForm, { HallFormProps } from '@/components/Forms/HallForm';
import { useParams } from 'next/navigation';

export default function EditShowtime() {
  const { showtimeId } = useParams();

  let form: HallFormProps = {};

  if (showtimeId !== 'new') {
  }

  return (
    <main className="w-full">
      <div className="flex  justify-between">
        <h1 className="font-bold text-xl">CineThrill Halls</h1>
      </div>

      <HallForm {...form} />
    </main>
  );
}
