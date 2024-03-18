import MovieForm from '@/components/Forms/MovieForm';

export default function Movies() {
  return (
    <main className="w-full">
      <div className="flex  justify-between">
        <h1 className="font-bold text-xl">CineThrill Movies</h1>
      </div>

      <MovieForm />
    </main>
  );
}
