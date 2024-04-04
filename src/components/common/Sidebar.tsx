"use client";
import React from "react";
import { menuItems } from "@/constant";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();

  const handleLogout = () => {};
  return (
    <div className="overflow-y-scroll h-screen">
      <div className=" flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full relative bg-white">
            <Image
              src={"" || "/profile.png"}
              alt="profile"
              fill
              sizes=""
              className="object-contain"
            />
          </div>
          <div className="flex flex-col justify-start">
            <h4 className="text-xl font-semibold">user1</h4>
            <h5 className="text-md">Adminstrator</h5>
          </div>
        </div>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <span className="text-xl font-semibold">{item.title}</span>
              <div className="flex flex-col gap-5 mt-5 mb-10">
                {item.lists.map((list) => {
                  return list.path ? (
                    <Link
                      className={`${
                        pathName === list.path && "bg-slate-700"
                      } flex gap-3 hover:bg-slate-700 px-4 py-5 items-center rounded-lg`}
                      key={list.id}
                      href={list.path}
                    >
                      <span className="text-lg">{list.icon}</span>
                      <span className="text-lg">{list.title}</span>
                    </Link>
                  ) : (
                    <button
                      onClick={handleLogout}
                      className={`${
                        pathName === list.path && "bg-slate-700"
                      } flex gap-3 hover:bg-slate-700 px-4 py-5 items-center rounded-lg`}
                      key={list.id}
                    >
                      <span className="text-lg">{list.icon}</span>
                      <span className="text-lg">{list.title}</span>
                    </button>
                  );
                })}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;