import Image from 'next/image';
import React from 'react';

export interface PosterProps {
  imageSrc: string;
  title: string;
  isActive?: boolean;
  width?: number;
  height?: number;
}

export const Poster = ({
  imageSrc,
  title,
  width = 1200,
  height = 720,
  isActive = false,
}: PosterProps) => {
  const cls = isActive ? 'w-28' : 'w-20';

  return (
    <div className="flex flex-col gap-2 cursor-pointer">
      <div
        className={`shadow-lg shadow-gray-600 rounded-sm overflow-clip  ${cls}`}
      >
        <Image
          className="object-contain w-full h-full"
          src={imageSrc}
          width={width}
          height={height}
          alt={`${title} poster`}
        />
      </div>
      <h3 className="text-sm font-bold text-nowrap">{title}</h3>
    </div>
  );
};
