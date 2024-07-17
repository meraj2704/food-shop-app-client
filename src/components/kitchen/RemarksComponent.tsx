import React from "react";

const RemarksComponent = () => {
  return (
    <div className="w-full bg-[#1C1C1C]">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl text-[#EBEBEB] font-normal leading-10">
          Remarks
        </h1>
        <div className="mt-10 flex flex-col gap-4">
          <div className="flex justify-start items-start gap-3">
            <h1 className="text-4xl font-normal text-[#EBEBEB] leading-10">
              1
            </h1>{" "}
            <p className="text-lg leading-7 text-[#EBEBEB] font-normal">
              No Dealer or Agent of MY KITCHEN has any authority to change or
              broaden the scope of this Limited service or MY KITCHEN
              obligations.
            </p>
          </div>
          <div className="flex justify-start items-start gap-3">
            <h1 className="text-4xl font-normal text-[#EBEBEB] leading-10">
              2
            </h1>{" "}
            <p className="text-lg leading-7 text-[#EBEBEB] font-normal">
            The product’s component defect occurs during the shipment, please contact our staffs and the defected part will at our option either be repaired or replaced based on the actual circumstance.
            </p>
          </div>
          <div className="flex justify-start items-start gap-3">
            <h1 className="text-4xl font-normal text-[#EBEBEB] leading-10">
              3
            </h1>{" "}
            <p className="text-lg leading-7 text-[#EBEBEB] font-normal">
            The Service statements contained in this Limited service set forth the only express warranties extended by MY KITCHEN for the kitchen cabinets.
            </p>
          </div>
          <div className="flex justify-start items-start gap-3">
            <h1 className="text-4xl font-normal text-[#EBEBEB] leading-10">
              4
            </h1>{" "}
            <p className="text-lg leading-7 text-[#EBEBEB] font-normal">
            This Limited service shall be governed by and contrived in accordance with the laws set forth for the Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemarksComponent;
