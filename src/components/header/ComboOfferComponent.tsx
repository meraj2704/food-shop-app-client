import React from "react";
import RegularButton from "../button/RegularButton";
import offerPercentage from "../../../public/assets/offer-percentage.svg";
import Image from "next/image";

const ComboOfferComponent = () => {
  return (
    <div className="w-full h-[500px] combo-offer-bg flex justify-start items-center relative">
      <div className="container mx-auto flex flex-col">
        <h1 className="text-2xl text-secondary font-medium">
          Special Combo Offer
        </h1>
        <h1 className="text-4xl font-semibold text-white mt-6">
          We make best food in our town.
        </h1>
        <p className="font-medium text-white mt-8 opacity-85">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Ea
          iure numquam, consequuntur quasi aperiam <br /> suscipit dolorem et
          sapiente laboriosam, <br /> autem, blanditiis perspiciatis! Sunt eaque
          quis odit, <br />
        </p>
        <div className="flex justify-start items-center gap-4 mt-8">
          <RegularButton btnTitle="Fill My Tummy" />
          <h1 className="text-secondary  text-2xl font-medium">$23.47</h1>
          <h1 className="text-white opacity-85 line-through text-xl">$44.39</h1>
        </div>
      </div>
      <div className="absolute bottom-10 left-[35%]">
        <Image src={offerPercentage} alt="" />
      </div>
    </div>
  );
};

export default ComboOfferComponent;
