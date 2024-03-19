'use client';

import { Input } from '@/components/Input/Input';
import { Select } from '@/components/Input/Select';
import { Button } from '@/components/Button/Button';
import { Seat } from '@/api/models/seat';
import Image from 'next/image';
import {
  ChangeEvent,
  DragEvent,
  KeyboardEvent,
  MouseEvent,
  useRef,
  useState,
} from 'react';
import { SolarSofaBroken } from '../Icons';
import { v4 as uuidv4 } from 'uuid';

export interface HallFormProps {
  name?: string;
  seatMapImageUrl?: string;
  seats?: Seat[];
}

export default function HallForm(props: HallFormProps) {
  const [file, setFile] = useState<string | null>(null);
  const [seats, setSeats] = useState<Seat[]>([]);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const canvasRef = useRef(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(URL.createObjectURL(e.target.files[0]));
      setSeats([]);
    }
  };

  const handleAddSeats = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (!isAdding) return;
    const { top, left } = (e.target as HTMLDivElement).getBoundingClientRect();

    const c = e.clientX - left;
    const r = e.clientY - top;

    setSeats((seats) => [
      ...seats,
      {
        row: r,
        column: c,
        price: 100,
        status: 'string',
        id: uuidv4(),
        height: 24,
        width: 24,
      },
    ]);
  };

  const handleDragSeat = (e: DragEvent<HTMLDivElement>, seatId: string) => {
    if (isAdding) return;

    if (!canvasRef.current) return;

    const { top, left } = (
      canvasRef.current as HTMLDivElement
    ).getBoundingClientRect();

    const c = e.clientX - left;
    const r = e.clientY - top;

    setSeats((seats) => {
      const current = seats.filter((seat) => seat.id === seatId)[0];
      const other = seats.filter((seat) => seat.id !== seatId);

      const seat = Object.assign({}, current);
      seat.column = c;
      seat.row = r;

      console.log(seat);
      console.log(other);

      return [...other, seat];
    });
  };

  const handleMoveSeat = (e: KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const targets = seats.filter((seat) => selectedSeats.includes(seat.id));

    if (targets.length === 0) return;

    const moved = targets.map((seat) => {
      const newSeat = Object.assign({}, seat);

      if (e.key === 'ArrowUp') {
        newSeat.row -= 1;
      } else if (e.key === 'ArrowDown') {
        newSeat.row += 1;
      } else if (e.key === 'ArrowLeft') {
        newSeat.column -= 1;
      } else if (e.key === 'ArrowRight') {
        newSeat.column += 1;
      }

      return newSeat;
    });

    setSeats((seats) => {
      const other = seats.filter((seat) => !selectedSeats.includes(seat.id));

      return [...other, ...moved];
    });
  };

  const handleSelectSeat = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats((prev) => prev.filter((id) => id !== seatId));
    } else {
      setSelectedSeats((prev) => [...prev, seatId]);
    }
  };

  return (
    <form action="" className="mt-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col w-1/2 max-w-80 gap-10">
          <Input
            type="text"
            onChange={(e) => {}}
            placeholder="Name"
            defaultValue={props.name}
          />
          <Input
            type="file"
            onChange={handleFileChange}
            placeholder="Blueprint"
            accept="image/*"
          />
        </div>
      </div>
      {file ? (
        <div className="flex flex-col gap-3 mt-8">
          <div className="flex gap-8 items-center w-1/2 justify-between">
            <span className="text-sm">
              {isAdding
                ? 'Click on the image to place seats'
                : 'Select / Drag seats to edit'}
            </span>
            <div className="w-fit">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  setIsAdding((isAdding) => !isAdding);
                }}
              >
                {isAdding ? 'Edit seats' : 'Add seat'}
              </Button>
            </div>
          </div>
          <div
            ref={canvasRef}
            className="w-1/2 h-80  cursor-pointer relative"
            onMouseDown={handleAddSeats}
            onKeyDown={handleMoveSeat}
            tabIndex={0}
          >
            <div className="absolute w-full h-full  bg-blueblack bg-opacity-70">
              {seats.map((seat, idx) => {
                return (
                  <div
                    key={idx}
                    draggable={true}
                    onDragEnd={(e) => {
                      e.preventDefault();
                      handleDragSeat(e, seat.id);
                    }}
                    onClick={(e) => handleSelectSeat(seat.id)}
                  >
                    <SolarSofaBroken
                      className={
                        'absolute ' +
                        (selectedSeats.includes(seat.id)
                          ? 'text-teal-light'
                          : '')
                      }
                      style={
                        {
                          left: `${seat.column}`,
                          top: `${seat.row}`,
                          width: `${seat.width}px`,
                          height: `${seat.height}px`,
                        } as React.CSSProperties
                      }
                    />
                  </div>
                );
              })}
            </div>
            <Image
              className="object-contain w-full h-full"
              src={file}
              alt=""
              width={1180}
              height={200}
            />
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="my-6 max-w-44">
        <Button>Add hall</Button>
      </div>
    </form>
  );
}
