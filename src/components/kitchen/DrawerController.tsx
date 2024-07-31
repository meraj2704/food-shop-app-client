"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import DrawerComponent from "./DrawerComponent";

const DrawerController = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIsOpenDrawer(true)}
        className="flex items-center gap-3 text-white  font-bold hover:text-red-700 cursor-pointer"
      >
        <p className="text-base">Search</p> <IoSearch className="text-xl"/>
      </div>
      <DrawerComponent
        isOpen={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
      />
    </div>
  );
};

export default DrawerController;
