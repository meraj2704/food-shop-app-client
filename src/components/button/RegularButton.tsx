import React from "react";
interface RegularButtonProps {
  btnTitle: string;
}

const RegularButton = ({ btnTitle }: RegularButtonProps) => {
  return (
    <div className="flex justify-start items-start">
      <div className="h-[60px] flex justify-center items-center text-white py-5 px-8 bg-primary rounded-full font-bold">
        {btnTitle}
      </div>
    </div>
  );
};

export default RegularButton;
