import React from "react";
import { MdSearch } from "react-icons/md";

interface SearchProps {
  placeholder: string;
}

const Search = ({ placeholder }: SearchProps) => {
  return (
    <div className="flex gap-2 bg-slate-500 rounded-md px-2 items-center py-1">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="outline-none bg-inherit text-textWhite"
      />
    </div>
  );
};

export default Search;
