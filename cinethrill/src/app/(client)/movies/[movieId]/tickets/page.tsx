'use client';
import { ScrollSelector } from '@/components/client/Selectors/ScrollSelector';
import { ScrollSelectorItem } from '@/components/client/Selectors/ScrollSelectorItem';
import React, { useEffect, useRef, useState } from 'react';

export interface SelectSeatsPageProps {
  dates: string[];
}

export default function SelectSeatsPage() {
  const _dates = [
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

  return (
    <main className="flex flex-col items-center my-5">
      <ScrollSelector items={_dates} onItemSelected={(i) => console.log(i)} />
    </main>
  );
}
