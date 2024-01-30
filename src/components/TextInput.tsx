import React, { type ChangeEvent } from "react";

export interface TextInputProps {
  isValid?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  value: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  id,
  onChange,
  isValid = true,
  name,
  value,
}) => {
  return (
    <input
      type="text"
      id={id}
      onChange={onChange}
      aria-describedby={`${id}-error`}
      name={name}
      value={value}
      className={`block bg-gray-300 text-base text-black w-full rounded py-2 px-4 border ${
        isValid ? "border-transparent" : "border-red-700"
      }`}
    />
  );
};
