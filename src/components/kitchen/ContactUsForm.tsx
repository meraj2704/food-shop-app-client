"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactUsForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [firstNameFieldSelected,setFirstNameFieldSelected] = useState(false)
  const [lastNameFieldSelected,setLastNameFieldSelected] = useState(false)
  const [emailFieldSelected,setEmailSelected] = useState(false)
  const [phoneFieldSelected,setPhoneFiledSelected] = useState(false)
  const [subFieldSelected,setSubFieldSelected] = useState(false)
  const [messageFieldSelected,setMessageSelected] = useState(false)

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // Handle form submission
  };

  const handleCancel = () => {
    reset();
  };

  return (
    <div className="py-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex justify-between items-center gap-4 mb-10">
          <div className="w-1/2 ">
            <input
            onClick={()=>setFirstNameFieldSelected(true)}
              {...register("firstName", { required: "First Name is required" })}
              className={`w-full py-4 bg-transparent text-lg font-medium text-black px-1 outline-none placeholder-gray-500 border-b-[2px] ${firstNameFieldSelected ? 'border-b-red-500':'border-b-[#010202]'}`}
              type="text"
              placeholder="First Name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          <div className="w-1/2">
            <input
             onClick={()=>setLastNameFieldSelected(true)}
              {...register("lastName", { required: "Last Name is required" })}
               className={`w-full py-4 bg-transparent text-lg font-medium text-black px-1 outline-none placeholder-gray-500 border-b-[2px] ${lastNameFieldSelected ? 'border-b-red-500':'border-b-[#010202]'}`}
              type="text"
              placeholder="Last Name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-4 mb-10">
          <div className=" w-1/2">
            <input
             onClick={()=>setEmailSelected(true)}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
               className={`w-full py-4 bg-transparent text-lg font-medium text-black px-1 outline-none placeholder-gray-500 border-b-[2px] ${emailFieldSelected ? 'border-b-red-500':'border-b-[#010202]'}`}
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className=" w-1/2">
            <input
             onClick={()=>setPhoneFiledSelected(true)}
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Invalid phone number",
                },
              })}
               className={`w-full py-4 bg-transparent text-lg font-medium text-black px-1 outline-none placeholder-gray-500 border-b-[2px] ${phoneFieldSelected ? 'border-b-red-500':'border-b-[#010202]'}`}
              type="tel"
              placeholder="Phone"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="mb-10 ">
          <input
           onClick={()=>setSubFieldSelected(true)}
            {...register("subject", { required: "Subject is required" })}
             className={`w-full py-4 bg-transparent text-lg font-medium text-black px-1 outline-none placeholder-gray-500 border-b-[2px] ${subFieldSelected ? 'border-b-red-500':'border-b-[#010202]'}`}
            type="text"
            placeholder="Subject"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject.message}</p>
          )}
        </div>

        <div className="mb-10">
          <input
           onClick={()=>setMessageSelected(true)}
            {...register("message", { required: "Message is required" })}
             className={`w-full py-4 bg-transparent text-lg font-medium text-black px-1 outline-none placeholder-gray-500 border-b-[2px] ${messageFieldSelected ? 'border-b-red-500':'border-b-[#010202]'}`}
            placeholder="Message"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <div className="flex w-full space-x-4 mt-16">
          <button
            type="submit" 
            className="w-1/2 py-4 bg-black text-white  hover:scale-95 text-xl font-medium transition duration-500"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleCancel}
             className="w-1/2 py-4 bg-white text-black border-[2px] border-[#010202]  hover:scale-95 text-xl font-medium transition duration-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
