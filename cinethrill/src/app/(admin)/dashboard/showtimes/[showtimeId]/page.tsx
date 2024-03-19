'use client';

import MovieForm from '@/components/Forms/MovieForm';
import { useParams } from 'next/navigation';

export default function EditShowtime() {
  const { showtimeId } = useParams();

  return (
    <main className="w-full">
      <div className="flex  justify-between">
        <h1 className="font-bold text-xl">CineThrill Showtimes</h1>
      </div>

      <MovieForm />
    </main>
  );
}
