"use client";

import { useTheme } from "next-themes";
import React, { useState } from "react";
import logo from "../../../public/assets/logo.png";
import logoLight from "../../../public/assets/logoLight.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { MdDashboard } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuGroup } from "react-icons/lu";
import Link from "next/link";
import {
  FaAddressBook,
  FaAddressCard,
  FaAllergies,
  FaList,
  FaNetworkWired,
  FaPlus,
  FaSellcast,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const AdminSideBar: React.FC = () => {
  const pathName = usePathname();
  const { theme } = useTheme();
  const [isOpenFoodMenu, setIsOpenFoodMenu] = useState(false);
  const [isOpenCategoriesMenu, setIsOpenCategoriesMenu] = useState(false);

  return (
    <div
      className={`w-full h-full flex flex-col border-r-[1px] ${
        theme === "dark" ? "border-r-gray-800" : "border-r-gray-200"
      }`}
    >
      <Link href={'/'}>
        <div
          className={`h-20 flex justify-center items-center border-dashed border-b-[1px] ${
            theme === "dark" ? "border-b-gray-800" : "border-b-gray-200"
          }`}
        >
          {theme === "dark" ? (
            <Image src={logoLight} alt="logo" width={100} height={100} className="object-cover" />
          ) : (
            <Image src={logo} alt="logo" width={100} height={100} className="object-cover"/>
          )}
        </div>
      </Link>
      <div className="grow p-5 flex flex-col gap-4">
        <Link href={`/admin/dashboard`}>
          {" "}
          <div
            className={`px-4 py-2 flex items-center gap-4 rounded-lg ${
              pathName === "/admin/dashboard"
                ? "bg-bgGradient transition duration-200"
                : ""
            }`}
          >
            <MdDashboard /> <p>Dashboard</p>
          </div>
        </Link>

        <div
          onClick={() => setIsOpenFoodMenu(!isOpenFoodMenu)}
          className={`px-4 py-2 flex justify-between items-center gap-4 rounded-lg ${
            isOpenFoodMenu ? "bg-bgGradientFinish" : ""
          }`}
        >
          <div className="flex gap-4 items-center">
            <IoFastFoodOutline /> <p>Foods</p>
          </div>
          <IoIosArrowDown
            className={`${
              isOpenFoodMenu
                ? "rotate-180 transition duration-200"
                : "transition duration-200"
            }`}
          />
        </div>

        {isOpenFoodMenu && (
          <div className="pl-5 flex flex-col space-y-3">
            <Link href={`/admin/food-list`}>
              <div
                className={`px-4 py-2 flex items-center gap-4 rounded-lg ${
                  pathName === "/admin/food-list" ? "bg-bgGradient" : ""
                }`}
              >
                <FaList /> <p> Food list</p>
              </div>
            </Link>
            <Link href={`/admin/add-food`}>
              <div
                className={`px-4 py-2 flex items-center gap-4 rounded-lg ${
                  pathName === "/admin/add-food" ? "bg-bgGradient" : ""
                }`}
              >
                <FaPlus /> <p>Add Foods</p>
              </div>
            </Link>
            <Link href={`/admin/most-sell-food`}>
              <div
                className={`px-4 py-2 flex items-center gap-4 rounded-lg ${
                  pathName === "/admin/most-sell-food" ? "bg-bgGradient" : ""
                }`}
              >
                <IoFastFoodOutline /> <p>Most sell Foods</p>
              </div>
            </Link>
          </div>
        )}
        <div
          onClick={() => setIsOpenCategoriesMenu(!isOpenCategoriesMenu)}
          className={`px-4 py-2 flex justify-between items-center gap-4 rounded-lg ${
            isOpenCategoriesMenu ? "bg-bgGradientFinish" : ""
          }`}
        >
          <div className="flex gap-4 items-center">
            <LuGroup /> <p>Categories</p>
          </div>
          <IoIosArrowDown
            className={`${
              isOpenCategoriesMenu
                ? "rotate-180 transition duration-200"
                : "transition duration-200"
            }`}
          />
        </div>

        {isOpenCategoriesMenu && (
          <div className="pl-5 flex flex-col space-y-3 ">
            <Link href={`/admin/all-categories`}>
              <div
                className={`px-4 py-2 flex items-center gap-4 rounded-lg ${
                  pathName === "/admin/all-categories" ? "bg-bgGradient" : ""
                }`}
              >
                <LuGroup /> <p> All Categories</p>
              </div>
            </Link>
            <Link href={`/admin/add-categories`}>
              <div
                className={`px-4 py-2 flex items-center gap-4 rounded-lg ${
                  pathName === "/admin/add-categories" ? "bg-bgGradient" : ""
                }`}
              >
                <FaPlus /> <p>Add Categories</p>
              </div>
            </Link>
          </div>
        )}
        <Link href={`/admin/users`}>
          {" "}
          <div
            className={`px-4 py-2 flex items-center gap-4 rounded-lg ${
              pathName === "/admin/users"
                ? "bg-bgGradient transition duration-200"
                : ""
            }`}
          >
            <FaUsers /> <p>Users</p>
          </div>
        </Link>
        <Link href={`/admin/employees`}>
          {" "}
          <div
            className={`px-4 py-2 flex items-center gap-4 rounded-lg ${
              pathName === "/admin/employees"
                ? "bg-bgGradient transition duration-200"
                : ""
            }`}
          >
            <FaNetworkWired /> <p>Employees</p>
          </div>
        </Link>
        <Link href={`/admin/sells`}>
          {" "}
          <div
            className={`px-4 py-2 flex items-center gap-4 rounded-lg ${
              pathName === "/admin/sells"
                ? "bg-bgGradient transition duration-200"
                : ""
            }`}
          >
            <FaSellcast /> <p>Sells</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminSideBar;
