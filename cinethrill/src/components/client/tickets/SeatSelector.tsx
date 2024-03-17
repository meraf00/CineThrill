import { Seat } from '@/api/models/seat';
import { SolarSofaBroken } from '@/components/Icons';
import React, { useState } from 'react';

export interface SeatSelectorProps {
  seats: Seat[];
  padding?: number;
  onSeatSelect?: (seats: string[]) => void;
}

export const SeatSelector = ({
  seats,
  onSeatSelect,
  padding = 32,
}: SeatSelectorProps) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSeatSelect = (seat: Seat) => {
    if (seat.status == 'available') {
      setSelectedSeats((prev) => {
        let newSelectedSeats: string[] = [];

        if (prev.includes(seat.id)) {
          newSelectedSeats = prev.filter((id) => id !== seat.id);
        } else {
          newSelectedSeats = [...prev, seat.id];
        }

        onSeatSelect?.(newSelectedSeats);
        return newSelectedSeats;
      });
    }
  };

  return (
    <div className="max-w-[90%] md:max-w-[70%] mx-auto overflow-x-auto no-scrollbar feathered-edge-linear-balanced">
      <div
        className="relative"
        style={{
          height: Math.max(...seats.map((seat) => seat.row + seat.height)),
          width: Math.max(
            ...seats.map((seat) => seat.column + seat.width + padding * 2)
          ),
        }}
      >
        {seats.map((seat, idx) => {
          let className = '';
          if (selectedSeats.includes(seat.id)) {
            className = 'absolute text-red-500 font-bold cursor-pointer';
          } else if (seat.status == 'available') {
            className = 'absolute hover:text-teal cursor-pointer';
          } else if (seat.status == 'reserved') {
            className = 'absolute text-gray-500 cursor-not-allowed';
          }

          return (
            <SolarSofaBroken
              key={seat.id}
              className={className}
              style={
                {
                  left: `${seat.column + padding}`,
                  top: `${seat.row}`,
                  width: `${seat.width}px`,
                  height: `${seat.height}px`,
                } as React.CSSProperties
              }
              onClick={() => handleSeatSelect(seat)}
            />
          );
        })}
      </div>
    </div>
  );
};
