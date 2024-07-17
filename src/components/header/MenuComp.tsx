import React from "react";
import HeaderTag from "../button/HeaderTag";

const MenuComp = () => {
  return (
    <div className="container mx-auto">
      <div className=" flex justify-start items-start">
        {" "}
        <HeaderTag header="Menu" />
      </div>
      <div className="grid grid-cols-6">
        <div className="col-span-2"></div>
        <div className="col-span-4"></div>
      </div>
    </div>
  );
};

export default MenuComp;
