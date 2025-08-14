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
        <button className="flex flex-col items-center justify-center pt-10 hover:text-lg hover:text-gray-100">
          Weather
          <FaCloudSunRain />
        </button>
      </div>
      <div className="pt-10">
        <button className="flex flex-col items-center justify-center hover:text-lg hover:text-gray-100">
          Cities
          <FaList />
        </button>
      </div>
      <div className="pt-10">
        <button className="flex flex-col items-center justify-center hover:text-lg hover:text-gray-100">
          Map
          <FaMap/>
        </button>
      </div>
      <div className="pt-10">
        <button className="flex flex-col items-center justify-center hover:text-lg hover:text-gray-100">
          Settings
          <FaSlidersH/>
        </button>
      </div>
      
    </div>
  )
}

export default SideBar