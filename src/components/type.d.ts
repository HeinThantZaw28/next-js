import MouseEventHandler from "react";

export interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
  textStyles?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title: string;
  rightIcon?: string;
}

export interface footerLinksProps {
  title: string;
  links: {
    title: string;
    url: string;
  }[];
}

export interface OptionsProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionsProps[];

}

export interface SearchManufacturerProps {
  selected: string;
  setSelected: (manufacturer: string) => void;
}

export interface CarCardProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarDetailsProps {
  open: boolean;
  closeModal: () => void;
  car: CarCardProps;
}

export interface SearchParamsProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit:(newLimit:number)=>void;
}
