import React from "react";
import foodSale from "../../../public/assets/foodSale.png";
import Image from "next/image";
import { IoMdArrowDropup } from "react-icons/io";

const StatisticsList = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col 2xl:flex-row gap-5">
        <div className="w-full 2xl:w-1/2 border-[1px] border-borderColor hover:border-primary px-5 py-10 rounded-lg shadow-md flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl font-medium text-primary">
              Good Morning Meraj!
            </h1>
            <p className="text-textColor opacity-75 font-light">
              {"Here's"} what happening with your store today!
            </p>
            <div className="flex flex-col mt-10 gap-1">
              <h1 className="text-xl font-bold text-primary">437438</h1>
              <p className="text-xs font-normal opacity-75 text-textColor">
                Today visit
              </p>
            </div>
            <div className="flex flex-col mt-5 gap-1">
              <h1 className="text-xl font-bold text-primary">$137438.98</h1>
              <p className="text-xs font-normal opacity-75 text-textColor">
                Today Total Sales
              </p>
            </div>
          </div>
          <div className="w-80">
            <Image src={foodSale} width={2000} height={1300} alt="food sale" />
          </div>
        </div>
        <div className="w-full 2xl:w-1/2 grid grid-cols-2 gap-4">
          <div className="col-span-1  border-[1px] border-borderColor hover:border-primary rounded-lg p-5 flex flex-col justify-start gap-2">
            <h1 className="text-xl font-medium text-textColor">Order</h1>
            <h1 className="text-2xl font-bold text-primary">32,350</h1>
            <div className="w-full flex justify-between">
              <p className="text-base text-textColor opacity-75">456456</p>
              <div className="flex items-center gap-2">
                <IoMdArrowDropup className="text-xs text-green-600" />
                <h1 className="text-xs font-medium text-green-600">34.24%</h1>
              </div>
            </div>
          </div>
          <div className="col-span-1  border-[1px] border-borderColor hover:border-primary rounded-lg p-5 flex flex-col justify-start gap-2">
            <h1 className="text-xl font-medium text-textColor">Sold Items</h1>
            <h1 className="text-2xl font-bold text-primary">2,360</h1>
            <div className="w-full flex justify-between">
              <p className="text-base text-textColor opacity-75">546</p>
              <div className="flex items-center gap-2">
                <IoMdArrowDropup className="text-xs text-green-600" />
                <h1 className="text-xs font-medium text-green-600">78.67%</h1>
              </div>
            </div>
          </div>
          <div className="col-span-1  border-[1px] border-borderColor hover:border-primary rounded-lg p-5 flex flex-col justify-start gap-2">
            <h1 className="text-xl font-medium text-textColor">Gross Sale</h1>
            <h1 className="text-2xl font-bold text-primary">$12,460.25</h1>
            <div className="w-full flex justify-between">
              <p className="text-base text-textColor opacity-75">358880</p>
              <div className="flex items-center gap-2">
                <IoMdArrowDropup className="text-xs text-green-600" />
                <h1 className="text-xs font-medium text-green-600">23.45%</h1>
              </div>
            </div>
          </div>
          <div className="col-span-1  border-[1px] border-borderColor hover:border-primary rounded-lg p-5 flex flex-col justify-start gap-2">
            <h1 className="text-xl font-medium text-textColor">
              Total Shipping Cost
            </h1>
            <h1 className="text-2xl font-bold text-primary">$6,240</h1>
            <div className="w-full flex justify-between">
              <p className="text-base text-textColor opacity-75">88680</p>
              <div className="flex items-center gap-2">
                <IoMdArrowDropup className="text-xs text-green-600" />
                <h1 className="text-xs font-medium text-green-600">56.29%</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-5 mt-5">
        <div className="col-span-1 h-36 border-[1px] border-borderColor hover:border-primary rounded-lg p-5 flex flex-col justify-center items-center gap-3">
          <h1 className="text-2xl font-bold text-primary">325.7K</h1>
          <h1 className="text-xl font-medium text-textColor">Total Revenue</h1>
          <h1 className="text-base font-medium text-green-600">50% Increase</h1>
        </div>
        <div className="col-span-1 h-36 border-[1px] border-borderColor hover:border-primary rounded-lg p-5 flex flex-col justify-center items-center gap-3">
          <h1 className="text-2xl font-bold text-primary">2.6K</h1>
          <h1 className="text-xl font-medium text-textColor">New Orders</h1>
          <h1 className="text-base font-medium text-green-600">10% Increase</h1>
        </div>
        <div className="col-span-1 h-36 border-[1px] border-borderColor hover:border-primary rounded-lg p-5 flex flex-col justify-center items-center gap-3">
          <h1 className="text-2xl font-bold text-primary">12.6K</h1>
          <h1 className="text-xl font-medium text-textColor">
            Received Orders
          </h1>
          <h1 className="text-base font-medium text-green-600">34% Increase</h1>
        </div>
        <div className="col-span-1 h-36 border-[1px] border-borderColor hover:border-primary rounded-lg p-5 flex flex-col justify-center items-center gap-3">
          <h1 className="text-2xl font-bold text-primary">476</h1>
          <h1 className="text-xl font-medium text-textColor">Reviews</h1>
          <h1 className="text-base font-medium text-red-600">5% Decrease</h1>
        </div>
        <div className="col-span-1 h-36 border-[1px] border-borderColor hover:border-primary rounded-lg p-5 flex flex-col justify-center items-center gap-3">
          <h1 className="text-2xl font-bold text-primary">865</h1>
          <h1 className="text-xl font-medium text-textColor">New Reach</h1>
          <h1 className="text-base font-medium text-green-600">48% Increase</h1>
        </div>
        <div className="col-span-1 h-36 border-[1px] border-borderColor hover:border-primary rounded-lg p-5 flex flex-col justify-center items-center gap-3">
          <h1 className="text-2xl font-bold text-primary">9.2K</h1>
          <h1 className="text-xl font-medium text-textColor">
            Successful Orders
          </h1>
          <h1 className="text-base font-medium text-red-600">8% Decrease</h1>
        </div>
      </div>
    </div>
  );
};

export default StatisticsList;

