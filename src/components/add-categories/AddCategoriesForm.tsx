// components/AddFoodForm.tsx
"use client";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { CiEraser } from "react-icons/ci";
import { FiSave } from "react-icons/fi";
// import { Calendar } from "@/components/ui/calendar"
const AddCategoriesForm = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
    
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop,
    maxFiles: 3,
    multiple: false,
  });

  return (
    <div className="w-full mt-5 border-[1px] border-borderColor p-10 rounded-lg">
      <form action="">
        <div className="w-full flex justify-between gap-5">
          <div className="w-1/2 flex flex-col gap-2 mb-6">
            <label className="text-base text-textColor">Category Name</label>
            <input
              type="text"
              className={`w-full bg-bgColor border-[1px] border-borderColor rounded-lg px-4 py-2 focus:outline-none focus:border-primary text-textColor text-base`}
              placeholder="Category name"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-2 mb-6">
            <label className="text-base text-textColor">Short Note</label>
            <input
              type="text"
              className={`w-full bg-bgColor border-[1px] border-borderColor rounded-lg px-4 py-2 focus:outline-none focus:border-primary text-textColor text-base`}
              placeholder="Short note"
            />
          </div>
        </div>
        <div
          {...getRootProps()}
          className="flex justify-center items-center px-10 py-16 border-[1px] border-borderColor rounded-lg"
        >
          <input {...getInputProps()} />
          <div
            id="drop-area"
            className={`w-56 h-56 ${image?'border':'border-2 border-dashed'}  border-primary rounded-lg bg-bgGradientFinish flex flex-col justify-center items-center`}
          >
            {
              image? (
                <img
                  className="w-full h-full rounded-lg object-cover"
                  src={image as string}
                  alt="Image uploaded"
                />
              ) : (
                <h1 className="text-textColor">Upload Image</h1>
              )
            }
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
      </form>
    </div>
  );
};

export default AddCategoriesForm;
