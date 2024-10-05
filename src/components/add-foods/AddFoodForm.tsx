"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { CiEraser } from "react-icons/ci";
import { FiSave } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import { getCategories, useAddMethod } from "@/api/api";
import Input from "../ui/Input";
import SelectController from "../ui/SelectController";
import TextArea from "../ui/TextArea";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "./Schema";
import Image from "next/image";
import Loader from "../ui/Loader";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddFoodForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { isLoading: allCategoriesLoading, data: allCategories } = useQuery({
    queryKey: ["allCategories"],
    queryFn: () => getCategories(),
  });

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setImageFile(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop,
    maxFiles: 1, 
  });

  const { mutate } = useAddMethod({
    endpoint: "food",
    key: "allFoods",
  });

  const onSubmit = (data: any) => {
    console.log("clicked")
    setIsLoading(true);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("category_id", data.category_id);
    formData.append("price", data.price);
    formData.append("quantity", data.quantity);
    formData.append("unit", data.unit);
    formData.append("description", data.description);
    if (imageFile) {
      formData.append("file", imageFile);
    }

    mutate(formData, {
      onSuccess: () => {
        setIsLoading(false);
        toast.success("Food added successfully!")
        // alert("Category added successfully");
        reset(); // Reset the form without default values
        setImageFile(null); // Reset the image
      },
      onError: () => {
        setIsLoading(false);
        toast.error("Error adding category!")
        // alert("Error adding category");
      },
    });
  };

  if (allCategoriesLoading || isLoading) return <Loader />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex gap-5 mt-5">
      <div className="w-1/3 flex flex-col gap-4 p-5 border-[1px] border-borderColor rounded-lg">
        <div
          {...getRootProps()}
          className="px-10 py-16 border-[1px] border-borderColor rounded-lg"
        >
          <input {...getInputProps()} />
          <div className="w-56 h-56 border-2 border-dashed border-primary rounded-lg bg-bgGradientFinish flex justify-center items-center">
            {imageFile ? (
              <Image
                className="w-full h-full rounded-lg object-cover"
                src={URL.createObjectURL(imageFile)}
                alt="Uploaded Image"
                width={200}
                height={200}
              />
            ) : (
              <h1 className="text-textColor">Upload Image</h1>
            )}
          </div>
        </div>
      </div>

      <div className="w-2/3">
        <div className="w-full flex gap-5 border-[1px] border-borderColor p-5 rounded-lg">
          <div className="w-1/2">
            <Input
              type="text"
              name="name"
              label="Product Name"
              control={control}
              placeholder="Enter product name"
              errors={errors}
            />

            <SelectController
              name="category_id"
              control={control}
              options={allCategories}
              label="Product Category"
              valueKey="_id"
              labelKey="name"
              defaultValue=""
            />

            <Input
              type="number"
              name="price"
              label="Selling Price"
              control={control}
              placeholder="Enter Product Selling price"
              errors={errors}
            />

            <Input
              type="number"
              name="quantity"
              label="Quantity"
              control={control}
              placeholder="Enter Product Quantity"
              errors={errors}
            />
            <Input
              type="text"
              name="unit"
              label="Unit"
              control={control}
              placeholder="Enter Product Unit"
              errors={errors}
            />
          </div>

          <div className="w-1/2">
            <TextArea
              name="description"
              label="Product Description"
              control={control}
              errors={errors}
              placeholder="Enter product description"
              rows={16}
              cols={50}
            />
          </div>
        </div>

        <div className="flex justify-end items-center gap-5 mt-5">
          <button
            type="button"
            onClick={() => {
              reset(); // Reset the form without default values
              setImageFile(null); // Reset the image state
            }}
            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-cancelButton text-red-700"
          >
            <CiEraser /> <p>Cancel</p>
          </button>
          <button
            type="submit"
            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary text-white"
          >
            <FiSave /> <p>Save</p>
          </button>
        </div>
      </div>
      
    </form>
  );
};

export default AddFoodForm;
