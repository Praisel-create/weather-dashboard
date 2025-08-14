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
        <aside className="fixed h-full w-64 bg-gray-500">
          <SideBar/>
        </aside>
        
        <main className="flex-1 ml-64 min-h-screen">
          <div>
            <SearchBar/>
          </div>
          
          <div className='flex flex-row gap-6 pl-6'>
            <div className='flex-1 flex flex-col gap-6 pt-30'>
              
              <h1 className='pl-6 text-2xl text-gray-200'>
                Madrid
              </h1>
              <h2 className='pl-6 text-xl text-gray-200'>
                Chance of rain: 31%
              </h2>

              <HourlyForecastBar/>
              <AirConditionBar/>
            </div>
            
            <div className="flex-1 pt-10">
              <DailyForecastBar/>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default WeatherDashboard;