"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDropzone } from "react-dropzone";
import { CiEraser } from "react-icons/ci";
import { FiSave } from "react-icons/fi";
import { categorySchema } from "./categorySchema";
import TextInput from "../ui/TextInput";
import { baseUrl, useAddMethod } from "@/api/api";
import Loader from "../ui/Loader";
import Image from "next/image";

const AddCategoriesForm: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(categorySchema),
  });

  const { mutate } = useAddMethod({
    endpoint: "category",
    key: "addCategory",
  });
  const onSubmit = (data: any) => {
    // console.log("onsubmit");
    // alert(JSON.stringify(data));
    setIsLoading(true);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);

    if (imageFile) {
      formData.append("file", imageFile);
    }
    mutate(formData, {
      onSuccess: () => {
        setIsLoading(false);
        alert("Category added successfully");
        reset();
        setImageFile(null); // Reset the image file state
      },
      onError: (error) => {
        setIsLoading(false);
        alert("Error adding category:");
      },
    });
  };

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setImageFile(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop,
    maxFiles: 1, // Only allow one image
  });

  if (isLoading) return <Loader />;

  return (
    <div className="w-full mt-5 border-[1px] border-borderColor p-10 rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex justify-between gap-5">
          <TextInput
            name="name"
            label="Category Name"
            control={control}
            errors={errors}
            placeholder="Category name"
          />
          <TextInput
            name="description"
            label="Description"
            control={control}
            errors={errors}
            placeholder="Enter short description"
          />
        </div>
        <div
          {...getRootProps()}
          className="flex justify-center items-center px-10 py-16 border-[1px] border-borderColor rounded-lg"
        >
          <input {...getInputProps()} />
          <div
            id="drop-area"
            className={`w-56 h-56 ${
              imageFile ? "border" : "border-2 border-dashed"
            } border-primary rounded-lg bg-bgGradientFinish flex flex-col justify-center items-center`}
          >
            {imageFile ? (
              <Image
                className="w-full h-full rounded-lg object-cover"
                src={URL.createObjectURL(imageFile)}
                alt="Image uploaded"
                width={200}
                height={200}
              />
            ) : (
              <h1 className="text-textColor">Upload Image</h1>
            )}
          </div>
        </div>
        <div className="flex justify-end items-center gap-5 mt-5">
          <button
            type="button"
            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-cancelButton text-red-700 hover:text-red-800"
          >
            <CiEraser /> <p>Cancel</p>
          </button>
          <button
            type="submit"
            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary hover:bg-bgGradient text-white"
          >
            <FiSave /> <p>Save</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategoriesForm;
