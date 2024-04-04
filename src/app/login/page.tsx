"use client";
import { Input } from "@/components/utils";
import Button from "@/components/utils/Button";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
interface LoginProps {
  username: string;
  password: string;
}
const LoginPage = () => {
  const defaultValues = {
    username: "",
    password: "",
  };

  const { register, handleSubmit, watch, control } = useForm<LoginProps>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<LoginProps> = (data) => {
    console.log("data", data);
  };
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <form
        action=""
        className="bg-bgSoft flex flex-col p-5 py-10 gap-y-5 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-soft font-bold">Login</h1>
        <Input
          id="username"
          name="username"
          type="text"
          rest={{ ...register("username") }}
          placeholder={"username"}
          className={"outline-none bg-bgDark p-5 rounded-md"}
        />
        <Input
          id="password"
          name="password"
          type="password"
          rest={{ ...register("password") }}
          placeholder={"password"}
          className={"outline-none bg-bgDark p-5 rounded-md"}
        />
        <Button
          className="bg-teal-700 text-soft px-4 py-2 rounded-md w-full"
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
