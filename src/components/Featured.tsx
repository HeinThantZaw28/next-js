import { featuredProducts, menuData } from "@/constant";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-full overflow-x-scroll">
      {/* WRAPPER  */}
      <div className="w-max flex">
        {/* Single Item */}
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col justify-around items-center w-screen h-[60vh] p-4 hover:bg-fuchsia-50 transition-all duration-100 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* IMAGE CONTAINER  */}
            <div className="relative w-full flex-1 hover:rotate-[60deg] transition-all duration-500">
              <Image
                src={product.img}
                fill
                alt="features images"
                className="object-contain"
              />
            </div>
            {/* TEXT CONTAINER  */}
            <div className="flex flex-1 flex-col justify-center items-center text-red-500 gap-2 text-center ">
              <h1 className="uppercase font-bold text-xl xl:text-2xl 2xl:text-3xl">
                {product.title}
              </h1>
              <p className="p-4 2xl:p-8">{product.desc}</p>
              <h2 className="font-bold text-xl">$ 24.90</h2>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
