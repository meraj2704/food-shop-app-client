import Image from "next/image";
import React from "react";
import aboutImg from "../../assets/about-img.png";
import fastFood from "../../assets/fast-food.png";
import healthyFoods from "../../assets/healthy-foods.png";
import delivery from "../../assets/delivery.png";
import ceo from "../../assets/ceo.png";

const AboutComp = () => {
  return (
    <div className="flex justify-between items-start gap-4 mx-16 my-10">
      <div className="w-1/2 bg-[#F7F8F9] rounded-md ">
        <Image src={aboutImg} alt="about image"></Image>
      </div>
      <div className="w-1/2 flex flex-col justify-start">
        <div className="w-28 bg-[#FDE4D0] py-2 px-4 rounded-3xl mb-10">
          <p className="text-base text-primary">About Us</p>
        </div>
        <h1 className="text-3xl font-bold mb-10">
          Where quality food meet Excellent services.
        </h1>
        <p className="text-[#6D7C92] mb-10">
          It’s the perfect dining experience where every dish is crafted with
          fresh, high-quality ingredients and served by friendly staff who go.
        </p>
        <div className="flex justify-between items-center gap-4">
          <div className="p-5 rounded-lg shadow-xl border-gray-100 border-[1px] hover:border-primary">
            <div className="mb-10">
              <Image src={fastFood} alt="Fast food" width={50}></Image>
            </div>
            <h1 className="text-xl font-medium mb-10">Fast Foods</h1>
            <p className="">Healthy Foods are nutrient-Dense Foods</p>
          </div>

          <div className="p-5 rounded-lg shadow-xl border-gray-100 border-[1px] hover:border-primary">
            <div className="mb-10">
              <Image src={healthyFoods} alt="Fast food" width={50}></Image>
            </div>
            <h1 className="text-xl font-medium mb-10">Healthy Foods</h1>
            <p className="">Healthy Foods are nutrient-Dense Foods</p>
          </div>

          <div className="p-5 rounded-lg shadow-xl border-gray-100 border-[1px] hover:border-primary">
            <div className="mb-10">
              <Image src={delivery} alt="Fast food" width={50}></Image>
            </div>
            <h1 className="text-xl font-medium mb-10">Fast Delivery</h1>
            <p className="">Healthy Foods are nutrient-Dense Foods</p>
          </div>
        </div>
        <div className=" flex  items-center mt-10">
          <div className="rounded-full">
            <Image
              className="rounded-full"
              src={ceo}
              alt="burger image"
              width={60}
              height={60}
            ></Image>
          </div>

          <div className="px-4">
            <h1 className="font-semibold  ">Marley Culhane</h1>
            <p className="text-xs font-medium">Founder CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
