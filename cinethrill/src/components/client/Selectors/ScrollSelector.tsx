'use client';

import { useEffect, useRef, useState } from 'react';
import { ScrollSelectorItem } from './ScrollSelectorItem';

export interface ScrollSelectorProps {
  items: string[][];
  onItemSelected: (item: number) => void;
}

export const ScrollSelector = ({
  items,
  onItemSelected,
}: ScrollSelectorProps) => {
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const selectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectorRef.current) return;

    const itemSelector = selectorRef.current!;

    const handleScroll = () => {
      const itemSelectorRect = itemSelector.getBoundingClientRect();
      const itemSelectorLeft = itemSelectorRect.left;
      const itemSelectorWidth = itemSelectorRect.width;

      for (let i = 0; i < itemRefs.current.length; i++) {
        const itemRef = itemRefs.current[i];
        const itemRefRect = itemRef.getBoundingClientRect();
        const itemRefLeft = itemRefRect.left - itemSelectorLeft;
        const itemRefRight = itemRefRect.right - itemSelectorLeft;

        if (
          itemRefLeft <= itemSelectorWidth / 2 &&
          itemRefRight >= itemSelectorWidth / 2
        ) {
          setSelectedItem(i);
          onItemSelected(i);
          break;
        }
      }
    };

    itemSelector.addEventListener('scroll', handleScroll);

    return () => {
      itemSelector.removeEventListener('scroll', handleScroll);
    };
  }, [itemRefs.current, selectorRef.current]);

  return (
    <div
      ref={selectorRef}
      className="flex gap-8 items-center feathered-edge-linear-balanced overflow-x-auto max-w-72 px-32 no-scrollbar h-16"
    >
      {items.map((item, idx) => {
        return (
          <ScrollSelectorItem
            key={idx}
            isSelected={idx === selectedItem}
            ref={(el) => {
              if (itemRefs.current && el) {
                itemRefs.current[idx] = el;
              }
            }}
          >
            {item.map((line, idx) => {
              return <span key={idx}>{line}</span>;
            })}
          </ScrollSelectorItem>
        );
      })}
    </div>
  );
};
