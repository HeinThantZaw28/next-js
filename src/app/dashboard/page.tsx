"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  MdPlayCircleFilled,
  MdReadMore,
  MdSupervisedUserCircle,
} from "react-icons/md";
import styles from "./dashboard.module.css";
import { AdvertCard, Chart } from "@/components/common";

const DashboardPage = () => {
  const [cards, setCards] = useState([1, 2, 3]);
  return (
    <div className="flex gap-4 w-full">
      {/* Content Container  */}
      <div className="flex flex-col w-[75%] gap-5">
        {/* Card Container  */}
        <div className="flex w-full gap-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-bgSoft w-[33%] rounded-md flex p-5 gap-5 hover:bg-slate-700"
            >
              <MdSupervisedUserCircle size={20} className="rounded-full" />
              <div className="flex flex-col gap-3">
                <p className="">Total Users</p>
                <p className="text-lg font-bold">10.928</p>
                <p className="">
                  <span className="text-green-400">12%</span> more than previous
                  week
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Latest Transaction  */}
        <div className="bg-bgSoft rounded-lg p-4 flex flex-col gap-4">
          <h3 className="text-xl text-soft">Latest Transactions</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <td>Name</td>
                <td>Status</td>
                <td>Date</td>
                <td>Amount</td>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((item, i) => (
                <tr key={i} className="">
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
                  <td>
                    <span className="p-1 bg-pending text-white rounded-md">
                      Pending
                    </span>
                  </td>
                  <td>14.02.2023</td>
                  <td>$3.200</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Weekly Recap  */}
        <Chart />
      </div>
      {/* TWO Cards  */}
      <div className="flex flex-col w-[25%]">
        <AdvertCard
          src="/astronaut.png"
          header={"🔥 Available Now"}
          subHeader={"How to use the new version of the admin dashboard?"}
          note={"Takes 4 minutes to learn"}
          desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              omnis tempora facere dignissimos accusantium excepturi quos quo
              commodi sed quae?`}
          btnIcon={<MdPlayCircleFilled />}
          btnText={"Watch"}
        />
        <AdvertCard
          header={"🚀 Coming Soon"}
          subHeader={
            "New server actions available, partial pre-rendering is coming up!"
          }
          note={"Boost your productivity"}
          desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              omnis tempora facere dignissimos accusantium excepturi quos quo
              commodi sed quae`}
          btnIcon={<MdReadMore />}
          btnText={"Learn"}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
