'use client'
import { UseFormRegister } from 'react-hook-form';
import React from 'react';

export interface InputProps extends React.HTMLProps<HTMLSelectElement> {
  options: any[];
  register?: ReturnType<UseFormRegister<any>>;
  hasError?: boolean;
}

const Select: React.FC<InputProps> = ({
  options,
  className,
  placeholder = 'Selecione',
  hasError = false,
  defaultValue,
  register,
  ...rest
}) => {
  return (
    <select
      {...rest}
      {...register}
      className={`select bg-white  border p-2 rounded-md w-full cursor-pointer ${className} ${hasError ? 'border-error' : 'border-light-gray'}`}
      defaultValue={defaultValue}
    >
      <option disabled value=''>{placeholder}</option>
      {options.map((option, key) => (
        <option value={option.value} key={key}>
          {option.name ?? option}
        </option>
      ))
      }
    </select>
  )
}

export default Select
