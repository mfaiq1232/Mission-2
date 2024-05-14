import React from "react";
import { HiOutlineDownload } from "react-icons/hi";

const Button = () => {
  return (
    <div className=" bg-blue-600  w-44 h-12 flex items-center justify-center text-white rounded-2xl hover:bg-blue-700 hover:cursor-pointer select-none shadow-xl shadow-blue-200/50 font-poppins">
      <HiOutlineDownload
        className=" mr-1"
        style={{ color: "white", fontSize: "20px" }}
      />
      <div className="text-[14px]">Download CV</div>
    </div>
  );
};

export default Button;
