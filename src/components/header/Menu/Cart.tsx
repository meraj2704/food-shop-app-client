import Image from "next/image";
import React from "react";
interface CartI {
  food: any;
}
const Cart = ({ food }: CartI) => {
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-[500px] rounded-md">
        <Image
          src={food.image_url}
          width={200}
          height={450}
          alt={food.name}
          className="w-full h-full rounded-md"
        />
      </div>
      <div className="absolute top-0 left-0 right-0 w-full h-full bg-black opacity-50 flex flex-col justify-end items-start text-white z-30 rounded-md">
        <div className="flex justify-center flex-col items-center w-full">
          <h1>{food.name}</h1>
          <p>{food.price}</p>
          <h1>Order Now</h1>
        </div>
      </div>
      {/* <h1>{food.name}</h1> */}
    </div>
  );
};

export default Cart;
