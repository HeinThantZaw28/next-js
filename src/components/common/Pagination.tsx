"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Pagination = ({ count }: any) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();
  const params = new URLSearchParams(searchParams);

  const page = searchParams.get("page") || 1;
  const itemPerPage = 3;

  const hasPrev = itemPerPage * (Number(page) - 1) > 0;
  const hasNext = itemPerPage * (Number(page) - 1) + itemPerPage < count;

  const handleChangePage = (type: string) => {
    type === "prev"
      ? params.set("page", String(Number(page) - 1))
      : params.set("page", String(Number(page) + 1));
    replace(`${pathName}?${params}`);
  };

  return (
    <div className="flex p-5 justify-between items-center">
      <button
        className="p-2 rounded-md disabled:bg-gray-400 disabled:text-slate-600 bg-white text-black"
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className="p-2 rounded-md disabled:bg-gray-400 disabled:text-slate-600 bg-white text-black"
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
