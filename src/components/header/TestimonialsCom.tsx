import Image from "next/image";
import React from "react";
import testimonials from "../../../public/assets/testimonials.png";
import jack from "../../../public/assets/jack.png";
import HeaderTag from "../button/HeaderTag";
import { CiStar } from "react-icons/ci";

const TestimonialsCom = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto flex justify-between items-center my-10">
        <div className="w-1/2">
          <Image src={testimonials} width={470} height={525} alt="testimonials"></Image>
        </div>
        <div className="w-1/2">
          <div className=" flex justify-start items-start">
            {" "}
            <HeaderTag header="Testimonials" />
          </div>
          <h1 className="text-3xl font-bold mb-10">What They Say About Us.</h1>
          <div>
            <div className=" p-2 rounded-full flex  items-center  ">
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
                <div className="flex">
                  <CiStar 
                    style={{ color: "#FACC15", fontSize: "14px" }}
                  ></CiStar>{" "}
                  <CiStar 
                    style={{ color: "#FACC15", fontSize: "14px" }}
                  ></CiStar>{" "}
                  <CiStar 
                    style={{ color: "#FACC15", fontSize: "14px" }}
                  ></CiStar>{" "}
                  <CiStar 
                    style={{ color: "#FACC15", fontSize: "14px" }}
                  ></CiStar>{" "}
                  <CiStar 
                    style={{ color: "#FACC15", fontSize: "14px" }}
                  ></CiStar>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-1">
                <h1 className="text-9xl font-bold text-primary">{"“"}</h1>
              </div>
              <div className="col-span-10">
                <p className="py-8 opacity-50">
                  The food of the place is really awesome with a special menu
                  item might be seasonal {'"'}Mango broccoli sandwich{'"'} which
                  is really something you should give a shot. The sandwich is
                  filled with cottage cheese, Mango and broccoli layer with more
                  add-on toppings in it.
                </p>
              </div>
              <div className="col-span-1 ">
                <h1 className="text-9xl font-bold text-primary">{"”"}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCom;
