import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";

const AdminFooter = () => {
  return (
    <div
      className={`h-full border-t-[1px]  border-borderColor flex justify-between items-center px-10 py-5`}
    >
      
      <h1>Developed by <a href="https://portfolio2-one-rust.vercel.app/" target="blank" className="text-primary">Meraj Hossain</a></h1>
    </div>
  );
};

export default AdminFooter;
