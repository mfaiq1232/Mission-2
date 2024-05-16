import React from 'react'
import SkillsCard from './SkillsCard';
import { CgBrowser } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { BsCamera2 } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

const MainCard = () => {
  return (
    <div className=" bg-white pt-6  rounded-2xl overflow-hidden">
      {/* div for about section */}
      <div className="pb-[30px] px-5">
        <div className=" font-poppins text-3xl font-bold text-gray-700 pb-4">
          <h1>About Me</h1>
          <div className="bg-blue-800 w-12 h-1.5 rounded-full mt-1 "></div>
        </div>
        <div className=" font-poppins font-semibold text-gray-500 text-sm">
          <p>
            As a software engineer, I'm driven by a passion for problem-solving
            and innovation. With a keen eye for detail and a knack for logical
            thinking, I thrive in crafting elegant solutions to complex
            technical challenges. My expertise spans across various programming
            languages and technologies, allowing me to adapt quickly to evolving
            industry trends.
            <br /> Whether it's developing scalable web applications, optimizing
            algorithms for efficiency, or collaborating with cross-functional
            teams
          </p>
        </div>
      </div>

      {/* div for what I'm Doing section */}
      <div className=" bg-gray-100 w-full px-5 font-poppins ">
        <h1 className="text-gray-700 font-bold text-2xl pt-4">
          What I'm Doing
        </h1>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-1 md:grid-cols-2  pt-4 pb-8">
          <SkillsCard
            title="Web Design"
            description={
              "The most modern and high qualtiy design made at professional level."
            }
            icon={CgWebsite}
            iconStyles={{ fontSize: "35px" }}
          />

          <SkillsCard
            title="Web Development"
            description={
              "High qualtiy development of the sites at a professional level."
            }
            icon={FaLaptopCode}
            iconStyles={{ fontSize: "35px" }}
          />

          <SkillsCard
            title="Mobile Apps"
            description={
              "Professional development of applications for iOS and Android."
            }
            icon={FaMobileScreenButton}
            iconStyles={{ fontSize: "35px" }}
          />

          <SkillsCard
            title="Photography"
            description={
              "I make high quality photos of every category at professional level."
            }
            icon={BsCamera2}
            iconStyles={{ fontSize: "35px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default MainCard
