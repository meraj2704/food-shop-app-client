// components/AddFoodForm.tsx
"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import CustomSelect from "../ui/CustomSelect";
import { useDropzone } from "react-dropzone";
import { Switch } from "@/components/ui/switch";
import { CiEraser } from "react-icons/ci";
import { FiSave } from "react-icons/fi";
// import { Calendar } from "@/components/ui/calendar"

const AddFoodForm = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isChecked, setIsChecked] = useState(false);
  const [images, setImages] = useState<Array<string | ArrayBuffer | null>>([]);

  const categories = [
    { value: "", label: "Select category" },
    { value: "Italian", label: "Italian" },
    { value: "BBQ", label: "BBQ" },
    { value: "Mexican", label: "Mexican" },
  ];

  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result]);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop,
    maxFiles: 3,
    multiple: false,
  });
  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    <div className="w-full flex gap-5 items-start mt-5">
      <div className="w-1/3 flex flex-col gap-4 p-5 border-[1px] border-borderColor rounded-lg">
        <div
          {...getRootProps()}
          className="flex justify-center items-center px-10 py-16 border-[1px] border-borderColor rounded-lg"
        >
          <input {...getInputProps()} />
          <div
            id="drop-area"
            className={`w-56 h-56 border-2 border-dashed border-primary rounded-lg bg-bgGradientFinish flex justify-center items-center`}
          >
            <h1 className="text-textColor">Upload Image</h1>
          </div>
        </div>
        <div>
          <h1 className="text-textColor">Additional Images</h1>
          <div className="w-full grid grid-cols-2 items-center gap-5 mt-5">
            {images.length === 0 && (
              <>
                <div className="col-span-1 h-40 border-borderColor border-dashed border-[1px] rounded-lg"></div>
                <div className="col-span-1 h-40 border-borderColor border-dashed border-[1px] rounded-lg"></div>
              </>
            )}
            {images.length === 1 && (
              <>
                <div className="col-span-1 h-40 border-borderColor border-dashed border-[1px] rounded-lg"></div>
                <div className="col-span-1 h-40 border-borderColor border-dashed border-[1px] rounded-lg">
                  {typeof images[0] === "string" && (
                    <img src={images[0]} className="w-full h-full" />
                  )}
                </div>
              </>
            )}
            {images.length > 1 && (
              <>
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="col-span-1 h-40 border-borderColor border-dashed border-[1px] rounded-lg"
                  >
                    {typeof image === "string" && (
                    <img src={image} className="w-full h-full" />
                  )}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="w-2/3">
        <div className="w-full flex gap-5 border-[1px] border-borderColor p-5 rounded-lg">
          <div className="w-1/2">
            <div className="flex flex-col gap-2 mb-6">
              <label className="text-base text-textColor">Product Name</label>
              <input
                type="text"
                className={`w-full bg-bgColor border-[1px] ${
                  theme === "dark" ? "border-gray-800" : "border-gray-200"
                } rounded-lg px-4 py-2 focus:outline-none focus:border-primary text-textColor text-base`}
                placeholder="Product name"
              />
            </div>
            <CustomSelect
              label="Product Category"
              options={categories}
              value={selectedCategory}
              onChange={setSelectedCategory}
            />
            <div className="w-full flex justify-between items-center gap-5">
              <div className="w-1/2 flex flex-col gap-2 mb-6">
                <label className="text-base text-textColor">
                  Selling price
                </label>
                <input
                  type="text"
                  className={`w-full bg-bgColor border-[1px] ${
                    theme === "dark" ? "border-gray-800" : "border-gray-200"
                  } rounded-lg px-4 py-2 focus:outline-none focus:border-primary text-textColor text-base`}
                  placeholder="Selling price"
                />
              </div>
              <div className="w-1/2 flex flex-col gap-2 mb-6">
                <label className="text-base text-textColor">Cost price</label>
                <input
                  type="text"
                  className={`w-full bg-bgColor border-[1px] ${
                    theme === "dark" ? "border-gray-800" : "border-gray-200"
                  } rounded-lg px-4 py-2 focus:outline-none focus:border-primary text-textColor text-base`}
                  placeholder="Cost price"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-6">
              <label className="text-base text-textColor">Quantity</label>
              <input
                type="text"
                className={`w-full bg-bgColor border-[1px] ${
                  theme === "dark" ? "border-gray-800" : "border-gray-200"
                } rounded-lg px-4 py-2 focus:outline-none focus:border-primary text-textColor text-base`}
                placeholder="Quantity"
              />
            </div>
            <div className="flex flex-col gap-2 mb-6">
              <label className="text-base text-textColor">Delivery type</label>
              <input
                type="text"
                className={`w-full bg-bgColor border-[1px] ${
                  theme === "dark" ? "border-gray-800" : "border-gray-200"
                } rounded-lg px-4 py-2 focus:outline-none focus:border-primary text-textColor text-base`}
                placeholder="Delivery type"
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col gap-2 mb-6">
              <label className="text-base text-textColor">
                Product Description
              </label>
              <textarea
                rows={16}
                cols={50}
                className={`w-full bg-bgColor border-[1px] ${
                  theme === "dark" ? "border-gray-800" : "border-gray-200"
                } rounded-lg px-4 py-2 focus:outline-none focus:border-primary text-textColor text-base resize-none`}
                placeholder="Product description"
              />
            </div>
            {/* <div className="w-full flex justify-between items-center">
            <Switch />
          </div> */}
          </div>
        </div>
        <div className="flex justify-end items-center gap-5 mt-5">
          <button className="flex items-center gap-3 px-4 py-2 rounded-lg bg-cancelButton text-red-700">
            <CiEraser /> <p>Cancel</p>
          </button>
          <button className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary text-white">
            <FiSave /> <p>Save</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFoodForm;
