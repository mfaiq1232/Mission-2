import React from 'react'
import Button from './Button'
import { IoCalendarOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FaMobileAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { SiSkypeforbusiness } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const ProfileCard = () => {
  return (
    <div className="bg-white w-64 h-[30rem] flex flex-col items-center rounded-2xl overflow-hidden font-poppins">

      <div
        style={{ height: "45%" }}
        className="mt-24 space-y-2 flex flex-col items-center justify-center -ml-"
      >
        <h1 className="text-3xl font-bold text-gray-700 pb-2">M Faiq Israr</h1>
        <div className="flex items-center justify-center bg-gray-200 w-40 h-6 text-center rounded-full text-sm text-gray-500 ">
          <h3>Software Engineer</h3>
        </div>
        <div className='flex justify-center items-center gap-4 text-gray-700 pt-2'>
          <FaFacebookF />
          <FaXTwitter />
          <FaLinkedinIn />
        </div>
      </div>

      <div style={{ height: "55%" }} className=" bg-gray-100 w-full py-8 ">
        <div className="pl-6 text-gray-500 text-sm space-y-3">
          <div className="flex justify-start items-center space-x-2">
            <IoCalendarOutline />
            <p>December 1, 2003</p>
          </div>

          <div className="flex justify-start items-center space-x-2">
            <GoLocation style={{ fontSize: "15px" }} />
            <p>Karachi, Pakistan</p>
          </div>

          <div className="flex justify-start items-center space-x-2">
            <TfiEmail style={{ fontSize: "15px" }} />
            <p>faiq@gmail.com</p>
          </div>

          <div className="flex justify-start items-center space-x-2">
            <FaMobileAlt style={{ fontSize: "15px" }} />
            <p>+92-3402311232</p>
          </div>

          <div className="flex justify-start items-center space-x-2">
            <SiSkypeforbusiness style={{ fontSize: "15px" }} />
            <p>faiq_israr</p>
          </div>
        </div>
        <div className="flex items-center justify-center pt-4">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard
