"use client";
import { getCategories } from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import LatestNewsTable from "./Table";

const AllCategory = () => {
  return <div>
    <LatestNewsTable/>
  </div>;
};

export default AllCategory;
