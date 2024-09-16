"use client";
import { getCategories } from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

const MenuBar = () => {
  const {
    isLoading,
    isError,
    data: allCategories,
    refetch,
  } = useQuery({
    queryKey: ["allCategories"],
    queryFn: () => getCategories(),
  });
  console.log("allCategories", allCategories);
  return (
    <div className="w-full ">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-textColor font-semibold my-5">Special Menu</h1>
      <div className="max-h-[500px] overflow-y-scroll space-y-5">
      {allCategories?.map((category: any, index: number) => (
        <div
          key={index}
          className="text-textColor text-xl font-medium flex justify-start items-center gap-10 cursor-pointer"
        >
          <div>
            <Image
              src={category.image_url}
              alt={category.name}
              width={70}
              height={70}
              className="w-[60px] h-[60px] rounded-full"
            />
          </div>
          <p className="hover:text-primary">{category.name}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default MenuBar;
