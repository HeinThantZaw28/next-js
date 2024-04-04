import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
  className: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  rest?: any;
}

const Input = ({
  type,
  placeholder,
  className,
  disabled = false,
  required = false,
  rest,
  name,
  id,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      disabled={disabled}
      required={required}
      name={name}
      id={id}
      {...rest}
    />
  );
};

export default Input;
