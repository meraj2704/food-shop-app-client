"use client";

import { useTheme } from "next-themes";
import React from "react";
import logo from "../../../public/assets/logo.png";
import logoLight from "../../../public/assets/logoLight.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { MdDashboard } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuGroup } from "react-icons/lu";
import Link from "next/link";

const AdminSideBar: React.FC = () => {
  const pathName = usePathname();

  const { theme } = useTheme();

  console.log("Current pathname:", pathName);
  console.log("Current theme:", theme);

  return (
    <div
      className={`w-full h-full flex flex-col border-r-[1px] ${
        theme === "dark" ? "border-r-gray-800" : "border-r-gray-200"
      }`}
    >
      <div
        className={`h-20 flex justify-center items-center border-dashed border-b-[1px] ${
          theme === "dark" ? "border-b-gray-800" : "border-b-gray-200"
        }`}
      >
        {theme === "dark" ? (
          <Image src={logoLight} alt="logo" width={100} height={100} />
        ) : (
          <Image src={logo} alt="logo" width={100} height={100} />
        )}
      </div>
      <div className="grow p-5 flex flex-col gap-4">
        <Link href={`/admin/dashboard`}>
          {" "}
          <div
            className={`px-4 py-2 flex items-center gap-4 rounded-lg ${
              pathName === "/admin/dashboard" ? "bg-bgGradient" : ""
            }`}
          >
            <MdDashboard /> <p>Dashboard</p>
          </div>
        </Link>
        <Link href={`/admin/foods`}>
          <div
            className={`px-4 py-2 flex items-center gap-4 rounded-lg ${
              pathName === "/admin/foods" ? "bg-bgGradient" : ""
            }`}
          >
            <IoFastFoodOutline /> <p>Foods</p>
          </div>
        </Link>
        <Link href={`/admin/categories`}>
          <div
            className={`px-4 py-2 flex items-center gap-4 rounded-lg ${
              pathName === "/admin/categories" ? "bg-bgGradient" : ""
            }`}
          >
            <LuGroup /> <p>Categories</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminSideBar;
