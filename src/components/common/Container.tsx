"use client";
import React from "react";
import { Footer, Navbar, Sidebar } from ".";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="flex w-[100%]">{children}</div>;
};

export default Container;
