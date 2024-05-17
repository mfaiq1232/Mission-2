import React from "react";
import { useNavigate } from "react-router-dom";
import logBack from "../assets/logBack.jpg";
import LogoutButton from "../components/LogoutButton";

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/profile");
  };

  
  return (
    <div>
        <LogoutButton/>
      
      <div
        className="h-screen flex justify-center items-center bg-cover bg-indigo-200 dark:bg-gray-800"
        // style={{
        //   backgroundImage: `url(${logBack})`,
        // }}
      >
        <div className=" font-poppins text-gray-700 dark:text-white  font-bold text-3xl">
          <h1>Welcome, Back!</h1>
          <button
            onClick={handleClick}
            className="h-10 w-44 bg-blue-600  rounded-3xl ml-8 mt-6 text-white text-lg font-semibold hover:bg-blue-700 "
          >
            Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
