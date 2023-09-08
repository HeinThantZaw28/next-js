"use client";
import React from "react";
import { ShowMoreProps } from "./type";
import { CustomBtn } from ".";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit)
  };
  return (
    <div className="flex flex-center gap-5 mt-10">
      {!isNext && (
        <CustomBtn
          title="Show More"
          type="button"
          className="bg-primary-blue rounded-full text-white"
          onClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
