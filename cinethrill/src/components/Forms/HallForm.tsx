'use client';

import { Input } from '@/components/Input/Input';
import { Button } from '@/components/Button/Button';
import { Seat } from '@/libs/models/seat';
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

interface DragState {
  x: number;
  y: number;
  isDragging: boolean;
}

export default function HallForm(props: HallFormProps) {
  const [file, setFile] = useState<string | null>(null);
  const [seats, setSeats] = useState<Seat[]>([]);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [dragState, setDragState] = useState<DragState>({
    x: 0,
    y: 0,
    isDragging: false,
  });
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

  const onSeatDragStart = (e: DragEvent<HTMLDivElement>, seatId: string) => {
    setDragState({
      x: e.clientX,
      y: e.clientY,
      isDragging: selectedSeats.includes(seatId),
    });
  };

  const onSeatDragEnd = (e: DragEvent<HTMLDivElement>) => {
    if (isAdding || !dragState.isDragging) return;

    if (!canvasRef.current) return;

    const dx = e.clientX - (dragState as DragState).x;
    const dy = e.clientY - (dragState as DragState).y;

    moveSelectedSeats(dx, dy);
    setDragState({ x: 0, y: 0, isDragging: false });
  };

  const moveSelectedSeats = (dx: number, dy: number) => {
    const moved = seats
      .filter((seat) => selectedSeats.includes(seat.id))
      .map((seat) => {
        const newSeat = Object.assign({}, seat);
        newSeat.column += dx;
        newSeat.row += dy;
        return newSeat;
      });

    setSeats((seats) => {
      const other = seats.filter((seat) => !selectedSeats.includes(seat.id));
      return [...other, ...moved];
    });
  };

  const handleKeyboardShortcut = (e: KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    switch (e.key) {
      case 'a':
        setSelectedSeats(seats.map((seat) => seat.id));
        break;
      case 'd':
        setSelectedSeats([]);
        break;
      case 'r':
        setSelectedSeats((prevSelected) => {
          const inverse = seats.filter(
            (seat) => !prevSelected.includes(seat.id)
          );
          return inverse.map((seat) => seat.id);
        });
        break;
      case 'ArrowUp':
        moveSelectedSeats(0, -1);
        break;
      case 'ArrowDown':
        moveSelectedSeats(0, 1);
        break;
      case 'ArrowLeft':
        moveSelectedSeats(-1, 0);
        break;
      case 'ArrowRight':
        moveSelectedSeats(1, 0);
        break;
      case 'Delete':
        setSeats((seats) =>
          seats.filter((seat) => !selectedSeats.includes(seat.id))
        );
        setSelectedSeats([]);
        break;
    }
  };

  const handleSelectSeat = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    seatId: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
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
            className="w-1/2 aspect-video cursor-pointer relative overflow-hidden"
            onMouseDown={handleAddSeats}
            onKeyDown={handleKeyboardShortcut}
            tabIndex={0}
          >
            <div className="absolute w-full h-full  bg-blueblack bg-opacity-70 aspect-video">
              {seats.map((seat, idx) => {
                return (
                  <div
                    key={idx}
                    draggable={true}
                    onDragStart={(e) => {
                      onSeatDragStart(e, seat.id);
                    }}
                    onDragEnd={onSeatDragEnd}
                    onClick={(e) => handleSelectSeat(e, seat.id)}
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
                          pointerEvents: isAdding ? 'none' : 'auto',
                        } as React.CSSProperties
                      }
                    />
                  </div>
                );
              })}
            </div>
            <Image
              className="object-contain w-full h-full aspect-video"
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
