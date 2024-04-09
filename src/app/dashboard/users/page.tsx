import React from "react";
import styles from "./users.module.css";
import { Pagination, Search } from "@/components/common";
import Image from "next/image";
import { MdCreate, MdDelete } from "react-icons/md";
import Link from "next/link";
import {
  deleteUser,
  fetchUsers,
} from "../../../../service/fetchData/fetchUsers";

interface UserPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Users = async ({ searchParams }: UserPageProps) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || "1";
  const { users, count } = await fetchUsers(q, page);
  // console.log(users);
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
            {users?.map((user) => (
              <tr className="" key={user?.id}>
                <td>
                  <div className="flex gap-[10px] items-center">
                    <Image
                      width={40}
                      height={40}
                      src={user?.img || "/profile.png"}
                      alt="profile"
                      className="object-cover rounded-full"
                    />
                    <span>{user?.username}</span>
                  </div>
                </td>
                <td>{user?.email}</td>
                <td>{user?.createdAt.toString().slice(4, 16)}</td>
                <td>{user?.isAdmin ? "admin" : "client"}</td>
                <td>{user?.isActive ? "active" : "passive"}</td>
                <td className="flex gap-3 mt-2">
                  <Link href={`/dashboard/users/${user.id}`}>
                    <MdCreate color="green" />
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user?.id} />
                    <button>
                      <MdDelete color="red" />
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination count={count} />
      </div>
    </div>
  );
};

export default Users;
