import { pizzas } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <>
      <div className="flex flex-wrap text-red-500">
        {pizzas.map((pizza) => (
          <Link
            className="w-full sm:w-1/2 lg:w-1/3 h-[60vh] border-r-2 border-red-500 border-b-2 p-4 flex flex-col justify-between group even:bg-fuchsia-50"
            key={pizza.id}
            href={`/product/${pizza.id}`}
          >
            {/* Image Container  */}
            <div className="relative h-[80%]">
              <Image
                fill
                src={pizza.img}
                alt="menu item"
                className="object-contain"
              />
            </div>
            {/* Text Container  */}
            <div className="flex justify-between items-center h-[20%] font-bold">
              <h1 className="text-2xl p-2">{pizza.title}</h1>
              <h2 className="group-hover:hidden text-xl">${pizza.price}</h2>
              <button className="hidden group-hover:block bg-red-500 text-white px-4 py-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CategoryPage;
