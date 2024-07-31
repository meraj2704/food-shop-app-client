import React from "react";
import ContactUsForm from "./ContactUsForm";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactUsComponent: React.FC = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="container mx-auto py-36">
        <div className=" h-full flex items-center gap-10">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12280.950998026896!2d90.40216784222126!3d23.777723006367722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79b9bb31065%3A0x11da1fffa0040020!2sMY%20KITCHEN!5e0!3m2!1sen!2sbd!4v1720418340033!5m2!1sen!2sbd&zoom=14&disableDefaultUI=false&scrollwheel=false"
              width="852"
              height="498"
              style={{ border: "1px solid #939393" }}
              allowFullScreen
              loading="lazy"
        
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="h-[90%] border-l-[4px] border-l-[#939393]">
            <div className="flex flex-col px-10 py-8 gap-y-8">
              <div>
                <h1 className="text-[#1C1C1C] text-3xl leading-9">Address</h1>
                <p className="text-lg leading-7 text-[#444444] mt-2">
                  House 8, Road 138, Gulshan 1, Dhaka, Bangladesh, 1212
                </p>
              </div>
              <div>
                <h1 className="text-[#1C1C1C] text-3xl leading-9">Mobile</h1>
                <p className="text-lg leading-7 text-[#444444] mt-2">
                  01642-912612
                </p>
              </div>
              <div>
                <h1 className="text-[#1C1C1C] text-3xl leading-9">Email</h1>
                <p className="text-lg leading-7 text-[#444444] mt-2">
                  info@mykitchen-bd.com
                </p>
              </div>
              <div>
                <h1 className="text-[#1C1C1C] text-base font-bold leading-9">
                  Connect With Us
                </h1>
                <div className="flex gap-3">
                  {" "}
                  <div className="flex justify-center items-center px-[4px] py-[4px] bg-gray-600 hover:bg-red-600 duration-300 rounded-md">
                    <FaFacebookF fontSize={32} color="#ffffff" className="" />
                  </div>
                  <div className="flex justify-center items-center px-[4px] py-[4px] bg-gray-600 hover:bg-red-600 w-fit duration-300 rounded-md">
                    <FaInstagram fontSize={32} color="#ffffff" className="" />
                  </div>
                  <div className="flex justify-center items-center px-[4px] py-[4px] bg-gray-600 hover:bg-red-600 w-fit duration-300 rounded-md">
                    <FaLinkedinIn fontSize={32} color="#ffffff" className="" />
                  </div>
                  <div className="flex justify-center items-center px-[4px] py-[1px] bg-gray-600 hover:bg-red-600 w-fit duration-300 rounded-md">
                    <FaXTwitter fontSize={32} color="#ffffff" className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="text-3xl text-[#1C1C1C] leading-9">
            Customer Support
          </h1>
          <p className="text-sm text-[#646464] mt-2">
            All fields are mandatory to fill
          </p>
          <div>
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;
