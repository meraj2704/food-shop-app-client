import Image from "next/image";
import kitchen from "../../../public/assets/kitchen.jpg";

import React from "react";
import { ProductDetails } from "@/app/test/page";

interface ProductCartProps {
  details : ProductDetails;
}

const ProductCart = ({details}:ProductCartProps) => {
  return (
    <div className="group col-span-1 h-[20rem] overflow-hidden cursor-pointer relative  text-white">
      <Image
        src={details.imageUrl}
        alt="Cart"
        layout="fill"
        objectFit="cover"
        className="absolute w-full h-full object-cover top-0 left-0 transition-opacity duration-300 ease-out"
      />
      <div className="absolute w-full h-full bg-black opacity-0 z-10 transition-opacity duration-200 ease-out group-hover:opacity-60"></div>

      <div className="flex justify-center items-center absolute bottom-[-20px] left-[50%] translate-x-[calc(-50%)] transition-bottom duration-300 ease-out  z-30 group-hover:bottom-[40%] ">
        <h2 className="text-5xl font-bold z-6 whitespace-nowrap uppercase text-[#F5F5F5] group-hover:opacity-70">{details.name}</h2>
      </div>
    </div>
  );
};

export default ProductCart;
