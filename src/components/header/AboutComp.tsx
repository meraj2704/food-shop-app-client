import Image from "next/image";
import React, { memo } from "react";
import aboutImg from "../../../public/assets/about-img.png";
import fastFood from "../../../public/assets/fast-food.png";
import healthyFoods from "../../../public/assets/healthy-foods.png";
import delivery from "../../../public/assets/delivery.png";
import ceo from "../../../public/assets/ceo.png";
import HeaderTag from "../button/HeaderTag";

// Reusable card component for food features
const FeatureCard = ({
  imgSrc,
  title,
  description,
}: {
  imgSrc: any;
  title: string;
  description: string;
}) => (
  <div className="grid grid-rows-4 p-5 rounded-lg shadow-xl border-gray-100 border-[1px] hover:border-primary">
    <div className="mb-5 xl:mb-10 row-span-1">
      <Image src={imgSrc} alt={title} width={48} height={48} />
    </div>
    <div className="row-span-1">
      <h1 className="text-xl text-textColor font-medium mb-5 xl:mb-10">{title}</h1>
    </div>
    <div className="row-span-2">
      <p className="text-textColor opacity-65 row-span-1">{description}</p>
    </div>
  </div>
);

const AboutComp = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row justify-between items-start gap-4 py-10">
        <div className="w-full lg:w-1/2 h-auto flex justify-center items-center bg-imgBg rounded-md">
          <Image
            src={aboutImg}
            width={554}
            height={451}
            alt="About us"
            priority
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-start">
          <div className="flex justify-start items-start mb-5">
            <HeaderTag header="About Us" />
          </div>
          <h1 className="text-3xl text-textColor font-bold mb-10">
            Where quality food meets Excellent services.
          </h1>
          <p className="text-textColor opacity-65 mb-10">
            It’s the perfect dining experience where every dish is crafted with
            fresh, high-quality ingredients and served by friendly staff who go
            the extra mile.
          </p>

          {/* Feature cards */}
          <div className="flex justify-between items-start gap-4">
            <FeatureCard
              imgSrc={fastFood}
              title="Fast Foods"
              description="Healthy Foods are nutrient-Dense Foods"
            />
            <FeatureCard
              imgSrc={healthyFoods}
              title="Healthy Foods"
              description="Healthy Foods are nutrient-Dense Foods"
            />
            <FeatureCard
              imgSrc={delivery}
              title="Fast Delivery"
              description="Healthy Foods are nutrient-Dense Foods"
            />
          </div>

          {/* CEO Section */}
          <div className="flex items-center mt-10">
            <Image
              className="rounded-full"
              src={ceo}
              alt="CEO image"
              width={60}
              height={60}
              priority
            />
            <div className="px-4">
              <h1 className="font-semibold text-textColor">Marley Culhane</h1>
              <p className="text-xs text-textColor font-medium">Founder CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(AboutComp);
