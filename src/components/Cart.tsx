import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface CartProps{
    className:string
}

const Cart = ({className}:CartProps) => {
  const noOfCart = 3;
  return (
    <Link href={"/cart"} className="flex gap-3 items-center justify-center">
      <div className={`${className} relative`}>
        <Image fill alt="cartIcon" src={"/cart.png"} />
      </div>
      <p>Cart ({noOfCart})</p>
    </Link>
  );
};

export default Cart;
