"use client";
import React from "react";
import Countdown from "react-countdown";

const CountDown = () => {
  const currentDate = new Date();
  const threeDaysFromNow = new Date(currentDate);
  const discountDate =threeDaysFromNow.setDate(currentDate.getDate() + 3);

  return (
    <>
      <Countdown
        className="font-bold text-5xl text-yellow-400"
        date={discountDate}
      />
    </>
  );
};

export default CountDown;
