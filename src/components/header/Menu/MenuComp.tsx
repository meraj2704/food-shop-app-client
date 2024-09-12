import HeaderTag from "@/components/button/HeaderTag";
import React from "react";
import MenuBar from "./MenuBar";

const MenuComp = () => {
  return (
    <div className="container mx-auto">
      <div className=" flex justify-start items-start">
        <HeaderTag header="Menu" />
      </div>
      <div className="grid grid-cols-6  ">
        <div className="col-span-2 h-full">
          <MenuBar />
        </div>
        <div className="col-span-4"></div>
      </div>
    </div>
  );
};

export default MenuComp;
