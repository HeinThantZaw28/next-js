"use client";
import React, { Fragment } from "react";
import { CarDetailsProps } from "./type";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { generateCarImageUrl } from "@/utils";

const CarDetails = ({ open, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full justify-center items-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="p-6 relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 p-2 z-10 w-fit bg-primary-blue-100 rounded-full"
                  >
                    <Image
                      src={"/close.svg"}
                      alt="close btn"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex flex-1 flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={generateCarImageUrl(car)}
                        alt="car"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 bg-primary-blue-100 rounded-lg w-full h-24 relative">
                        <Image
                          src={generateCarImageUrl(car, "29")}
                          alt="car"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 bg-primary-blue-100 rounded-lg w-full h-24 relative">
                        <Image
                          src={generateCarImageUrl(car, "33")}
                          alt="car"
                          fill
                          priority
                          className=" my-6 scale-125"
                        />
                      </div>
                      <div className="flex-1 bg-primary-blue-100 rounded-lg w-full h-24 relative">
                        <Image
                          src={generateCarImageUrl(car, "13")}
                          alt="car"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex-col flex gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {car.make} {car.model}
                    </h2>
                    <div className="flex flex-wrap mt-3 gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between gap-5 w-full text-right"
                          key={key}
                        >
                          <h4 className="text-gray capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="text-black-100 font-semibold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
