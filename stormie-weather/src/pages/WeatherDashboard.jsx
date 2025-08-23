import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from '../utils/openweather';
import SearchBar from '../components/SearchBar';
import SideBar from '../components/SideBar';
import DailyForecastBar from '../components/DailyForecastBar';
import HourlyForecastBar from '../components/HourlyForecastBar';
import AirConditionBar from '../components/AirConditionBar';

const WeatherDashboard = () => {
  const [rain, setRain] = useState(null);
  const [city, setCity] = useState(localStorage.getItem("city"));

  useEffect(() => {
    async function fetchData() {
      const data = await fetchWeatherData(city); //Hard coding a city for now
      if (data && data.list && data.list.length > 0) {
        const pop = data.list[0].pop;
        // converting the chance of rain to percentage
        setRain(pop * 100);
      }
    } fetchData();
  }, [city]);

  return (
    <div className='fixed w-full min-h-screen bg-gray-950'>
      <div className="flex">
        <aside className="fixed h-full w-64 bg-gray-500">
          <SideBar/>
        </aside>
        
        <main className="flex-1 ml-64 min-h-screen">
          <div>
            <SearchBar onSubmit={({ city }) => {
              localStorage.setItem("city", city);
              fetchWeatherData(city).then((data) => {
                if (data && data.list && data.list.length > 0) {
                  const pop = data.list[0].pop;
                  setRain(pop*100);
                }
              })
            }

            }/>
          </div>
          
          <div className='flex flex-row gap-6 pl-6'>
            <div className='flex-1 flex flex-col gap-6 pt-30'>
              
              <h1 className='pl-6 text-2xl text-gray-200'>
                London
              </h1>
              <p className='pl-6 text-xl text-gray-200'>
                Chance of rain: {rain}%  {/**Round the value to the nearest whole number */}
              </p>

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