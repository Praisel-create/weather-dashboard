import React from 'react';
import SearchBar from '../components/SearchBar';
import SideBar from '../components/SideBar';
import DailyForecastBar from '../components/DailyForecastBar';
import HourlyForecastBar from '../components/HourlyForecastBar';
import AirConditionBar from '../components/AirConditionBar';

const WeatherDashboard = () => {
  return (
    <div>
        <div className="flex flex-col">
            <SearchBar/>
            <div className='flex flex-row'>
                <div>
                    <SideBar/>
                </div>
                <div className='flex flex-col'>
                    <HourlyForecastBar/>
                    <AirConditionBar/>
                </div>
                <div>
                    <DailyForecastBar/>
                </div>
            </div>
            </div>
    </div>
  )
}

export default WeatherDashboard