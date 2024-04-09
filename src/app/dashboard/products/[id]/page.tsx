"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Dropdown, Input, Textarea } from "@/components/utils";
import { isActive } from "@/constant";
import Button from "@/components/utils/Button";
import { InitialValues } from "../add/page";
import { useRouter } from "next/navigation";
import axios, { HttpStatusCode } from "axios";

const SingleUserPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const router = useRouter();
  const [productDetails, setProductDetails] = useState<any>();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const res = await axios.get(`/api/product/${id}`);
      if (res?.data?.status === HttpStatusCode.Found)
        setProductDetails(res?.data?.product);
    };
    fetchSingleProduct();
  }, [id]);

  const items = [
    { id: 1, label: "Apple", value: "apple" },
    { id: 2, label: "Banana", value: "banana" },
    { id: 3, label: "Orange", value: "orange" },
    { id: 4, label: "Lemon", value: "lemon" },
  ];
  const defaultValues = {
    title: "",
    category: null,
    price: "",
    stock: "",
    color: "",
    size: "",
    desc: "",
  };
  const { register, handleSubmit, watch, control, reset } =
    useForm<InitialValues>({
      defaultValues,
    });

  const findCategory = (category: string) => {
    return items.find((item) => item.value === category);
  };

  console.log("productDetails", productDetails);

  useEffect(() => {
    reset({
      title: productDetails?.title,
      category: findCategory(productDetails?.category),
      price: productDetails?.price,
      stock: productDetails?.stock,
      color: productDetails?.color,
      size: productDetails?.size,
      desc: productDetails?.desc,
    });
  }, [productDetails]);

  const onSubmit: SubmitHandler<InitialValues> = async (data) => {
    const res = await axios.patch(`/api/product/${id}`, data);
    console.log("data", res);
    res?.status === HttpStatusCode?.Ok && router.replace("/dashboard/products");
  };

  return (
    <div className="w-full rounded-lg p-4 flex justify-between">
      {/* img container  */}
      <div className="w-[20%] bg-bgSoft rounded-lg flex flex-col p-3 gap-2 h-fit">
        <Image
          src={"/profile.png"}
          alt="profile img"
          width={400}
          height={40}
          className="object-contain relative bg-slate-300 rounded-md"
        />
        <p>{productDetails?.title}</p>
      </div>
      {/* form container  */}
      <form
        className="w-[75%] bg-bgSoft flex flex-col p-3 gap-y-3 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="title">Title</label>
          <Input
            id="title"
            name="title"
            type="text"
            rest={{ ...register("title") }}
            placeholder={"hello"}
            className={"outline-none bg-bgDark p-5 rounded-md"}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="price">Price</label>
          <Input
            id="price"
            name="price"
            type="number"
            rest={{ ...register("price") }}
            placeholder={"2200"}
            className={"outline-none bg-bgDark p-5 rounded-md"}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="stock">Stock</label>
          <Input
            id="stock"
            name="stock"
            type="number"
            rest={{ ...register("stock") }}
            placeholder={"29"}
            className={"outline-none bg-bgDark p-5 rounded-md"}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="color">Color</label>
          <Input
            id="color"
            name="color"
            type="text"
            rest={{ ...register("color") }}
            placeholder={"yellow"}
            className={"outline-none bg-bgDark p-5 rounded-md"}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="size">Size</label>
          <Input
            id="size"
            name="size"
            type="number"
            rest={{ ...register("size") }}
            placeholder={"21"}
            className={"outline-none bg-bgDark p-5 rounded-md"}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="cat">Category</label>
          <Controller
            name="category"
            control={control}
            render={(field) => (
              <Dropdown {...field} options={items} placeholder="Kitchen" />
            )}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="desc">Description</label>
          <Textarea
            name={"desc"}
            rest={{ ...register("desc") }}
            cols={12}
            rows={3}
            className={
              "w-full outline-none bg-bgDark rounded-md p-5 text-slate-400"
            }
            placeholder="description"
          />
        </div>
        <Button
          className="bg-teal-700 text-soft px-4 py-2 rounded-md w-full"
          type="submit"
        >
          Update
        </Button>
      </form>
    </div>
  );
};

export default SingleUserPage;
