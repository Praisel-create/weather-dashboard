import React from 'react';
import SearchBar from '../components/SearchBar';
import SideBar from '../components/SideBar';
import DailyForecastBar from '../components/DailyForecastBar';
import HourlyForecastBar from '../components/HourlyForecastBar';
import AirConditionBar from '../components/AirConditionBar';

const WeatherDashboard = () => {
  return (
    <div className='fixed w-full min-h-screen bg-gray-950'>
      <div className="flex">
        {/* Fixed sidebar - now wider (w-64) */}
        <aside className="fixed h-full w-64 bg-gray-500 z-10">
          <SideBar/>
        </aside>
        
        {/* Main content area - offset by sidebar width (ml-64) */}
        <main className="flex-1 ml-64 min-h-screen">
          <div>
            <SearchBar/>
          </div>
          
          <div className='flex flex-col lg:flex-row pt-20'>
            <div className='flex-1 flex flex-col gap-6'>
              <HourlyForecastBar/>
              <AirConditionBar/>
            </div>
            
            <div className='flex-1'>
              <DailyForecastBar/>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default WeatherDashboard;