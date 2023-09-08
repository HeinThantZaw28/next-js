"use client";
import React, { Fragment, useState } from "react";
import { SearchManufacturerProps } from "./type";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({
  selected,
  setSelected,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        ); //return array

  return (
    <>
      <div className="search-manufacturer">
        <Combobox value={selected} onChange={setSelected}>
          <div className="relative w-full">
            <Combobox.Button className="absolute top-[14px]">
              <Image
                alt="manufacturer"
                src="/car-logo.svg"
                width={20}
                height={20}
                className="ml-4"
              />
            </Combobox.Button>
            <Combobox.Input
              displayValue={(manufacturer: string) => manufacturer}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Volkswagen"
              className="search-manufacturer__input"
            />
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options>
                {filteredManufacturers.length === 0 && query !== "" ? (
                  <div className="relative text-red-400 cursor-default select-none py-2 px-4">
                    Nothing found.
                  </div>
                ) : (
                  filteredManufacturers.map((item) => (
                    <Combobox.Option
                      key={item}
                      value={item}
                      className={({ active }) =>
                        `relative search-manufacturer__option ${
                          active
                            ? " text-white bg-primary-blue"
                            : "text-gray-900"
                        }`
                      }
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {item}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-teal-600"
                              }`}
                            ></span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    </>
  );
};

export default SearchManufacturer;
