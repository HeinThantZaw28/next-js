import React from "react";
import styles from "./products.module.css";
import Image from "next/image";
import { Pagination, Search } from "@/components/common";
import Link from "next/link";
import { MdCreate, MdDelete } from "react-icons/md";
import { fetchProducts } from "../../../../service/fetchData/fetchProducts";

interface ProductPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Products = async ({ searchParams }: ProductPageProps) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || "1";
  const { count, products } = await fetchProducts(q, page);
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
            {products?.map((product) => (
              <tr className="" key={product?.id}>
                <td>
                  <div className="flex gap-[10px] items-center">
                    <Image
                      width={40}
                      height={40}
                      src={product?.img || "/profile.png"}
                      alt="profile"
                      className="object-cover rounded-full"
                    />
                    <span>{product?.title}</span>
                  </div>
                </td>
                <td>{product?.desc}</td>
                <td>${product?.price}</td>
                <td>{product?.createdAt?.toString().slice(4, 16)}</td>
                <td>{product?.stock}</td>
                <td className="flex gap-3 mt-2">
                  <Link href={`/dashboard/products/${product?.id}`}>
                    <MdCreate color="green" />
                  </Link>
                  <button>
                    <MdDelete color="red" />
                  </button>
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

export default Products;
