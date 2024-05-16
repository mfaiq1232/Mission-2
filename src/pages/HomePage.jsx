import React from 'react'
import { useNavigate } from "react-router-dom";
import logBack from "../assets/logBack.jpg";

const HomePage = () => {
      const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/profile')
    }
  return (
    <div
      className="h-screen flex justify-center items-center bg-cover"
      style={{
        backgroundImage: `url(${logBack})`,
      }}
    >
      <div className=" font-poppins text-gray-700 font-bold text-3xl">
        <h1>Welcome, Back!</h1>
        <button
          onClick={handleClick}
          className="h-10 w-44 bg-blue-600 rounded-3xl ml-8 mt-6 text-white text-lg font-semibold hover:bg-blue-700 "
        >
          Profile
        </button>
      </div>
    </div>
  );
}

export default HomePage
