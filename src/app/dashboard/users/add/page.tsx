"use client";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Dropdown, Input, Textarea } from "@/components/utils";
import Button from "@/components/utils/Button";
import { isActive, isAdmin } from "@/constant";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
export interface UserInitialValues {
  username: string;
  email: string;
  password: string;
  phone: string;
  isAdmin: any;
  isActive: any;
  address: string;
}

const AddUser = () => {
  const router = useRouter();
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    phone: "",
    isAdmin: null,
    isActive: null,
    address: "",
  };
  const { register, handleSubmit, watch, control } = useForm<UserInitialValues>(
    {
      defaultValues,
    }
  );

  const onSubmit: SubmitHandler<UserInitialValues> = async (data) => {
    const res = await axios.post("/api/user", data);
    console.log(res);
    router.push("/dashboard/users");
  };

  return (
    <div className="bg-bgSoft rounded-lg p-4 w-full">
      <form
        action=""
        className="w-full flex flex-wrap justify-between gap-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          rest={{ ...register("username") }}
          type="text"
          name="username"
          className="w-[45%] outline-none bg-bgDark p-5 rounded-md"
          placeholder={"username"}
        />
        <Input
          rest={{ ...register("email") }}
          type="text"
          name="email"
          className="w-[45%] outline-none bg-bgDark p-5 rounded-md"
          placeholder={"email"}
        />
        <Input
          rest={{ ...register("password") }}
          type="password"
          name="password"
          className="w-[45%] outline-none bg-bgDark p-5 rounded-md"
          placeholder={"password"}
        />
        <Input
          rest={{ ...register("phone") }}
          type="text"
          name="phone"
          className="w-[45%] outline-none bg-bgDark p-5 rounded-md"
          placeholder={"phone"}
        />
        <div className="w-[45%]">
          <Controller
            name="isAdmin"
            control={control}
            render={(field) => (
              <Dropdown {...field} options={isAdmin} placeholder="Is Admin?" />
            )}
          />
        </div>
        <div className="w-[45%]">
          <Controller
            name="isActive"
            control={control}
            render={(field) => (
              <Dropdown
                {...field}
                options={isActive}
                placeholder="Is Active?"
              />
            )}
          />
        </div>
        <Textarea
          name={"address"}
          cols={12}
          rows={6}
          className={
            "w-full outline-none bg-bgDark rounded-md p-5 text-slate-400"
          }
          placeholder="address"
          rest={{ ...register("address") }}
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

export default AddUser;
