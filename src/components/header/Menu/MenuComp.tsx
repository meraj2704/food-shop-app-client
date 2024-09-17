import HeaderTag from "@/components/button/HeaderTag";
import React from "react";
import MenuBar from "./MenuBar";
import { MenuCarousel } from "./MenuCarousel";

const MenuComp = () => {
  return (
    <div className="container mx-auto">
      <div className=" flex justify-start items-start">
        <HeaderTag header="Menu" />
      </div>
      <div className="grid grid-cols-4 gap-10">
        <div className="col-span-1 h-full">
          <MenuBar />
        </div>
        <div className="col-span-3">
          <MenuCarousel/>
        </div>
      </div>
    </div>
  );
};

export default MenuComp;
