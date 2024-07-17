'use client'
import { useTheme } from "next-themes";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";

const AdminHeader = () => {
    const {theme} = useTheme();
  return (
    <div className={`h-full border-b-[1px]  ${theme === 'dark' ? 'border-b-gray-800': 'border-b-gray-200'} flex justify-between items-center px-10`}>
      <div className="relative">
        <input
          type="text"
          className="w-56 border-[1px] border-gray-200 rounded-full py-2 px-4 pl-10 focus:outline-none focus:border-primary text-textColor text-xs"
          placeholder="Search items"
        />
        <div className="absolute top-2 left-5">
          <CiSearch />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex justify-center items-center">
          <div className="p-2 bg-gray-300 rounded-full ">
            <IoIosNotifications className="text-textColor text-xl" />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="h-10 w-10 bg-green-700 rounded-full flex justify-center items-center">
            <p>Img</p>
          </div>
          <div>
            <p>Name</p>
            <p>Roll</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
