import { Footer, Navbar, Sidebar } from "@/components/common";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-[100%]">
      <div className="w-[20%] bg-bgSoft p-10 h-screen fixed">
        <Sidebar />
      </div>
      <div className="w-[80%] p-20 ml-[20%]">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
