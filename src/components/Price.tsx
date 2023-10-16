"use client";
import { ProductOptionProps } from "@/constant/type";
import React, { useState } from "react";

export interface PriceProps {
  id: number;
  options: ProductOptionProps[] | undefined;
  price: number;
}

const Price = ({ options, price }: PriceProps) => {
  const [size, setSize] = useState(24.9);
  const [selected, setSelected] = useState(0);
  const [quantity, setQuantity] = useState(1);
  let totalPrice = size * quantity;

  const handleSetSize = (title: string) => {
    if (options) {
      if (title === "Small") {
        setSize(price);
        setSelected(0);
      } else if (title === "Medium") {
        setSize((price += options[1].additionalPrice));
        setSelected(1);
      } else if (title === "Large") {
        setSize((price += options[2].additionalPrice));
        setSelected(2);
      }
    }
  };

  const handleDecreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <h2 className="font-bold text-2xl">${totalPrice}</h2>
      <div className="flex gap-6">
        {options?.map((option, index: number) => (
          <button
            onClick={() => handleSetSize(option.title)}
            key={option.title}
            className={`border w-[100px] border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-md ${
              index === selected && "bg-red-500 text-white"
            }`}
          >
            {option.title}
          </button>
        ))}
      </div>
      <div className="border border-red-500 flex justify-between rounded-md">
        <div className="flex flex-1 justify-between py-3 px-3">
          <span>Quality</span>
          <div className="flex gap-4">
            <button onClick={handleDecreaseQuantity}>{"<"}</button>
            <span>{quantity}</span>
            <button onClick={handleIncreaseQuantity}>{">"}</button>
          </div>
        </div>
        <div className="">
          <button className="border flex-1 w-[150px] border-red-500 bg-red-500 text-white px-4 py-2 rounded-md h-full">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Price;
