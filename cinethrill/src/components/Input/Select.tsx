import React from 'react';

export const Select = (
  props: React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >
) => {
  return (
    <div className="relative">
      <select
        {...props}
        className={
          'w-full peer p-2 bg-transparent border rounded-md border-opacity-25 border-white outline-none text-xs dark:[color-scheme:dark]  ' +
          props.className
        }
      >
        {props.children}
      </select>
      <label
        htmlFor={props.id}
        className={`absolute 
            top-0 left-0 -translate-y-[80%] px-0                       
            text-xs p-3 opacity-80
            transition-all duration-300 ease-in-out`}
      >
        {props.content}
      </label>
    </div>
  );
};
