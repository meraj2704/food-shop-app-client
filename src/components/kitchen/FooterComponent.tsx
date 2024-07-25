import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import kitchenLogo from "../../../public/assets/kitchen/kitchen-logo.png";
import tilottoma from "../../../public/assets/kitchen/tilottoma.png";
import nextBook from "../../../public/assets/kitchen/nextbook.png";

import React from "react";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

const FooterComponent = () => {
  return (
    <div className=" w-full h-[480px] footer-bg bg-black">
      {/* <div className="absolute w-full h-full bg-black opacity-90 z-10 "></div> */}
      <div className=" w-full  z-20">
        <div
          className="container mx-auto h-full grid grid-cols-8 gap-4 py-20
        "
        >
          <div className="col-span-2 flex flex-col">
            <div className="">
              <Image src={kitchenLogo} alt="logo" />
            </div>
            <p className="text-base font-bold mt-16 text-white">Our Concerns</p>
            <div className="flex items-center gap-8 mt-7">
              <div>
                <Image src={tilottoma} alt="" />
              </div>
              <div>
                {" "}
                <Image src={nextBook} alt="" />
              </div>
            </div>
          </div>
          <div className="col-span-1 ">
            <h1 className="text-base font-bold text-[#939393] ">
              Social Links
            </h1>
            <div className="flex flex-col justify-start items-start mt-7   gap-5">
              <div className="flex justify-start items-center gap-2 text-gray-200 hover:text-red-800">
                <FaFacebookF />
                <p className="text-lg ">Facebook</p>
              </div>
              <div className="flex justify-start items-center gap-2 text-gray-200 hover:text-red-800">
              <FaXTwitter />  <p className="text-lg ">X</p>
              </div>
              <div className="flex justify-start items-center gap-2 text-gray-200 hover:text-red-800">
                <FaInstagram />
                <p className="text-lg ">Instagram</p>
              </div>
              <div className="flex justify-start items-center gap-2 text-gray-200 hover:text-red-800">
                <SlSocialLinkedin />
                <p className="text-lg ">Linkedin</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 ">
            <h1 className="text-base font-bold text-[#939393] ">
              Useful Links
            </h1>
            <div className="flex flex-col justify-start items-start mt-7   gap-5">
              <div className="flex justify-start items-center text-gray-200 hover:text-red-800">
                <p className="text-lg ">Blog</p>
              </div>
              <div className="flex justify-start items-center text-gray-200 hover:text-red-800">
                <p className="text-lg ">Privacy Policy</p>
              </div>
              <div className="flex justify-start items-center text-gray-200 hover:text-red-800">
                <p className="text-lg ">Terms & Conditions</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 ">
            <h1 className="text-base font-bold text-[#939393] ">Products</h1>
            <div className="flex flex-col justify-start items-start mt-7   gap-5">
              <div className="flex justify-start items-center text-gray-200 hover:text-red-800">
                <p className="text-lg ">Kitchen</p>
              </div>
              <div className="flex justify-start items-center text-gray-200 hover:text-red-800">
                <p className="text-lg ">Counter Top</p>
              </div>
              <div className="flex justify-start items-center text-gray-200 hover:text-red-800">
                <p className="text-lg ">Wardrobes</p>
              </div>
              <div className="flex justify-start items-center text-gray-200 hover:text-red-800">
                <p className="text-lg ">Walk-in Closets</p>
              </div>
              <div className="flex justify-start items-center text-gray-200 hover:text-red-800">
                <p className="text-lg ">Vanities</p>
              </div>
              <div className="flex justify-start items-center text-gray-200 hover:text-red-800">
                <p className="text-lg ">Accessories</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 ">
            <h1 className="text-base font-bold text-[#939393] ">Talk To Us</h1>
            <div className="flex flex-col justify-start items-start mt-7   gap-5">
              <div className="flex justify-start items-center text-gray-200 hover:text-red-800">
                <p className="text-lg ">Feedback</p>
              </div>
              <div className="flex justify-start items-center text-gray-200 hover:text-red-800">
                <p className="text-lg ">Contacts</p>
              </div>
            </div>
          </div>

          <div className="col-span-2 ">
            <h1 className="text-bae font-bold text-[#939393] ">
              Subscribe to our newsletter
            </h1>
            <div className="mt-9">
              <form action="">
                <input
                  type="email"
                  placeholder="Email address"
                  className=" bg-transparent border-none text-lg font-medium text-white px-1 outline-none placeholder-gray-500"
                />
                <div className="w-full h-[2px] bg-white rounded-md mt-2"></div>
                <div className="w-40 flex justify-center items-center px-16 py-4 bg-white mt-4 hover:scale-95">
                  <p className="text-base font-medium">Subscribe</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[40px] bg-[#0A0A0A] flex justify-center items-center gap-2">
        <p className="text-[#939393] text-base ">
          Copyright © 2024 | All rights reserved by
        </p>
        <p className="text-[#939393] text-base ">Tilottoma Bangla Group</p>
        <p className="text-[#939393] text-base ">|</p>
        <p className="text-[#939393] text-base ">
          Crafted & Developed by Creative Matter.
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
