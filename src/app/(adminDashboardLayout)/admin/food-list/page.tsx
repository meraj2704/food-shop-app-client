import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="max-w-full p-5">
      <div className="w-full flex justify-end items-center mt-5">
        <Link href={`/admin/add-food`}>
          <button className="border-[1px] border-textColor rounded-lg px-5 py-2 hover:border-primary hover:text-primary">
            Add Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
