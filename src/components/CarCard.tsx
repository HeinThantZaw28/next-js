"use client";
import React, { useState } from "react";
import { CarCardProps } from "./type";
import Image from "next/image";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import { CarDetails, CustomBtn } from ".";

interface CarProps {
  car: CarCardProps;
}

const CarCard = ({ car }: CarProps) => {
  const carRent = calculateCarRent(car.city_mpg, car.year);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="car-card group">
        <div className="car-card content">
          <h2 className="car-card__content-title">
            {car.make} {car.model}
          </h2>
        </div>
        <p className="flex mt-6 text-[32px] font-extrabold">
          <span className="self-start text-[14px] font-semibold">$</span>
          {carRent}
          <span className="self-end text-[14px] font-semibold">/day</span>
        </p>
        <div className="relative w-full h-40 my-3">
          <Image
            src={generateCarImageUrl(car)}
            alt="car"
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="relative flex w-full mt-2">
          <div className="flex w-full justify-between text-gray group-hover:invisible">
            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                src={"/steering-wheel.svg"}
                alt="steering wheel"
                width={20}
                height={20}
              />
              <p className="text-[14px]">
                {car.transmission === "a" ? "Automatic" : "Manual"}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src={"/tire.svg"} alt="tire" width={20} height={20} />
              <p className="text-[14px]">{car.drive.toUpperCase()}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src={"/gas.svg"} alt="gas" width={20} height={20} />
              <p className="text-[14px]">{car.city_mpg}MPG</p>
            </div>
          </div>
          <div className="car-card__btn-container">
            <CustomBtn
              title="View More"
              type="button"
              className="w-full py-[16px] rounded-full bg-primary-blue"
              textStyles="text-white text-[14px] leading-[17px] font-bold"
              rightIcon="/right-arrow.svg"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
        <CarDetails
          open={isOpen}
          closeModal={() => setIsOpen(false)}
          car={car}
        />
      </div>
    </>
  );
};

export default CarCard;
