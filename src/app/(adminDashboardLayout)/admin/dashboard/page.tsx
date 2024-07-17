import StatisticsList from "@/components/DashboardComp/StatisticsList";
import React from "react";

const page = () => {
  return (
    <div className="px-10 py-5">
      <div>
        <h1 className="text-xl font-bold text-textColor">Dashboard</h1>
      </div>
      <div className="w-full mt-5">
        <StatisticsList/>
      </div>
    </div>
  );
};

export default page;
