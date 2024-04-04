import React from "react";
import styles from "./users.module.css";
import { Pagination, Search } from "@/components/common";
import Image from "next/image";
import { MdCreate, MdDelete } from "react-icons/md";
import Link from "next/link";

const Users = () => {
  return (
    <div className="bg-bgSoft p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a user..." />
        <Link
          href={"/dashboard/users/add"}
          className="bg-indigo-400 rounded-md p-1"
        >
          Add New
        </Link>
      </div>
      {/* Table  */}
      <div className="">
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Created at</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td>
                <div className="flex gap-[10px] items-center">
                  <Image
                    width={40}
                    height={40}
                    src={"/profile.png"}
                    alt="profile"
                    className="object-cover rounded-full"
                  />
                  <span>Jogn Doe</span>
                </div>
              </td>
              <td>hello@gmail.com</td>
              <td>Oct 30 2023</td>
              <td>client</td>
              <td>passive</td>
              <td className="flex gap-3 mt-2">
                <button>
                  <MdCreate color="green" />
                </button>
                <button>
                  <MdDelete color="red" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
};

export default Users;
