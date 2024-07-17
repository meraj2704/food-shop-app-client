import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
import { MdArrowRightAlt, MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full mt-10 border-t-[0.5px] border-t-gray-200 pt-16">
      <div className="container mx-auto grid grid-cols-6">
        <div className="flex flex-col items-start gap-5 col-span-1">
          <h1 className="text-textColor font-semibold">About</h1>
          <div className="flex flex-col gap-3">
            <p className="text-textColor opacity-65 hover:text-primary">
              About Us
            </p>
            <p className="text-textColor opacity-65 hover:text-primary">
              Features
            </p>
            <p className="text-textColor opacity-65 hover:text-primary">News</p>
            <p className="text-textColor opacity-65 hover:text-primary">
              Careers
            </p>
            <p className="text-textColor opacity-65 hover:text-primary">
              Service
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 col-span-1">
          <h1 className="text-textColor font-semibold">Company</h1>
          <div className="flex flex-col gap-3">
            <p className="text-textColor opacity-65 hover:text-primary">
              Our Team
            </p>
            <p className="text-textColor opacity-65 hover:text-primary">
              Partners
            </p>
            <p className="text-textColor opacity-65 hover:text-primary">
              With Us
            </p>
            <p className="text-textColor opacity-65 hover:text-primary">FAQ</p>
            <p className="text-textColor opacity-65 hover:text-primary">
              Blogs
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 col-span-1">
          <h1 className="text-textColor font-semibold">Support</h1>
          <div className="flex flex-col gap-3">
            <p className="text-textColor opacity-65 hover:text-primary">
              About
            </p>
            <p className="text-textColor opacity-65 hover:text-primary">
              Support Center
            </p>
            <p className="text-textColor opacity-65 hover:text-primary">
              Feedback
            </p>
            <p className="text-textColor opacity-65 hover:text-primary">
              Contact us
            </p>
            <p className="text-textColor opacity-65 hover:text-primary">
              Accessibility
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 col-span-1">
          <h1 className="text-textColor font-semibold">Get in touch</h1>
          <div className="flex flex-col gap-3">
            <p className="text-textColor opacity-65 hover:text-primary">
              (+123) 456 789 123
            </p>
            <p className="text-textColor opacity-65 hover:text-primary">
              example@mail.com
            </p>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-lg text-textColor hover:text-primary" />
              <FaInstagram className="text-lg text-textColor hover:text-primary" />
              <FaFacebookF className="text-lg text-textColor hover:text-primary" />
              <FaXTwitter className="text-lg text-textColor hover:text-primary" />
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-bgGradientFinish p-7 rounded-lg">
          <h1 className="text-textColor text-lg font-bold">Subscribe</h1>
          <div className="mt-8 flex relative">
            <input
              className="text-lg py-1 pl-10 bg-bgColor border-b-[0.5px]  border-l-[0.5px] border-t-[0.5px] border-gray-700 focus:outline-none focus:border-primary rounded-l-lg"
              type="email"
              placeholder="Email address"
            />
            <div className="absolute top-[10px] left-3">
              <MdOutlineEmail className=" text-lg text-textColor" />
            </div>
            <button className="py-1 bg-primary px-3 rounded-r-lg">
              <FaArrowRightLong className="text-lg text-textColor" />
            </button>
          </div>
          <p className="text-xs leading-5 text-textColor font-medium opacity-75 mt-4">
            Subscribe to email notifications to get notified for all money
            saving and tummy filling offers. Enter your email address to get
            started
          </p>
        </div>
      </div>
      <div className="w-full mt-10 border-t-[0.5px] border-t-gray-200 ">
        <div className="container mx-auto py-5 flex justify-between items-center">
          <div>
            <h1 className="text-base text-textColor font-semibold opacity-70">Designed and developed by Meraj Hossain</h1>
          </div>
          <div className="flex gap-5">
            <h1 className="text-base font-medium text-textColor opacity-70">Terms</h1>
            <h1 className="text-base font-medium text-textColor opacity-70">Privacy</h1>
            <h1 className="text-base font-medium text-textColor opacity-70">Cookies</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-300
