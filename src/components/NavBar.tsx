import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomBtn } from ".";

const NavBar = () => {
  return (
    <>
      <header className="w-full z-10 absolute">
        <nav className="justify-between m-auto py-4 px-6 sm:px-16 max-w-[1440px] flex items-center">
          <Link href={"/"} className="flex items-center">
            <Image alt="car logo" src={"/logo.svg"} width={118} height={18} />
          </Link>
          <CustomBtn
            disabled={false}
            title="Sign in"
            type="button"
            className="text-primary-blue bg-white rounded-full hover:shadow-slate-500 hover:shadow-sm min-w-[130px] mr-8"
          />
        </nav>
      </header>
    </>
  );
};

export default NavBar;
