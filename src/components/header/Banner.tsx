import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Avatar, AvatarGroup } from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";
import bannerImage from "../../../public/assets/banner_img.png";
import jack from "../../../public/assets/jack.png";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import AvatarComp from "./AvatarComp";

const Banner = () => {
  return (
    <div className="container mx-auto flex justify-between items-center  py-32 relative">
      <div className="absolute gradient-bg h-full w-full z-0"></div>
      <div className="w-1/2 z-10">
        <div className="bg-[#FDE4D0] py-2 px-4 rounded-3xl w-[170px]">
          <p className="text-base text-primary">#Special Food 🍇</p>
        </div>
        <div className="mt-10 z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl/normal font-bold leading-0">
            We Offer <span className="word-with-image">Delicious</span> <br />
            <span className="text-primary">Food</span> And Quick Service
          </h1>
        </div>
        <p className="font-semibold text-[#334155] mt-5">
          Imagine you don’t need a diet because we provide healthy and delicious
          food for you!.
        </p>
        <div className="flex items-center gap-5 mt-5">
          <div className="h-[75px] flex justify-center items-center text-white py-5 px-8 bg-primary rounded-full font-bold">
            Order Now
          </div>
          <div className="flex gap-5 items-center">
            <div className="flex justify-center items-center p-4 border-[2px] border-[#FACC15] rounded-full">
              <PlayArrowIcon
                style={{ color: "#F58220", fontSize: "2rem" }}
              ></PlayArrowIcon>
            </div>
            <p className="text-primary font-bold">How To Play</p>
          </div>
        </div>
        <div className="flex gap-5 mt-20">
          <AvatarComp></AvatarComp>
          <div className="flex flex-col ">
            <h1 className="text-base font-semibold text-gray-600">
              Our happy customers
            </h1>
            <div className="flex items-center gp-2 ">
              <StarIcon style={{ color: "#FACC15" }}></StarIcon>
              <p className="text-gray-600 text-xs ">4.7</p>
              <p className="text-gray-600 text-xs ">(13.7k reviews)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center relative py-10">
        <div className="absolute top-0 left-0">
          <h1>🔥</h1>
        </div>
        <div className="absolute bottom-0 left-[50%]">
          <h1>🔥</h1>
        </div>
        <div className="absolute top-0 right-[10%] p-3 bg-[#FACC15] rounded-md rotate-12">
          <AlarmOnIcon style={{ color: "#fff" }} />
        </div>
        <div className="absolute h-4 w-4 rounded-md bg-[#F58220] rotate-45 right-[5%]"></div>
        <div className="absolute h-4 w-4 rounded-full bg-[#F58220] rotate-45 right-[7%] bottom-[10%]"></div>
        <Image src={bannerImage} alt="banner image"></Image>
        <div className="absolute p-2 bg-white shadow-xl rounded-full flex justify-between items-center bottom-0 left-0">
          <div className="p-3 bg-[#F7E2D0] rounded-full">
            <Image
              src="https://themes.coderthemes.com/yum_b/assets/burger-1-eM0xP7uX.svg"
              alt="burger image"
              width={40}
              height={40}
            ></Image>
          </div>
          <div className="px-4">
            <h1 className="font-semibold">MCD Veg Burger</h1>
            <div className="flex">
              <StarIcon
                style={{ color: "#FACC15", fontSize: "14px" }}
              ></StarIcon>{" "}
              <StarIcon
                style={{ color: "#FACC15", fontSize: "14px" }}
              ></StarIcon>{" "}
              <StarIcon
                style={{ color: "#FACC15", fontSize: "14px" }}
              ></StarIcon>{" "}
              <StarIcon
                style={{ color: "#FACC15", fontSize: "14px" }}
              ></StarIcon>{" "}
              <StarIcon
                style={{ color: "#FACC15", fontSize: "14px" }}
              ></StarIcon>
            </div>
            <p>
              <span className="text-primary">$</span> 8.4
            </p>
          </div>
        </div>
        <div className="absolute p-2 bg-white shadow-xl rounded-full flex justify-between items-center  right-[5%] bottom-[25%]">
          <div className="rounded-full">
            <Image
              className="rounded-full"
              src={jack}
              alt="burger image"
              width={60}
              height={60}
            ></Image>
          </div>

          <div className="px-4">
            <h1 className="font-semibold  ">Jakob Culhane</h1>
            <p className="text-xs font-medium">Healthy and Delicious Food</p>
            <div className="flex">
              <StarIcon
                style={{ color: "#FACC15", fontSize: "14px" }}
              ></StarIcon>{" "}
              <StarIcon
                style={{ color: "#FACC15", fontSize: "14px" }}
              ></StarIcon>{" "}
              <StarIcon
                style={{ color: "#FACC15", fontSize: "14px" }}
              ></StarIcon>{" "}
              <StarIcon
                style={{ color: "#FACC15", fontSize: "14px" }}
              ></StarIcon>{" "}
              <StarIcon
                style={{ color: "#FACC15", fontSize: "14px" }}
              ></StarIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
