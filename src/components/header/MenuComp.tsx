import React from "react";

const MenuComp = () => {
  return (
    <div className="container mx-auto">
      <div className="w-20  bg-[#FDE4D0] py-2 px-4 rounded-3xl mb-10">
        <p className="text-base text-primary">Menu</p>
      </div>
      <div className="grid grid-cols-6">
        <div className="col-span-2"></div>
        <div className="col-span-4"></div>
      </div>
    </div>
  );
};

export default MenuComp;
