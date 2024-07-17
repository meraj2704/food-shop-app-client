import Image from "next/image";
import React from "react";
import point from "../../../public/assets/kitchen/reactanglePoint.png";

const CoveredComponent = () => {
  return (
    <div className="w-full bg-[#EBEBEB]">
      <div
        className="container mx-auto 
      py-10"
      >
        <div>
          <h1 className="text-3xl font-normal leading-10 text-[#1C1C1C] ">
            What is covered
          </h1>
          <div className="mt-8 space-y-4">
            <p className="text-lg leading-7 font-bold text-[#444444]">
              The service period begins from that day that you received the
              product. The following list what our coverage are:
            </p>
            <div className="flex gap-4 items-center">
              <Image src={point} alt="" height={10} width={10} className="" />{" "}
              <p className="text-lg font-normal leading-7 text-[#444444] ">
                We devote to offering you the most satisfying kitchen cabinets.
                We focus on not only the product itself, but also the
                after-sales service.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Image src={point} alt="" height={10} width={10} className="" />{" "}
              <p className="text-lg font-normal leading-7 text-[#444444] ">
                The product must be purchased from the local dealers or
                showrooms authorized by MY KITCHEN.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Image src={point} alt="" height={10} width={10} className="" />{" "}
              <p className="text-lg font-normal leading-7 text-[#444444] ">
                If the product is used in your own apartment, we offer the
                service service to you, and the service is not transferable to
                the subsequent owner.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Image src={point} alt="" height={10} width={10} className="" />{" "}
              <p className="text-lg font-normal leading-7 text-[#444444] ">
                Under the normal condition, the material or profile defects
                occur during the installation by MY KITCHEN staffs.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Image src={point} alt="" height={10} width={10} className="" />{" "}
              <p className="text-lg font-normal leading-7 text-[#444444] ">
                The product’s components those are defective in materials or
                workmanship under normal use, service and maintenance.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h1 className="text-3xl font-normal leading-10 text-[#1C1C1C] ">
            What is not covered
          </h1>
          <div className="mt-8 space-y-4">
            <div className="flex gap-4 items-center">
              <Image src={point} alt="" height={10} width={10} className="" />{" "}
              <p className="text-lg font-normal leading-7 text-[#444444] ">
                Defects occur during the improper installation.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Image src={point} alt="" height={10} width={10} className="" />{" "}
              <p className="text-lg font-normal leading-7 text-[#444444] ">
                Defects occur during the improper use.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Image src={point} alt="" height={10} width={10} className="" />{" "}
              <p className="text-lg font-normal leading-7 text-[#444444] ">
                Slight color variations for repair or replacement parts and
                color variations that may Occur over time are not considered
                defects or deficiencies under this service.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Image src={point} alt="" height={10} width={10} className="" />{" "}
              <p className="text-lg font-normal leading-7 text-[#444444] ">
                This service does not apply to damages or defects related to
                improper handling, Storage, misuse, alterations or product used
                for any purpose other than normal use.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Image src={point} alt="" height={10} width={10} className="" />{" "}
              <p className="text-lg font-normal leading-7 text-[#444444] ">
                This Limited service does not include any labor, installation or
                transportation costs or any responsibility for damage MY KITCHEN
                considers unusual use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoveredComponent;
