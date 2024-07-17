import React from "react";
import FooterComponent from "@/components/kitchen/FooterComponent";
import ProductCart from "@/components/kitchen/ProductCart";
import ContactUsComponent from "@/components/kitchen/ContactUsComponent";
import DrawerController from "@/components/kitchen/DrawerController";
export interface ProductDetails {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const products: ProductDetails[] = [
  {
    name: "KITCHEN AREA",
    price: 100,
    description: "This is a product",
    imageUrl: "/assets/kitchen/kitchen.png",
  },
  {
    name: "COUNTER TOP",
    price: 100,
    description: "This is a product",
    imageUrl: "/assets/kitchen/counter-top.png",
  },
  {
    name: "WARDROBE",
    price: 100,
    description: "This is a product",
    imageUrl: "/assets/kitchen/wardrobe.png",
  },
  {
    name: "Walk-in Closets",
    price: 100,
    description: "This is a product",
    imageUrl: "/assets/kitchen/walkInClosets.png",
  },
  {
    name: "Vanities",
    price: 100,
    description: "This is a product",
    imageUrl: "/assets/kitchen/Vanities.png",
  },
  {
    name: "Accessories",
    price: 100,
    description: "This is a product",
    imageUrl: "/assets/kitchen/Accessories.png",
  },
];

const page = () => {
  return (
    <div className=" py-10 bg-black">
      <div className="container mx-auto pb-20">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-normal text-white mb-10">
            Our <span className="text-red-700">E</span>xperties
          </h1>
          <div>
            {" "}
            <DrawerController />
          </div>
        </div>
        <div className=" grid grid-cols-3 gap-x-2 gap-y-[100px]">
          {products.map((product) => (
            <ProductCart key={product.name} details={product} />
          ))}
        </div>
      </div>
      <div>
        <ContactUsComponent />
      </div>
      <div className="mt-20">
        <FooterComponent />
      </div>
    </div>
  );
};

export default page;
