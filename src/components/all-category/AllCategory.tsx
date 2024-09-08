"use client";
import { getCategories } from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import LatestNewsTable from "./LatestNewsTable";

const AllCategory = () => {
  return <div>
    <LatestNewsTable/>
  </div>;
};

export default AllCategory;
