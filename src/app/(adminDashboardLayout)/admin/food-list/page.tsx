import FoodTable from "@/components/food-list/FoodTable";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="max-w-full p-5">
      <FoodTable/>
    </div>
  );
};

export default page;
