"use client";
import { getCategories } from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllCategory = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading categories.</p>;
  return (
    <div>
      {data.length > 0 ? (
        <>
          {data.map((category:any) => (
            <div key={category.id}>
              <h2>{category.name}</h2>
            </div>
          ))}{" "}
        </>
      ) : (
        <p>No categories found.</p>
      )}
    </div>
  );
};

export default AllCategory;
