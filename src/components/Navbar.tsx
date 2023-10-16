import React from "react";
import { Cart, Menu, Phone } from ".";
import Link from "next/link";

const Navbar = () => {
  let user = false;
  return (
    <div className="flex justify-between items-center p-4 text-red-500 border-red-500 border-b-2 uppercase lg:px-20 xl:px-40">
      <div className="hidden md:flex gap-3 justify-center items-center">
        <Link href={"/"}>Homepage</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      <div className="font-bold text-2xl">
        <Link href={"/"}>Massimo</Link>
      </div>
      <div className="max-md:flex hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 justify-center items-center">
        <Phone className="w-5 h-5" />
        {!user ? (
          <Link href={"/login"}>Login</Link>
        ) : (
          <Link href={"/orders"}>Orders</Link>
        )}
        <Cart className="w-5 h-5" />
      </div>
    </div>
  );
};

export default Navbar;
