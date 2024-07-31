import AddCategoriesForm from "@/components/add-categories/AddCategoriesForm";
import React from "react";

const page = () => {
  return (
    <div className="px-10 py-5">
      <div>
        <h1 className="text-xl font-bold text-textColor">Create Category</h1>
      </div>
      <div className="w-full mt-5">
        <AddCategoriesForm/>
      </div>
    </div>
  );
};

export default page;
