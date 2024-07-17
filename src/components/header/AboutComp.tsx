import Image from "next/image";
import React from "react";
import aboutImg from "../../../public/assets/about-img.png";
import fastFood from "../../../public/assets/fast-food.png";
import healthyFoods from "../../../public/assets/healthy-foods.png";
import delivery from "../../../public/assets/delivery.png";
import ceo from "../../../public/assets/ceo.png";
import HeaderTag from "../button/HeaderTag";

const AboutComp = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto flex justify-between items-start gap-4 py-10">
        <div className="w-1/2 h-[500px] bg-imgBg  rounded-md ">
          <Image
            src={aboutImg}
            width={554}
            height={451}
            alt="about image"
          ></Image>
        </div>
        <div className="w-1/2 flex flex-col justify-start">
          <div className=" flex justify-start items-start mb-5">
            {" "}
            <HeaderTag header="About Us" />
          </div>
          <h1 className="text-3xl text-textColor font-bold mb-10">
            Where quality food meet Excellent services.
          </h1>
          <p className="text-textColor opacity-65 mb-10">
            It’s the perfect dining experience where every dish is crafted with
            fresh, high-quality ingredients and served by friendly staff who go.
          </p>
          <div className="flex justify-between items-center gap-4">
            <div className="p-5 rounded-lg shadow-xl border-gray-100 border-[1px] hover:border-primary">
              <div className="mb-10">
                <Image
                  src={fastFood}
                  alt="Fast food"
                  width={48}
                  height={48}
                ></Image>
              </div>
              <h1 className="text-xl text-textColor font-medium mb-10">
                Fast Foods
              </h1>
              <p className="text-textColor opacity-65">
                Healthy Foods are nutrient-Dense Foods
              </p>
            </div>

            <div className="p-5 rounded-lg shadow-xl border-gray-100 border-[1px] hover:border-primary">
              <div className="mb-10">
                <Image
                  src={healthyFoods}
                  alt="Fast food"
                  width={48}
                  height={48}
                ></Image>
              </div>
              <h1 className="text-xl text-textColor font-medium mb-10">
                Healthy Foods
              </h1>
              <p className="text-textColor opacity-65">
                Healthy Foods are nutrient-Dense Foods
              </p>
            </div>

            <div className="p-5 rounded-lg shadow-xl border-gray-100 border-[1px] hover:border-primary">
              <div className="mb-10">
                <Image
                  src={delivery}
                  alt="Fast food"
                  width={48}
                  height={48}
                ></Image>
              </div>
              <h1 className="text-xl text-textColor font-medium mb-10">
                Fast Delivery
              </h1>
              <p className="text-textColor opacity-65">
                Healthy Foods are nutrient-Dense Foods
              </p>
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
              <h1 className="font-semibold  text-textColor ">Marley Culhane</h1>
              <p className="text-xs text-textColor font-medium">Founder CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
