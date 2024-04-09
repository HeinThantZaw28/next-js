"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface NavLinkProps {
  list: {
    id: string;
    title: string;
    path: string;
    icon: React.JSX.Element;
  };
}

const NavLinks = ({ list }: NavLinkProps) => {
  const pathName = usePathname();
  return (
    <Link
      className={`${
        pathName === list.path && "bg-slate-700"
      } flex gap-3 hover:bg-slate-700 px-4 py-5 items-center rounded-lg`}
      href={list.path}
    >
      <span className="text-lg">{list.icon}</span>
      <span className="text-lg">{list.title}</span>
    </Link>
  );
};

export default NavLinks;
