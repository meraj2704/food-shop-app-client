import ProductCart from "@/components/productCart/ProductCart";
import React from "react";
export interface ProductDetails {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const products: ProductDetails[] = [
  {
    name: "Walk-in Closets",
    price: 100,
    description: "This is a product",
    imageUrl: "",
  },
  {
    name: "Vanities",
    price: 100,
    description: "This is a product",
    imageUrl: "",
  },
  {
    name: "Accessories",
    price: 100,
    description: "This is a product",
    imageUrl: "",
  },
];

const page = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-black gap-4">
      {
        products.map((product) => (
          <ProductCart key={product.name} details={product} />
        ))
      }
    </div>
  );
};

export default page;
