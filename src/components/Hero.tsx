"use client";
import React from "react";
import { CustomBtn } from ".";
import Image from "next/image";

const Hero = () => {
  const handleClick = () => {};
  return (
    <>
      <div className="hero">
        <div className="flex-1 pt-36 padding-x">
          <h1 className="hero__title">
            Find, Book, rent a car — quickly and super easy!
          </h1>
          <p className="hero__subtitle">
            Streamline your car rental experience with our effortless booking
            process.
          </p>
          <CustomBtn
            title="Explore Cars"
            className="bg-primary-blue text-white rounded-full mt-10"
            disabled={false}
            onClick={handleClick}
            type="button"
          />
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <Image alt="hero" src="/hero.png" fill className="object-contain" />
          </div>
          <div className="hero__image-overlay" />
        </div>
      </div>
    </>
  );
};

export default Hero;
