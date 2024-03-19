'use client';

import MovieForm from '@/components/Forms/MovieForm';
import { useParams } from 'next/navigation';

export default function EditMovie() {
  const { movieId } = useParams();

  return (
    <main className="w-full">
      <div className="flex  justify-between">
        <h1 className="font-bold text-xl">CineThrill Movies</h1>
      </div>

      <MovieForm />
    </main>
  );
}
