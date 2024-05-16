import React from 'react'
import { MdMovieEdit } from "react-icons/md";

const SkillsCard = ({icon:Icon,iconStyles, title, description}) => {
  return (
    <div className=" flex justify-between items-center  w-96 h-28 rounded-2xl bg-white shadow-gray-300 shadow-md font-poppins">
      <div style={{ width: "20%" }} className="pl-6 pb-6 text-gray-700">
        {<Icon style={iconStyles}/>}
      </div>
      <div style={{ width: "80%" }}>
        <h1 className=' text-gray-700 font-bold pb-1 '>{title}</h1>
        <p className=' text-gray-500 font-semibold text-sm'>
          {description}
        </p>
      </div>
    </div>
  );
}

export default SkillsCard
