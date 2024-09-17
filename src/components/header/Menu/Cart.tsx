import Image from "next/image";
import React from "react";

interface Food {
  name: string;
  price: number;
  image_url: string;
}

interface CartI {
  food: Food;
}

const Cart = ({ food }: CartI) => {
  return (
    <div className="w-full h-full relative group">
      {/* Image Section */}
      <div className="w-full h-[500px] rounded-lg overflow-hidden">
        <Image
          src={food.image_url}
          alt={food.name}
          fill
          priority
          className="object-cover rounded-md"
        />
      </div>

      {/* Hover Overlay */}
      <div className="absolute top-0 left-0 right-0 w-full h-full bg-black opacity-0 group-hover:opacity-65 flex flex-col justify-end items-start z-10 rounded-lg transition-opacity duration-500"></div>

      {/* Food Info Section */}
      <div className="absolute bottom-[-40%] group-hover:bottom-10 transition-all duration-300 flex flex-col justify-center items-center w-full text-white text-xl font-medium z-20">
        <h1 className="text-2xl font-semibold">{food.name}</h1>
        <div className="flex justify-center items-center gap-2 my-2">
          <p className="text-lg">{food.price}</p>
          <span className="text-yellow-500">TK.</span>
        </div>
        <button
          className="bg-[#f58220] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none"
          aria-label={`Order ${food.name}`}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
