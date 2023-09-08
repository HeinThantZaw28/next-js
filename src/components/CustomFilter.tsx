"use client";
import React, { Fragment, useState } from "react";
import { CustomFilterProps } from "./type";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";

const CustomFilter = ({ title, options, setFilter }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);

  // this isn't needed for client side rendering
  // const router = useRouter();
  // const handleUpdateParams = (e: { title: string; value: string }) => {
  //   const newpathName = updateSearchParams(title, e.value.toLowerCase());
  //   router.push(newpathName);
  // };
  
  return (
    <>
      <div className="w-fit">
        <Listbox
          value={selected}
          onChange={(e) => {
            setSelected(e);
            setFilter(e.value); 
          }}
        >
          <div className="relative w-fit z-10">
            <Listbox.Button className={"custom-filter__btn"}>
              <span className="block truncate">{selected.title}</span>
              <Image
                alt="chevron up down"
                src={"/chevron-up-down.svg"}
                width={20}
                height={20}
                className="ml-4 object-contain"
              />
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((option, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {option.title}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </>
  );
};

export default CustomFilter;
