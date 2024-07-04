import Image from "next/image";
import React from "react";
import testimonials from "../../assets/testimonials.png";
import StarIcon from "@mui/icons-material/Star";
import jack from "../../assets/jack.png";

const TestimonialsCom = () => {
  return (
    <div className="flex justify-between items-center mx-16 my-10">
      <div className="w-1/2">
        <Image src={testimonials} alt="testimonials"></Image>
      </div>
      <div className="w-1/2">
        <div className="w-32 bg-[#FDE4D0] py-2 px-4 rounded-3xl mb-10">
          <p className="text-base text-primary">Testimonials</p>
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
          <div className="grid grid-cols-12">
            <div className="col-span-1">
              <h1 className="text-9xl font-bold text-primary">{"“"}</h1>
            </div>
            <div className="col-span-10">
              <p className="py-8">The food of the place is really awesome with a special menu item might be seasonal {'"'}Mango broccoli sandwich{'"'} which is really something you should give a shot. The sandwich is filled with cottage cheese, Mango and broccoli layer with more add-on toppings in it.</p>
            </div>
            <div className="col-span-1 ">
              <h1 className="text-9xl font-bold text-primary">{"”"}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCom;
