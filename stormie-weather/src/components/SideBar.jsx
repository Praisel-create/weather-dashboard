import React from 'react'
import { 
        FaCloudSunRain, 
        FaList,
        FaMap,
        FaSlidersH
      } from "react-icons/fa";


const SideBar = () => {

  return (
    <div className="flex flex-col items-center justify-center pt-20 pl-15 text-gray-400">
      <div>
        <button className="flex flex-col items-center justify-center">
          Weather
          <FaCloudSunRain />
        </button>
      </div>
      <div className="pt-20">
        <button className="flex flex-col items-center justify-center">
          Cities
          <FaList />
        </button>
      </div>
      <div className="pt-20">
        <button className="flex flex-col items-center justify-center">
          Map
          <FaMap/>
        </button>
      </div>
      <div className="pt-20">
        <button className="flex flex-col items-center justify-center">
          Settings
          <FaSlidersH/>
        </button>
      </div>
      
    </div>
  )
}

export default SideBar