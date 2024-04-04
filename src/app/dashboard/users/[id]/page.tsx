"use client";
import Image from "next/image";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { InitialValues } from "../add/page";
import { Dropdown, Input, Textarea } from "@/components/utils";
import { isActive } from "@/constant";
import Button from "@/components/utils/Button";

const SingleUserPage = () => {
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    phone: "",
    isAdmin: null,
    isActive: null,
    address: "",
  };
  const { register, handleSubmit, watch, control } = useForm<InitialValues>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<InitialValues> = (data) => {
    console.log("data", data);
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
        <p>hello</p>
      </div>
      {/* form container  */}
      <form
        className="w-[75%] bg-bgSoft flex flex-col p-3 gap-y-3 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="username">Username</label>
          <Input
            id="username"
            name="username"
            type="text"
            rest={{ ...register("username") }}
            placeholder={"hello"}
            className={"outline-none bg-bgDark p-5 rounded-md"}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            name="email"
            type="email"
            rest={{ ...register("email") }}
            placeholder={"hello@gmail.com"}
            className={"outline-none bg-bgDark p-5 rounded-md"}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            name="password"
            type="password"
            rest={{ ...register("password") }}
            placeholder={"type your password"}
            className={"outline-none bg-bgDark p-5 rounded-md"}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="phone">Phone</label>
          <Input
            id="phone"
            name="phone"
            type="text"
            rest={{ ...register("phone") }}
            placeholder={"2345678"}
            className={"outline-none bg-bgDark p-5 rounded-md"}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="address">Address</label>
          <Textarea
            name={"address"}
            rest={{ ...register("address") }}
            cols={12}
            rows={3}
            className={
              "w-full outline-none bg-bgDark rounded-md p-5 text-slate-400"
            }
            placeholder="address"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="isAdmin">Is Admin?</label>

          <Controller
            name="isAdmin"
            control={control}
            render={(field) => (
              <Dropdown {...field} options={isActive} placeholder="No" />
            )}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="isActive">Is Active?</label>

          <Controller
            name="isActive"
            control={control}
            render={(field) => (
              <Dropdown {...field} options={isActive} placeholder="No" />
            )}
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
