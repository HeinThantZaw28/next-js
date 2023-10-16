import { tableData } from "@/constant";
import React from "react";

const OrdersPage = () => {
  return (
    <div className="p-4 lg:p-10 xl:p-20">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order Id</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr
              key={data.orderId}
              className="text-left text-sm md:text-base odd:bg-gray-100 first:bg-red-200"
            >
              <th className="hidden md:block py-6 px-1">{data.orderId}</th>
              <th className="py-6 px-1">{data.date}</th>
              <th className="py-6 px-1">${data.price}</th>
              <th className="hidden md:block py-6 px-1">{data.products}</th>
              <th className={`${data.status !== "Delivered"? 'text-green-400':'text-red-500'}py-6 px-1`}>{data.status}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;




