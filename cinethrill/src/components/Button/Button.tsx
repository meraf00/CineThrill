import React from 'react';

export const Button = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button className="p-2 w-full border text-teal border-teal bg-opacity-90 hover:bg-teal hover:text-blueblack font-bold transition-all duration-300 ease-in-out rounded text-sm">
      {props.children}
    </button>
  );
};
