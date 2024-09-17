import Image from "next/image";
import React from "react";
interface CartI {
  food: any;
}
const Cart = ({ food }: CartI) => {
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-[500px] rounded-lg">
        <Image
          src={food.image_url}
          width={200}
          height={450}
          alt={food.name}
          className="w-full h-full rounded-md"
        />
      </div>
      <div className="absolute top-0 left-0 right-0 w-full h-full bg-black  opacity-65 flex flex-col justify-end items-start  z-10 rounded-lg"></div>
      <div className="absolute bottom-0 flex justify-center flex-col items-center w-full text-white text-xl font-medium  my-5 z-20">
        <h1 className="">{food.name}</h1>
        <div className="flex justify-center items-center gap-2">
          <p>{food.price}</p>
          <span className="text-yellow-500">TK.</span>
        </div>{" "}
        <button className="bg-[#f58220] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none">
          Order Now
        </button>
      </div>
      {/* <h1>{food.name}</h1> */}
    </div>
  );
};

export default Cart;
