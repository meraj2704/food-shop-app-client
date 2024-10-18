"use client";
import { getCategories } from "@/api/api";
import { Skeleton } from "@/components/ui/skeleton";
import { handleCategorySelect } from "@/redux/Reducer/MainSlice";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const MenuBar = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state: any) => state.Initial.selectedCategory
  );

  const {
    isLoading,
    isError,
    data: allCategories,
    refetch,
  } = useQuery({
    queryKey: ["allCategories"],
    queryFn: () => getCategories(),
  });

  // Dispatch only once when data is fetched and category isn't selected
  useEffect(() => {
    if (allCategories && !selectedCategory) {
      dispatch(handleCategorySelect(allCategories[0]._id));
    }
  }, [allCategories, dispatch, selectedCategory]);

  const handleUpdateCategory = (id: string) => {
    dispatch(handleCategorySelect(id));
    console.log("Selected Category ID:", id);
  };
  console.log("Loading State:", isLoading);

  if (isLoading)
    return (
      <div className="w-full space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    );

  return (
    <div className="w-full">
      <h1 className="text-lg md:text-2xl lg:text-3xl text-textColor font-semibold my-5">
        Special Menu
      </h1>
      <div className="max-h-[500px] overflow-y-scroll space-y-5">
        {allCategories?.map((category: any, index: number) => (
          <div
            onClick={() => handleUpdateCategory(category._id)}
            key={index}
            className={`text-textColor text-xl font-medium flex justify-start items-center gap-8 cursor-pointer rounded-full p-2 mr-20 ${
              selectedCategory === category._id
                ? "bg-primary text-white"
                : "hover:text-primary text-textColor"
            }`}
          >
            <div
              className={`p-2 rounded-full ${
                selectedCategory === category._id ? "bg-white" : "bg-bgColor"
              }`}
            >
              <Image
                src={category.image_url}
                alt={category.name}
                width={50}
                height={50}
                className="w-[20px] h-[30px] rounded-full"
              />
            </div>
            <p className="text-xs md:text-base">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuBar;
