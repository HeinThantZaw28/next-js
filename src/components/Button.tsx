"use client";
import React from "react";
import { ButtonProps } from "./type";
import Image from "next/image";

const CustomBtn = ({
  type,
  disabled,
  className,
  onClick,
  title,
  textStyles,
  rightIcon,
}: ButtonProps) => {
  return (
    <>
      <button
        type={type}
        disabled={disabled ?? false}
        onClick={onClick}
        className={`custom-btn ${className}`}
      >
        <span className={`flex-1 ${textStyles}`}>{title}</span>
        {rightIcon && (
          <div className="w-6 h-6 relative">
            <Image
              src={rightIcon}
              alt="right arrow"
              fill
              className="object-contain"
            />
          </div>
        )}
      </button>
    </>
  );
};

export default CustomBtn;
