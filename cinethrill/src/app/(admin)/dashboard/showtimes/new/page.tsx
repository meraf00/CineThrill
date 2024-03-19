import ShowtimeForm from '@/components/Forms/ShowtimeForm';

export default function AddShowtime() {
  return (
    <main className="w-full">
      <div className="flex  justify-between">
        <h1 className="font-bold text-xl">CineThrill Showtimes</h1>
      </div>

      <ShowtimeForm />
    </main>
  );
}
