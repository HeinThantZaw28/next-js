"use client";
import React, { FormEvent, useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

export interface SearchButtonProps {
  otherClasses: string;
}

const SearchButton = ({ otherClasses }: SearchButtonProps) => {
  return (
    <>
      <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
          src={"/magnifying-glass.svg"}
          alt="magnifying glass"
          width={40}
          height={40}
          className="object-contain"
        />
      </button>
    </>
  );
};

const SearchBar = ({ setManufacturer, setModel }:any) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchManufacturer === "" && searchModel === "") {
      return alert("You are not allowed to search with empty data!");
    }
    setModel(searchModel);
    setManufacturer(searchManufacturer);
  };

  // #no longer need this function in client side rendering, only need this in server side rendring
  // const updateSearchParams = (model: string, manufacturer: string) => {
  //   const searchParams = new URLSearchParams(window.location.search);
  //   if (model) {
  //     searchParams.set("model", model);
  //   } else {
  //     searchParams.delete("model");
  //   }
  //   if (manufacturer) {
  //     searchParams.set("manufacturer", manufacturer);
  //   } else {
  //     searchParams.delete("manufacturer");
  //   }
  //   const newpathName = `${
  //     window.location.pathname
  //   }?${searchParams.toString()}`;
  //   router.push(newpathName);
  // };
  
  return (
    <>
      <form className="searchbar" onSubmit={handleSubmit}>
        <div className="searchbar__item">
          <SearchManufacturer
            selected={searchManufacturer}
            setSelected={setSearchManufacturer}
          />
          <SearchButton otherClasses="sm:hidden" />
        </div>
        <div className="searchbar__item">
          <Image
            alt="car model"
            src={"/model-icon.png"}
            width={25}
            height={25}
            className="absolute w-[20px] h-[20px] ml-4"
          />
          <input
            type="text"
            className="searchbar__input"
            placeholder="Tiguan"
            value={searchModel}
            onChange={(e) => setSearchModel(e.target.value)}
          />
          <SearchButton otherClasses="sm:hidden" />
        </div>
        <SearchButton otherClasses="max-sm:hidden" />
      </form>
    </>
  );
};

export default SearchBar;
