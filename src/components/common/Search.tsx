"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

interface SearchProps {
  placeholder: string;
}

const Search = ({ placeholder }: SearchProps) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const handleSearch = useDebouncedCallback((e: any) => {
    params.set("page", "1");
    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathName}?${params}`);
  }, 300);

  return (
    <div className="flex gap-2 bg-slate-500 rounded-md px-2 items-center py-1">
      <button onClick={handleSearch}>
        <MdSearch />
      </button>
      <input
        type="text"
        placeholder={placeholder}
        className="outline-none bg-inherit text-textWhite"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
