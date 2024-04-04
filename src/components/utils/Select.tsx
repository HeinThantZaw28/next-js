"use client";
import React from "react";
import Select, {
  CSSObjectWithLabel,
  GroupBase,
  OptionProps,
} from "react-select";

interface DropdownProps {
  options: Array<any>;
  value?: any;
  onChange?: any;
  isMulti?: boolean;
  field: any;
  placeholder?: string;
}

const Dropdown = ({
  options,
  value,
  onChange,
  isMulti = false,
  field,
  placeholder,
}: DropdownProps) => {
  return (
    <div className="w-full">
      <Select
        options={options}
        value={value}
        onChange={onChange}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: "#151c2c",
            padding: "15px",
            borderRadius: "6px",
            outline: "none",
            border: "none",
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: "#151c2c",
            height: "100%",
            color: "white",
            "&:hover": {
              backgroundColor: "#182237",
              color: "#b7bac1",
            },
          }),
          singleValue: (provided, state) => ({
            ...provided,
            color: "white",
          }),
        }}
        placeholder={placeholder}
        classNamePrefix="react-select"
        isMulti={isMulti}
        {...field}
      />
    </div>
  );
};

export default Dropdown;
