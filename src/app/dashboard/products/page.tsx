import React from "react";
import styles from "./products.module.css";
import Image from "next/image";
import { Pagination, Search } from "@/components/common";
import Link from "next/link";
import { MdCreate, MdDelete } from "react-icons/md";

const Products = () => {
  return (
    <div className="bg-bgSoft p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a product..." />
        <Link
          href={"/dashboard/products/add"}
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
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Crated at</td>
              <td>Stock</td>
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
                  <span>iphone</span>
                </div>
              </td>
              <td>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, inventore.
              </td>
              <td>$123</td>
              <td>Oct 29 2023</td>
              <td>34</td>
              <td className="flex gap-3 mt-2">
                <Link href={"/dashboard/products/1"}>
                  <MdCreate color="green" />
                </Link>
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

export default Products;
