import React from 'react'
import ProfileCard from '../components/ProfileCard'
import MainCard from '../components/MainCard'

const ProfilePage = () => {
  return (
    <div
      className="w-screen  flex justify-around items-start bg-cover pb-32 overflow-x-hidden bg-gradient-to-r from-blue-200 to-indigo-200"
    
    >
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
