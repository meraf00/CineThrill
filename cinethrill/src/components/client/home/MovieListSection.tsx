import React from 'react';
import { HorizontalListView } from '../ListView/HorizontalListView';

export interface MovieListSectionProps {
  id: string;
  section: string;
  children: React.ReactNode;
}

export const MovieListSection = ({
  id,
  section,
  children,
}: MovieListSectionProps) => {
  return (
    <section id={id} className="px-16">
      <h1 className="font-bold text-2xl tracking-wide">{section}</h1>

      <HorizontalListView>{children}</HorizontalListView>
    </section>
  );
};
