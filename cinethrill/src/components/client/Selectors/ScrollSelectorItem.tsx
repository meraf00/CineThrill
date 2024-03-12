import React from 'react';

export interface ScrollSelectorItemProps {
  children: React.ReactNode;
  isSelected: boolean;
}

export const ScrollSelectorItem = React.forwardRef(
  (
    { children, isSelected }: ScrollSelectorItemProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const className = isSelected
      ? 'flex flex-col items-center font-bold transition-all ease-in-out duration-300'
      : 'flex flex-col items-center text-xs opacity-65 transition-all ease-in-out duration-300';
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }
);
