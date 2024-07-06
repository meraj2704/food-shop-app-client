import Image from "next/image";
import kitchen from "../../../public/assets/kitchen.jpg";

import React from "react";
import { ProductDetails } from "@/app/test/page";

interface ProductCartProps {
  details : ProductDetails;
}

const ProductCart = ({details}:ProductCartProps) => {
  return (
    <div className="card w-[34rem] h-[20rem] rounded-[2px] overflow-hidden cursor-pointer relative shadow-md text-white">
      <Image
        src={kitchen}
        alt="Cart"
        layout="fill"
        objectFit="cover"
        className="absolute w-full h-full object-cover top-0 left-0 transition-opacity duration-300 ease-out"
      />
      <div className="absolute w-full h-full bg-black opacity-0 z-10 bg-div transition-opacity duration-200 ease-out"></div>

      <div className="flex justify-center items-center card-name absolute bottom-[-20px] left-[50%] translate-x-[calc(-50%)] transition-bottom duration-300 ease-out  z-30">
        <h2 className="text-5xl font-semibold z-6 whitespace-nowrap uppercase">{details.name}</h2>
      </div>
    </div>
  );
};

export default ProductCart;
