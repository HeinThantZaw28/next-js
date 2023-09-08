import { Metadata } from "next";
import React from "react";
import SearchPage from "./SearchPage";

export const metadata: Metadata = {
  title: "Search -Next Js 13.4 Image Gallery",
};

const page = () => {
  return <>
    <SearchPage/>
  </>;
};

export default page;
