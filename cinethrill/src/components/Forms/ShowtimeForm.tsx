'use client';

import { Input } from '@/components/Input/Input';
import { Select } from '@/components/Input/Select';
import { Button } from '@/components/Button/Button';
import { Movie } from '@/api/models/movie';

export interface ShowtimeFormProps {
  movie?: Movie;
  halls?: [];
  startAt?: Date;
  endAt?: Date;
}

export default function ShowtimeForm(props: ShowtimeFormProps) {
  return (
    <form action="" className="mt-10">
      <div className="flex flex-col gap-10 ">
        <div className="flex w-2/3 gap-8 items-center">
          <Input
            type="datetime-local"
            onChange={(e) => {}}
            placeholder="From"
            defaultValue={props.startAt?.toISOString().substring(0, 10)}
          />

          <Input
            type="datetime-local"
            onChange={(e) => {}}
            placeholder="To"
            defaultValue={props.startAt?.toISOString().substring(0, 10)}
          />
        </div>
        <div className="flex flex-col w-1/2 max-w-80 gap-8">
          <Select content="Movie"></Select>
          <Input type="text" onChange={(e) => {}} placeholder="Halls" />
        </div>
      </div>
      <div className="my-6 max-w-44">
        <Button>Add showtime</Button>
      </div>
    </form>
  );
}
