"use client";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Dropdown, Input, Textarea } from "@/components/utils";
import Button from "@/components/utils/Button";

export interface InitialValues {
  title: string;
  category: string;
  price: string;
  stock: string;
  color: string;
  size: string;
  desc: string;
}

const AddProduct = () => {
  const items = [
    { id: 1, label: "Apple", value: "apple" },
    { id: 2, label: "Banana", value: "banana" },
    { id: 3, label: "Orange", value: "orange" },
    { id: 4, label: "Lemon", value: "lemon" },
  ];
  const defaultValues = {
    title: "",
    category: "",
    price: "",
    stock: "",
    color: "",
    size: "",
    desc: "",
  };
  const { register, handleSubmit, watch, control } = useForm<InitialValues>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<InitialValues> = (data) => {
    console.log("data", data);
  };

  return (
    <div className="bg-bgSoft rounded-lg p-4 w-full">
      <form
        action=""
        className="w-full flex flex-wrap justify-between gap-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          rest={{ ...register("title") }}
          type="text"
          name="title"
          className="w-[45%] outline-none bg-bgDark p-5 rounded-md"
          placeholder={"title"}
        />
        <div className="w-[45%]">
          <Controller
            name="category"
            control={control}
            render={(field) => (
              <Dropdown
                {...field}
                options={items}
                placeholder="Choose a category"
              />
            )}
          />
        </div>
        <Input
          {...register("price")}
          type="number"
          name="price"
          className="w-[45%] outline-none bg-bgDark p-5 rounded-md"
          placeholder={"price"}
        />
        <Input
          {...register("stock")}
          type="number"
          name="stock"
          className="w-[45%] outline-none bg-bgDark p-5 rounded-md"
          placeholder={"stock"}
        />
        <Input
          {...register("color")}
          type="text"
          name="color"
          className="w-[45%] outline-none bg-bgDark p-5 rounded-md"
          placeholder={"color"}
        />
        <Input
          {...register("size")}
          type="number"
          name="size"
          className="w-[45%] outline-none bg-bgDark p-5 rounded-md"
          placeholder={"size"}
        />
        <Textarea
          name={"desc"}
          rest={{ ...register("desc") }}
          cols={12}
          rows={6}
          className={
            "w-full outline-none bg-bgDark rounded-md p-5 text-slate-400"
          }
          placeholder="desc"
        />

        <Button
          type={"submit"}
          className={"bg-teal-700 text-soft px-4 py-2 rounded-md w-full"}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
