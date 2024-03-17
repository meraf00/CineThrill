'use client';
import { IonTicketOutline, Screen, SolarSofaBroken } from '@/components/Icons';
import { FancyButton } from '@/components/Button/FancyButton';
import { ScrollSelector } from '@/components/client/Selectors/ScrollSelector';
import { SeatSelector } from '@/components/client/tickets/SeatSelector';
import React, { useState } from 'react';

export interface SelectSeatsPageProps {
  dates: string[];
}

export default function SelectSeatsPage() {
  const dates = [
    ['Sun', '0'],
    ['Mon', '0'],
    ['Tue', '0'],
    ['Wed', '0'],
    ['Thu', '0'],
    ['Fri', '0'],
    ['Sat', '0'],
    ['Sun', '0'],
    ['Mon', '0'],
    ['Tue', '0'],
    ['Wed', '0'],
    ['Thu', '0'],
    ['Fri', '0'],
    ['Sat', '0'],
    ['Sun', '0'],
    ['Mon', '0'],
    ['Tue', '0'],
    ['Wed', '0'],
    ['Thu', '0'],
    ['Fri', '0'],
    ['Sat', '0'],
  ];

  const showtimes = [
    [['16:00'], ['18:00'], ['20:00']],
    [['12:00'], ['18:00'], ['20:00']],
    [['12:00'], ['18:00'], ['20:00']],
    [['13:00'], ['18:00'], ['20:00']],
    [['14:00'], ['18:00'], ['20:00']],
    [['15:00'], ['18:00'], ['20:00']],
    [['16:00'], ['18:00'], ['20:00']],
    [['12:00'], ['18:00'], ['20:00']],
    [['11:00'], ['18:00'], ['20:00']],
    [['10:00'], ['18:00'], ['20:00']],
    [['01:00'], ['18:00'], ['20:00']],
    [['12:00'], ['18:00'], ['20:00']],
    [['13:00'], ['18:00'], ['20:00']],
    [['14:00'], ['18:00'], ['20:00']],
    [['12:00'], ['18:00'], ['20:00']],
    [['11:00'], ['18:00'], ['20:00']],
    [['11:00'], ['18:00'], ['20:00']],
    [['12:00'], ['18:00'], ['20:00']],
    [['12:00'], ['18:00'], ['20:00']],
    [['11:00'], ['18:00'], ['20:00']],
    [['14:00'], ['18:00'], ['20:00']],
  ];

  const positions = [
    [
      [0, 0],
      [0, 32],
      [0, 64],
      [0, 96],
      [32, 0],
      [32, 32],
      [32, 64],
    ],
    [
      [0, 0],
      [0, 32],
      [0, 64],
      [0, 96],
      [32, 0],
      [32, 32],
      [32, 64],
    ],
    [
      [0, 0],
      [0, 32],
      [0, 64],
      [0, 96],
      [32, 0],
      [32, 32],
      [32, 64],
    ],
  ];

  const [dateIdx, setDateIdx] = useState<number>(0);
  const [timeIdx, setTimeIdx] = useState<number>(0);

  const seats = positions[timeIdx].map((position, idx) => {
    return {
      column: position[0],
      row: position[1],
      height: 28,
      width: 28,
      id: 'akldfjlkasdjf' + idx + '-' + timeIdx,
      price: 0,
      seatNumber: '',
      status: 'available',
    };
  });

  const handleDateChange = (idx: number) => {
    setDateIdx(idx);
  };

  const handleTimeChange = (idx: number) => {
    setTimeIdx(idx);
  };

  return (
    <main className="flex flex-col items-center my-5">
      <ScrollSelector items={dates} onItemSelected={handleDateChange} />
      <ScrollSelector
        items={showtimes[dateIdx]}
        onItemSelected={handleTimeChange}
      />

      <div className="mb-10">
        <Screen />
      </div>

      <SeatSelector
        seats={seats}
        onSeatSelect={(seats) => console.log(seats)}
      />

      <div className="mt-10">
        <FancyButton href={'/tickets'}>
          <IonTicketOutline />
          <span className="text-sm font-bold">Confirm $25</span>
        </FancyButton>
      </div>
    </main>
  );
}
