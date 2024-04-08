"use client";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Dropdown, Input, Textarea } from "@/components/utils";
import Button from "@/components/utils/Button";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";

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
  const router = useRouter();
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

  const onSubmit: SubmitHandler<InitialValues> = async (data) => {
    await axios.post("/api/product", data);
    router.replace("/dashboard/products");
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
          rest={{ ...register("price") }}
          type="text"
          name="price"
          className="w-[45%] outline-none bg-bgDark p-5 rounded-md"
          placeholder={"price"}
        />
        <Input
          rest={{ ...register("stock") }}
          type="text"
          name="stock"
          className="w-[45%] outline-none bg-bgDark p-5 rounded-md"
          placeholder={"stock"}
        />
        <Input
          rest={{ ...register("color") }}
          type="text"
          name="color"
          className="w-[45%] outline-none bg-bgDark p-5 rounded-md"
          placeholder={"color"}
        />
        <Input
          rest={{ ...register("size") }}
          type="text"
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
