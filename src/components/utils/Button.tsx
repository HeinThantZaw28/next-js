import React from "react";

interface ButtonProps {
  type: "submit" | "reset" | "button" | undefined;
  onClick?: any;
  children: React.ReactNode;
  className: string;
  disabled?: boolean;
}

const Button = ({
  type,
  onClick,
  children,
  className,
  disabled,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
