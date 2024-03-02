import Image from 'next/image';
import React from 'react';

export interface BackdropsProps {
  images: string[];
  activeIdx?: number;
}

export const Backdrop = ({ images, activeIdx }: BackdropsProps) => {
  return (
    <>
      {images.map((image, idx) => {
        let cls = '';

        if (idx === activeIdx) {
          cls =
            'absolute -z-10 top-0 right-0 object-cover w-full h-full opacity-60 feathered-edge-linear transition-all duration-300 ease-in-out';
        } else {
          cls =
            'absolute -z-10 top-0 right-0 object-cover w-full h-full opacity-0 feathered-edge-linear transition-all duration-300 ease-in-out';
        }

        return (
          <Image
            key={idx}
            className={cls}
            src={images[idx]}
            width={1185}
            height={720}
            alt="Movie poster"
          />
        );
      })}
    </>
  );
};
