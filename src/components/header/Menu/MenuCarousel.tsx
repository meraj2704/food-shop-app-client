'use client'
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Cart from "./Cart"
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getCategories, getFoodsByCategory } from "@/api/api";
import { Skeleton } from "@/components/ui/skeleton";

export function MenuCarousel() {
  const selectedCategory = useSelector((state:any)=> state.Initial.selectedCategory)
  console.log("selectedCategory", selectedCategory)
  const {
    isLoading,
    isError,
    data: foodsByCategory,
    refetch,
  } = useQuery({
    queryKey: ["foodsByCategory", selectedCategory],
    queryFn: () => getFoodsByCategory(selectedCategory),
  });
  console.log("foodsByCategory", foodsByCategory)
  if (isLoading)
    return (
      <div className="w-full flex basis space-y-2">
        <Skeleton className="h-full w-full" />
        <Skeleton className="h-full w-full" />
        
      </div>
    );
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className=" mt-12">
        {foodsByCategory?.map((food:any, index:string) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
             <Cart food={food}/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
