import AddFoodForm from "@/components/add-foods/AddFoodForm";
import React from "react";

const page = () => {
  return (
    <div className="px-10 py-5">
      <div>
        <h1 className="text-xl font-bold text-textColor">Add Food</h1>
      </div>
      <div className="w-full mt-5">
        <AddFoodForm/>
      </div>
    </div>
  );
};

export default page;
