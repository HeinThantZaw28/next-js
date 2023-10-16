import Image from "next/image";
import React from "react";
import CountDown from "./Countdown";

const Offer = () => {
  return (
    <div className="flex flex-col h-screen md:flex-row bg-black md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* Text Container */}
      <div className="flex flex-1 flex-col items-center justify-center text-white gap-8 p-6 text-center">
        <h1 className="text-5xl font-bold xl:text-6xl">
          Delicious Burger & French Fry
        </h1>
        <p className="xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <>
          <CountDown />
        </>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">
          Order Now
        </button>
      </div>
      {/* Image Container  */}
      <div className="flex-1 relative md:h-full w-full">
        <Image
          src={"/offerProduct.png"}
          alt="offer Prodct"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Offer;
