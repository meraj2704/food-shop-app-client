import React from "react";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import { Avatar, AvatarGroup } from "@mui/material";
// import CiStar  from "@mui/icons-material/Star";
import Image from "next/image";
import bannerImage from "../../../public/assets/banner_img.png";
import jack from "../../../public/assets/jack.png";
// import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import RegularButton from "../button/RegularButton";
import HeaderTag from "../button/HeaderTag";
import { CiStar } from "react-icons/ci";
const Banner = () => {
  return (
    <div className="w-full relative">
      <div className="absolute gradient-bg h-full w-full z-0"></div>
      <div className=" container mx-auto grid grid-cols-1 lg:grid-cols-2 py-32 px-5 md:px-10 xl:px-0">     
        <div className="z-10">
          <div className="flex justify-center lg:justify-start items-start">
            {" "}
            <HeaderTag header="#Special Food 🍇" />
          </div>
          <div className="mt-5 md:mt-10 z-10">
            <h1 className="text-3xl/normal md:text-5xl/normal lg:text-6xl/normal text-center lg:text-start font-bold text-textColor leading-6">
              We Offer <span className="word-with-image">Delicious</span> <br />
              <span className="text-primary">Food</span> And Quick Service
            </h1>
          </div>
          <p className="font-semibold text-textColor mt-5 opacity-75 text-center lg:text-start">
            Imagine you don’t need a diet because we provide healthy and
            delicious food for you!.
          </p>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-5 mt-5">
            <RegularButton btnTitle="Order Now" />
            <div className="flex gap-5 items-center">
              <div className="flex justify-center items-center p-4 border-[2px] border-primary rounded-full">
                
              </div>
              <p className="text-primary font-bold">How To Play</p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start gap-5 mt-10 xl:mt-20">
            {/* <AvatarComp></AvatarComp> */}
            <div className="flex flex-col ">
              <h1 className="text-base font-semibold text-textColor opacity-75">
                Our happy customers
              </h1>
              <div className="flex items-center gp-2 ">
                {/* <StarIcon style={{ color: "#FACC15" }}></StarIcon> */}
                <p className="text-textColor opacity-75 text-xs ">4.7</p>
                <p className="text-textColor opacity-75 text-xs ">
                  (13.7k reviews)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center relative py-10">
          <div className="absolute top-0 left-0">
            <h1>🔥</h1>
          </div>
          <div className="absolute bottom-0 left-[50%]">
            <h1>🔥</h1>
          </div>
          <div className="absolute top-0 right-[10%] p-3 bg-primary rounded-md rotate-12">
            {/* <AlarmOnIcon style={{ color: "#fff" }} /> */}
          </div>
          <div className="absolute h-4 w-4 rounded-md bg-primary rotate-45 right-[5%]"></div>
          <div className="absolute h-4 w-4 rounded-full bg-primary rotate-45 right-[7%] bottom-[10%]"></div>
          <Image src={bannerImage} width={497} height={537} alt="banner image"></Image>
          <div className="absolute p-2 bg-bgColor shadow-2xl rounded-full flex justify-between items-center bottom-0 left-0">
            <div className="p-3 bg-[#F7E2D0] rounded-full">
              <Image
                src="https://themes.coderthemes.com/yum_b/assets/burger-1-eM0xP7uX.svg"
                alt="burger image"
                width={40}
                height={40}
              ></Image>
            </div>
            <div className="px-4">
              <h1 className="font-semibold text-textColor">MCD Veg Burger</h1>
              <div className="flex">
                <CiStar 
                  className="text-primary text-xs"
                ></CiStar>{" "}
                <CiStar 
                  className="text-primary text-xs"
                ></CiStar>{" "}
                <CiStar 
                  className="text-primary text-xs"
                ></CiStar>{" "}
                <CiStar 
                  className="text-primary text-xs"
                ></CiStar>{" "}
                <CiStar 
                  className="text-primary text-xs"
                ></CiStar>
              </div>
              <p>
                <span className="text-primary">$</span> 8.4
              </p>
            </div>
          </div>
          <div className="absolute p-2 bg-bgColor shadow-xl rounded-full hidden  md:flex justify-between items-center  right-[5%] bottom-[25%]">
            <div className="rounded-full">
              <Image
                className="rounded-full"
                src={jack}
                alt="burger image"
                width={60}
                height={60}
              ></Image>
            </div>

            <div className="px-4 ">
              <h1 className="font-semibold  text-textColor">Jakob Culhane</h1>
              <p className="text-xs font-medium text-textColor">
                Healthy and Delicious Food
              </p>
              <div className="flex">
                <CiStar 
                  className="text-primary text-xs"
                ></CiStar>{" "}
                <CiStar 
                  className="text-primary text-xs"
                ></CiStar>{" "}
                <CiStar 
                  className="text-primary text-xs"
                ></CiStar>{" "}
                <CiStar 
                  className="text-primary text-xs"
                ></CiStar>{" "}
                <CiStar 
                  className="text-primary text-xs"
                ></CiStar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
