import Price from "@/components/Price";
import { singleProduct } from "@/constant";
import Image from "next/image";
import React from "react";

const SingleProductPage = () => {
  return (
    <div className="h-screen lg:h-[calc(100vh-16rem)] xl:h-[calc(100vh-325px)] md:h-[calc(100vh-12rem)] p-4 lg:p-10 xl:p-20 flex flex-col md:flex-row md:gap-6 text-red-500 justify-around items-center">
      {/* Image Container  */}
      <div className="relative flex-1 md:h-full w-full md:w-[50%] xl:min-h-[50vh]">
        <Image alt="" src={singleProduct.img} fill className="object-contain" />
      </div>
      {/* Text Container  */}
      <div className="flex flex-1 flex-col justify-start py-8 gap-3">
        <h1 className="font-bold text-3xl uppercase">{singleProduct.title}</h1>
        <p className="text-base">{singleProduct.desc}</p>
        <Price id={singleProduct.id} options={singleProduct.options} price={singleProduct.price} />
      </div>
    </div>
  );
};

export default SingleProductPage;
