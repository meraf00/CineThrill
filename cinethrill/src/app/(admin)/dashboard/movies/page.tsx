'use client';

import { Input } from '@/components/Input/Input';
import { Select } from '@/components/Input/Select';
import { Button } from '@/components/Button/Button';

export default function Movies() {
  return (
    <main>
      <h1 className="font-bold text-xl">Add new movie</h1>

      <form action="" className="mt-10">
        <div className="flex gap-10">
          <div className="flex flex-col w-1/2 max-w-80 gap-8">
            <Input type="text" onChange={(e) => {}} placeholder="Title" />
            <Input
              type="number"
              onChange={(e) => {}}
              placeholder="Duration (min)"
              min={0}
            />

            <Input
              type="number"
              onChange={(e) => {}}
              placeholder="IMBD Rating"
              min={0}
              max={10}
            />

            <Input type="text" onChange={(e) => {}} placeholder="Production" />
            <Input type="text" onChange={(e) => {}} placeholder="Plot" />
          </div>

          <div className="flex flex-col w-1/2 max-w-80  gap-8">
            <Select content="Genre"></Select>
            <Input type="text" onChange={(e) => {}} placeholder="Directors" />
            <Input type="text" onChange={(e) => {}} placeholder="Actors" />
            <Input type="file" onChange={(e) => {}} placeholder="Poster" />
            <Input type="date" onChange={(e) => {}} placeholder="Release" />
          </div>
        </div>
        <div className="my-6 max-w-44">
          <Button>Add movie</Button>
        </div>
      </form>
    </main>
  );
}
