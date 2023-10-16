"use client";
import { spawn } from "child_process";
import Image from "next/image";
import React, { useState } from "react";

export interface PhoneProps {
  className: string;
}

const Phone = ({ className }: PhoneProps) => {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "555 77 00";

  const handleCopy = () => {
    const textField = document.createElement("textarea");
    textField.innerText = phoneNumber;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    document.body.removeChild(textField);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <>
      <div
        className="bg-orange-300  flex gap-3 px-3 py-2 rounded-md cursor-pointer active:bg-orange-400 w-[150px] max-md:w-[250px] max-md:flex  justify-center max-md:relative max-lg:absolute top-2 right-4"
        onClick={handleCopy}
      >
        {copied ? (
          <span>Copied</span>
        ) : (
          <>
            <div className={`${className} relative`}>
              <Image src={"/phone.png"} alt={"phone"} fill={true} />
            </div>
            <span>{phoneNumber}</span>
          </>
        )}
      </div>
    </>
  );
};

export default Phone;
