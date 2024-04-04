"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import { Search } from ".";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="flex items-center justify-between bg-bgSoft p-10 rounded-lg mb-5">
      <div className="text-soft font-bold capitalize">
        {pathName.split("/").pop()}
      </div>
      <div className="flex gap-5 items-center">
        <Search placeholder="Search..." />
        <div className="flex gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
