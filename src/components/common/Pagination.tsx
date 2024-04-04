import React from "react";

const Pagination = () => {
  return (
    <div className="flex p-5 justify-between items-center">
      <button
        className="p-2 rounded-md disabled:bg-gray-400 disabled:text-slate-600 bg-white text-black"
        disabled
      >
        Previous
      </button>
      <button className="bg-white text-black p-2 rounded-md">Next</button>
    </div>
  );
};

export default Pagination;
