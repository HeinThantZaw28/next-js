import { menuData } from "@/constant";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen lg:h-[calc(100vh-16rem)] xl:h-[calc(100vh-325px)] flex flex-col md:flex-row justify-center items-center">
      {menuData?.map((category) => (
        <Link
          key={category?.id}
          href={`/menu/${category?.slug}`}
          className="w-full h-1/3 bg-cover p-8 md:h-1/2 lg:h-1/2 xl:h-[60%] 2xl:h-[80%]"
          style={{ backgroundImage: `url(${category?.img})` }}
        >
          {/* Text Container  */}
          <div className={`text-${category?.color} w-1/2 flex flex-col justify-between items-start`}>
            <h1 className="uppercase font-bold text-2xl">{category?.title}</h1>
            <p className="text-sm my-10">{`${category?.desc.substring(0,34)}, see more...`}</p>
            <button className={`hidden 2xl:block bg-${category.color} text-${category.color === 'black' ? 'white':'red-500'} px-4 py-2 rounded-md`}>Explore</button>
          </div>
          {/* Image Container  */}
          <div className="flex flex-1"></div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
