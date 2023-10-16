import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen max-sm:h-[calc(100vh-12rem)] lg:h-[calc(100vh-16rem)] xl:h-[calc(100vh-325px)] md:h-[calc(100vh-12rem)] text-red-500">
      {/* Product Container  */}
      <div className="flex flex-col h-1/2 lg:h-full lg:w-2/3 2xl:flex-1 p-4 gap-3 overflow-y-scroll lg:p-10 xl:p-20">
        {/* Single Product  */}
        <div className="flex justify-between items-center">
          <Image src={"/temporary/p1.png"} alt="" height={100} width={100} />
          <div className="">
            <h1 className="font-bold text-xl uppercase">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold text-base">$18.99</h2>
          <span className="font-bold cursor-pointer">X</span>
        </div>
      </div>
      {/* Payment Container  */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col justify-center gap-3 lg:h-full lg:w-1/3 2xl:flex-1 lg:p-10 xl:p-20 2xl:text-xl">
        <div className="flex justify-between items-center">
          <span className="font-bold text-base">Subtotal (3 items)</span>
          <span className="">$ 81.70</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-base">Service Cost</span>
          <span className="">$ 0.00</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-base">Delivery Cost</span>
          <span className="text-green-400 uppercase">Free!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between items-center">
          <span className="font-bold text-base uppercase">
            Total (Incl.vat)
          </span>
          <span className="uppercase font-bold">$ 81.70</span>
        </div>
        <button className="bg-red-500 rounded-md px-4 py-2 text-white w-max mt-3">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
