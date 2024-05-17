import React from 'react'
import ProfileCard from '../components/ProfileCard'
import MainCard from '../components/MainCard'
const ProfilePage = () => {
  return (
    <div className="w-screen  flex justify-around items-start pb-32 overflow-x-hidden  bg-indigo-200 dark:bg-gray-900 ">
      <div className=" -ml-6  -mt-10" style={{ width: "30%" }}>
        <ProfileCard />
      </div>

      <div className="w-9/12 -ml-72 mt-[104px]" style={{ width: "70%" }}>
        <MainCard />
      </div>
    </div>
  );
}

export default ProfilePage
