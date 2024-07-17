import React from "react";
import HeaderTag from "../button/HeaderTag";
import RegularButton from "../button/RegularButton";
import Image from "next/image";
import courierAvatar from "../../../public/assets/curiar-avatar.png";
import appAdd from "../../../public/assets/app-add.png";
import { IoIosCall } from "react-icons/io";

const AppAddComponent = () => {
  return (
    <div className="container mx-auto bg-bgGradientFinish flex flex-col 2xl:flex-row justify-center items-center  rounded-md my-16 lg:h-[600px] relative">
      <div className="w-1/2 p-16">
        <div className="flex justify-start items-start">
          {" "}
          <HeaderTag header="Download App" />
        </div>
        <h1 className="text-textColor text-3xl font-bold mt-8">
          Get Started With Us <br /> Today !
        </h1>
        <p className="text-textColor mt-8">
          Discover food wherever and whenever and get your food delivered
          quickly.
        </p>
        <div className="mt-8">
          <RegularButton btnTitle="Order Now" />
        </div>
        <div className="flex justify-end items-center mt-16">
          <div className="flex items-center gap-4 bg-bgColor rounded-full p-3 shadow-xl">
            <div className="w-[50px] h-[50px] rounded-full">
              <Image
                src={courierAvatar}
                width={60}
                height={60}
                alt="avatar for courier"
                className="rounded-full"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-textColor">
                Richard Watson
              </h1>
              <p>Food Courier</p>
            </div>
            <div className="w-[50px] h-[50px] bg-primary rounded-full flex justify-center items-center">
              <IoIosCall className="text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full relative px-16">
        <div className=" absolute bottom-0">
          <Image src={appAdd} width={532} height={518} alt="add for apps" objectFit="cover" />
        </div>
      </div>
      <div className="absolute bottom-[70%] left-[40%] rotate-45">
        <p className="text-2xl">😃</p>
      </div>
      <div className="absolute bottom-[50%] left-[50%] rotate-45">
        <p className="text-2xl">🔥</p>
      </div>
      <div className="absolute bottom-[10%] right-[10%] rotate-45">
        <p className="text-4xl">🔥</p>
      </div>
      <div className="absolute top-[5%] right-[10%] rotate-45">
        <p className="text-xl">😋</p>
      </div>
      <div className="absolute w-[10px] h-[10px] bg-primary rounded-full top-[70%] left-[20%]"></div>
      <div className="absolute w-[10px] h-[10px] bg-primary rounded-full top-[50%] right-[20%]"></div>
      <div className="absolute w-[10px] h-[10px] bg-primary rounded-full top-[10%] left-[70%]"></div>
      <div className="absolute w-[10px] h-[10px] bg-yellow rounded-full top-[80%] right-[10%]"></div>
    </div>
  );
};

export default AppAddComponent;
