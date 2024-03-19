'use client';

import React, { useState } from 'react';

export const Input = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  const [value, setValue] = useState(props.defaultValue ?? '');

  let className = '';

  if (
    value !== '' ||
    ['date', 'datetime-local', 'file'].includes(props.type ?? '')
  ) {
    className = 'top-0 -translate-y-[80%] px-0';
  } else {
    className = 'top-[50%] -translate-y-[50%]';
  }

  return (
    <div className="relative">
      <input
        {...props}
        placeholder=""
        defaultValue={undefined}
        className={
          'w-full peer p-2 bg-transparent border rounded-md border-opacity-25 border-white outline-none text-sm  dark:[color-scheme:dark] ' +
          props.className
        }
        value={value}
        onChange={(e) => {
          props.onChange ? props.onChange(e) : null;
          setValue(e.target.value);
        }}
      />
      <label
        htmlFor={props.id}
        className={
          `absolute 
            peer-focus:top-0 peer-focus:left-0 peer-focus:-translate-y-[80%] peer-focus:px-0                       
            text-xs p-3 left-0 opacity-80
            transition-all duration-300 ease-in-out ` + className
        }
      >
        {props.placeholder}
      </label>
    </div>
  );
};
