import Image from "next/image";
import React from "react";
import customerService from "../../../public//assets/kitchen/customer-service.png";

const MeasureComponent = () => {
  return (
    <div className="w-full mb-12">
      <div className="container mx-auto">
        <h1 className="text-5xl font-normal text-[#1C1C1C]">
          HOW TO MEASURE YOUR SPACE?
        </h1>
        <div className="w-full h-[600px] my-12">
          <Image
            src={customerService}
            alt="customer data"
            height={600}
            width={1536}
            className="w-full h-full"
          />
        </div>
        <div>
          <p className="text-lg font-normal leading-7 text-[#444444] ">
            We devote to offering you the most satisfying kitchen cabinets. We
            focus on not only the product itself, but also the after-sales
            service.
          </p>
          <h1 className="text-3xl font-normal leading-10 text-[#1C1C1C] mt-16">
            Service Method
          </h1>
          <div className="flex items-start gap-4 mt-8">
            <h1 className="text-4xl leading-10 font-normal text-[#1C1C1C]">
              1
            </h1>
            <p className="text-lg leading-7 text-[#444444]">
              After you filed the service claim, the defective parts will at our
              option either be repaired or replaced and we reserve the right to
              replace defective parts with parts of equal or greater value.
            </p>
          </div>
          <div className="flex items-start gap-4 mt-8">
            <h1 className="text-4xl leading-10 font-normal text-[#1C1C1C]">
              2
            </h1>
            <p className="text-lg leading-7 text-[#444444]">
              If a service claim is filed after the product becomes obsolete or
              discontinued, MY KITCHEN will replace the affected component with
              a replacement component of a similar style based on availability
              at the time of claim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeasureComponent;
