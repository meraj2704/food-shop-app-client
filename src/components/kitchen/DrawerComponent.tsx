import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
interface DrawerCompProps {
  isOpen: boolean;
  onClose: () => void;
}

const DrawerComponent = ({ isOpen, onClose }: DrawerCompProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } bg-gray-800 bg-opacity-85 `}
    >
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute text-white top-10 left-80"
        >
          <TfiClose className="text-4xl hover:text-red-700" />
        </button>
      </div>
      <div className="fixed inset-y-0 right-0 w-[80%] bg-white pl-10 py-10 pr-16 shadow-lg">
        <div className="w-full">
          <input
            className={`w-full py-4 bg-transparent text-7xl font-extralight text-black px-1 outline-none placeholder-gray-500 border-b-[2px] 
               border-b-[#010202]
            `}
            type="text"
            placeholder="Search"
          />
        </div>
        <div>
          <p className="text-base font-normal text-[#646464] mt-20">Popular Services</p>
          <h1 className="text-3xl font-normal leading-9 text-[#444444] mt-10">Luxury Kitchen</h1>
          <h1 className="text-3xl font-normal leading-9 text-[#444444] mt-6">Sintered Counter Top</h1>
          <h1 className="text-3xl font-normal leading-9 text-[#444444] mt-6">Economy Kitchen</h1>
          <h1 className="text-3xl font-normal leading-9 text-[#444444] mt-6">Granite Counter Top</h1>
        </div>
      </div>
    </div>
  );
};

export default DrawerComponent;
