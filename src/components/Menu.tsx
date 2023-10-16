"use client";
import { links } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Cart, Phone } from ".";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  let user = false;
  return (
    <div>
      <Image
        src={isOpen ? "/close.png" : "/open.png"}
        alt="mobile menu"
        width={20}
        height={20}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="bg-red-500 text-white absolute left-0 top-[110px] w-full max-sm:h-full max-sm:top-[117px] h-[calc(100vh-110px)] flex flex-col justify-center items-center text-3xl gap-8 z-10">
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          {!user ? (
            <Link href={"/login"} onClick={() => setIsOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href={"/orders"} onClick={() => setIsOpen(false)}>
              Orders
            </Link>
          )}
          <Link href={"/cart"} onClick={() => setIsOpen(false)}>
            <Cart className="w-8 h-8" />
          </Link>
          <Phone className="w-8 h-8" />
        </div>
      )}
    </div>
  );
};

export default Menu;
