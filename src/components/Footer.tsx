import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between items-center p-4 lg:p-10 xl:p-20 uppercase w-full border-t text-red-500">
      <Link href={"/"}>
        <h1 className="text-2xl font-bold ">Massimo</h1>
      </Link>
      <span>@ All Rights Reserved</span>
    </div>
  );
};

export default Footer;
