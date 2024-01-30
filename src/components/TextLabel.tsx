import React from "react";

export interface TextLabelProps {
  isValid?: boolean;
  isRequired?: boolean;
  children: React.ReactNode;
  id: string;
}

export const TextLabel: React.FC<TextLabelProps> = ({
  isValid = false,
  isRequired = false,
  children,
  id,
}) => {
  return (
    <label
      className={`font-warsaw font-bold text-lg ${!isValid && "text-red-600"}`}
      htmlFor={id}
    >
      {children}
      {isRequired && <span className="text-red-600">*</span>}
    </label>
  );
};
