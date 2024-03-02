import React from 'react';

export const HorizontalListView = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex -ml-16 -mr-16 gap-14 px-16 py-10 overflow-x-auto feathered-edge-linear-balanced no-scrollbar">
      {children}
    </div>
  );
};
