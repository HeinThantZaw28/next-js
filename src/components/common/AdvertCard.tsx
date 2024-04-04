import Image from "next/image";
import React from "react";

interface AdvertCardProps {
  src?: string;
  header: string;
  subHeader: string;
  note: string;
  desc: string;
  btnIcon: React.ReactNode;
  btnText: string;
}

const AdvertCard = ({
  src,
  header,
  subHeader,
  note,
  desc,
  btnIcon,
  btnText,
}: AdvertCardProps) => {
  return (
    <div className="relative bg-gradient-to-b from-[#182237] to-[#253352] py-5 px-2 rounded-md">
      {src && (
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%]">
          <Image
            src={"/astronaut.png"}
            alt="bgImage"
            fill
            className="object-cover opacity-[0.5]"
          />
        </div>
      )}
      <div className="flex flex-col gap-[24px]">
        <span className="font-bold text-[12px] text-soft">{header}</span>
        <h3 className="font-bold ">{subHeader}</h3>
        <span className="text-xs text-soft">{note}</span>
        <p className="text-soft text-md">{desc}</p>

        <button className="flex items-center gap-1 bg-indigo-400 text-white rounded-md p-1 w-max">
          {btnIcon}
          <span>{btnText}</span>
        </button>
      </div>
    </div>
  );
};

export default AdvertCard;
