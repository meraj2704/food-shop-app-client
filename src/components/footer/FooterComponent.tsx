import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";

import React from "react";
import footer from "../../../public/assets/footer.jpg";

const FooterComponent = () => {
  return (
    <div className="absolute w-full h-[480px] footer-bg bottom-0 ">
      <div className="absolute w-full h-full bg-black opacity-90 z-10 "></div>
      <div className="absolute w-full h-full z-20">
        <div
          className="container mx-auto h-full grid grid-cols-8 gap-4 py-20
        "
        >
          <div className="col-span-2 flex flex-col">
            <div className="">
              <h1 className="text-5xl/normal text-white font-medium">
                My Kitchen
              </h1>
            </div>
            <p className="text-lg font-medium mt-14 text-white">Our Concerns</p>
          </div>
          <div className="col-span-1 ">
            <h1 className="text-lg font-bold text-gray-500 ">Social Links</h1>
            <div className="flex flex-col justify-start items-start mt-7   gap-5">
              <div className="flex justify-start items-center gap-2 text-gray-200 hover:text-red-800">
                <FaFacebookF />
                <p className="text-lg font-medium">Facebook</p>
              </div>
              <div className="flex justify-start items-center text-gray-200 hover:text-red-800">
                <p className="text-lg font-medium">X</p>
              </div>
              <div className="flex justify-start items-center gap-2 text-gray-200 hover:text-red-800">
                <FaInstagram />
                <p className="text-lg font-medium">Instagram</p>
              </div>
              <div className="flex justify-start items-center gap-2 text-gray-200 hover:text-red-800">
                <SlSocialLinkedin />
                <p className="text-lg font-medium">Linkedin</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 ">
            <h1 className="text-lg font-bold text-gray-500 ">Useful Links</h1>
            <div className="flex flex-col justify-start items-start mt-7   gap-5">
              <div className="flex justify-start items-center text-gray-200 hover:text-red-800">
                <p className="text-lg font-medium">Blog</p>
              </div>
              <div className="flex justify-start items-center text-gray-200 hover:text-red-800">
                <p className="text-lg font-medium">Privacy Policy</p>
              </div>
              <div className="flex justify-start items-center text-gray-200 hover:text-red-800">
                <p className="text-lg font-medium">Terms & Conditions</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 ">
            <h1 className="text-lg font-bold text-gray-500 ">Products</h1>
            <div className="flex flex-col justify-start items-start mt-7   gap-5">
              <div className="flex justify-start items-center text-gray-200 hover:text-red-800">
                <p className="text-lg font-medium">Kitchen</p>
              </div>
              <div className="flex justify-start items-center text-gray-200 hover:text-red-800">
                <p className="text-lg font-medium">Counter Top</p>
              </div>
              <div className="flex justify-start items-center text-gray-200 hover:text-red-800">
                <p className="text-lg font-medium">Wardrobes</p>
              </div>
              <div className="flex justify-start items-center text-gray-200 hover:text-red-800">
                <p className="text-lg font-medium">Walk-in Closets</p>
              </div>
              <div className="flex justify-start items-center text-gray-200 hover:text-red-800">
                <p className="text-lg font-medium">Vanities</p>
              </div>
              <div className="flex justify-start items-center text-gray-200 hover:text-red-800">
                <p className="text-lg font-medium">Accessories</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 ">
            <h1 className="text-lg font-bold text-gray-500 ">Talk To Us</h1>
            <div className="flex flex-col justify-start items-start mt-7   gap-5">
              <div className="flex justify-start items-center text-gray-200 hover:text-red-800">
                <p className="text-lg font-medium">Feedback</p>
              </div>
              <div className="flex justify-start items-center text-gray-200 hover:text-red-800">
                <p className="text-lg font-medium">Contacts</p>
              </div>
            </div>
          </div>

          <div className="col-span-2 ">
            <h1 className="text-lg font-bold text-gray-500 ">
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
    </div>
  );
};

export default FooterComponent;
