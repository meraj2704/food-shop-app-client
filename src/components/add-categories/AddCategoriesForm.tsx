'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDropzone } from 'react-dropzone';
import { CiEraser } from 'react-icons/ci';
import { FiSave } from 'react-icons/fi';
import { categorySchema } from './categorySchema';
import TextInput from '../ui/TextInput';
import { baseUrl } from '@/api/api';

const AddCategoriesForm: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(categorySchema),
  });
  const onSubmit = (data: any) => {
    console.log("onsubmit")
    alert(JSON.stringify(data));
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('shortNote', data.shortNote);

    if (imageFile) {
      formData.append('file', imageFile);
    }
    fetch(`${baseUrl}/category`, {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        // if(result.success) {
        //   alert('Category added successfully');
        // }
        console.log('Form submitted:', result);
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setImageFile(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop,
    maxFiles: 1, // Only allow one image
  });

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
            name="shortNote"
            label="Short Note"
            control={control}
            errors={errors}
            placeholder="Short note"
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
              imageFile ? 'border' : 'border-2 border-dashed'
            } border-primary rounded-lg bg-bgGradientFinish flex flex-col justify-center items-center`}
          >
            {imageFile ? (
              <img
                className="w-full h-full rounded-lg object-cover"
                src={URL.createObjectURL(imageFile)}
                alt="Image uploaded"
              />
            ) : (
              <h1 className="text-textColor">Upload Image</h1>
            )}
          </div>
        </div>
        <div className="flex justify-end items-center gap-5 mt-5">
          <button type="button" className="flex items-center gap-3 px-4 py-2 rounded-lg bg-cancelButton text-red-700 hover:text-red-800">
            <CiEraser /> <p>Cancel</p>
          </button>
          <button type="submit" className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary hover:bg-bgGradient text-white">
            <FiSave /> <p>Save</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategoriesForm;
