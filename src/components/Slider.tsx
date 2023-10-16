"use client";
import { sliderData } from "@/constant";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0 as number);
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1)),
      2000
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex max-lg:flex-col h-screen bg-fuchsia-50">
      <div className="flex flex-1 flex-col  items-center justify-center gap-8 lg:h-full h-1/2">
        <div className="text-5xl max-sm:text-md text-red-500 font-bold text-center p-4 md:p-10 uppercase tracking-wide md:text-6xl xl:text-7xl">
          {sliderData[currentSlide].title}
        </div>
        <button className="px-8 py-4 bg-red-500 text-white mb-4">Order Now</button>
      </div>
      <div className="relative flex w-full flex-1 h-1/2 lg:h-full">
        <Image
          alt="Slider Image"
          src={sliderData[currentSlide].image}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;

