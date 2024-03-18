'use client';

import { Input } from '@/components/Input/Input';
import { Select } from '@/components/Input/Select';
import { Button } from '@/components/Button/Button';

export interface MovieFormProps {
  title?: string;
  genres?: string[];
  directors?: string[];
  actors?: string[];
  plot?: string;
  poster?: string;
  runtime?: string;
  imdbRating?: number;
  production?: string;
  released?: Date;
}

export default function MovieForm(props: MovieFormProps) {
  return (
    <form action="" className="mt-10">
      <div className="flex gap-10">
        <div className="flex flex-col w-1/2 max-w-80 gap-8">
          <Input
            type="text"
            onChange={(e) => {}}
            placeholder="Title"
            defaultValue={props.title}
          />
          <Input
            type="text"
            onChange={(e) => {}}
            placeholder="Runtime"
            defaultValue={props.runtime}
          />

          <Input
            type="number"
            onChange={(e) => {}}
            placeholder="IMBD Rating"
            defaultValue={props.imdbRating}
            min={0}
            max={10}
          />

          <Input
            type="text"
            onChange={(e) => {}}
            placeholder="Production"
            defaultValue={props.production}
          />
          <Input
            type="text"
            onChange={(e) => {}}
            placeholder="Plot"
            defaultValue={props.plot}
          />
        </div>

        <div className="flex flex-col w-1/2 max-w-80  gap-8">
          <Select content="Genre"></Select>
          <Input type="text" onChange={(e) => {}} placeholder="Directors" />
          <Input type="text" onChange={(e) => {}} placeholder="Actors" />
          <Input type="file" onChange={(e) => {}} placeholder="Poster" />
          <Input
            type="date"
            onChange={(e) => {}}
            placeholder="Release"
            defaultValue={props.released?.toISOString().substring(0, 10)}
          />
        </div>
      </div>
      <div className="my-6 max-w-44">
        <Button>Add movie</Button>
      </div>
    </form>
  );
}
