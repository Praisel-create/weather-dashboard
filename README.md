# weather-dashboard

# weather-dashboard

Weather Dashboard (with Search & Forecast)
What I aim to learn: Working with real-time APIs, conditional rendering, date/time formatting, icons, localStorage.


Bonus challenges:
Add search history using localStorage.
Allow the user to toggle between Celsius and Fahrenheit.


Techs: OpenWeather API, React, Tailwind, and whatever else I think I’d need later on.

Search for a location (city)
Search for the weather conditions in that city
5-day forecast
Include Icons/Emojis that closely represent the weather condition of that city
Interactive Map

APIs and Modules


ACTION
SOURCE
1
GEOCODE
OpenCage Data
2
Date and Time
Date()
3
Weather forecast
OpenWeather API (5 day weather forecast - OpenWeatherMap)
4
Emojis
OpenWeather API (list.weather.icon)
5
Interactive Map
Leaflet.js + OpenStreetMap


Something to track the geocode of each city - OpenCage Data
Something to track the date and time - Date()
Something to track the weather, using the location/geocode in the argument - OpenWeather API (lon, lat, apikey)  - 5 day weather forecast - OpenWeatherMap
Something for the Emojis - Openweatherapi (list.weather.icon)
Something for the interactive map - Leaflet.js + OpenStreetMap

Features
Search bar (to search for cities)
Current weather display (temperature, condition, humidity)
Hourly forecast
5-day forecast
Interactive map button  
Weather by user’s location (Geolocation)
Dynamic background/icons based on weather condition 

Components:
1. SearchBar.jsx
  - Get the user’s city.
  - Store the city in the localStorage
2. SideBar.jsx
  - City (A scrollable pop-up with a list of all the cities)
  - Settings (To change the appearance)
  - InteractiveMap (An interactive map to choose a city on the map of the world)
3. FiveForecastBar.jsx
  - 5 day forecast bar
4. HourlyForecastBar.jsx
  - Hourly forecast bar
5. WeatherConditionBar.jsx
  - Temperature
  - Condition
  - Humidity

1. 🔍 SearchBar.jsx
  - Responsibilities:
      Get user's input (city name)
      Trigger search or fetch
      Save city in localStorage`
  - Suggestion:
      Add onSubmit as a prop (to pass the value to the parent)
      Save recent searches
      Maybe show a “search history” dropdown?
✅ Prefill the input with the last city from localStorage

2. 📚 SideBar.jsx
  - Responsibilities:
      List of all cities (e.g., from API or a static list)
      Settings (light/dark theme toggle, units toggle °C/°F)
      Interactive map
  - Suggestion:
      Break this down into sub-components:
      CityList.jsx
      Settings.jsx
      InteractiveMap.jsx
✅ That keeps SideBar.jsx clean and easier to manage.

3. 📅 FiveForecastBar.jsx
  - Responsibilities:
      Display 5-day forecast
      Show date, icon, min/max temperature
  - Suggestion:
      Create a ForecastCard.jsx sub-component and map through the data
      Consider horizontal scroll or responsive grid for small screens

4. ⏰ HourlyForecastBar.jsx
  - Responsibilities:
      Display hourly weather forecast for the selected city
  - Suggestion:
      Use a horizontal scroll or slider (e.g., react-slick, swiper.js)
      Show time, temp, and icon


5. 🌡️ WeatherConditionBar.jsx
  - Responsibilities:
      Show current weather:
      Temperature
      Weather condition (e.g., Clear, Rainy)
      Humidity
      Wind speed (optional)
  - Suggestion:
      Pull directly from the weather.current API data
      Style it prominently — this is your dashboard’s main display!



src/
├── components/
│   ├── SearchBar.jsx
│   ├── SideBar/
│   │   ├── SideBar.jsx
│   │   ├── CityList.jsx
│   │   ├── Settings.jsx
│   │   └── InteractiveMap.jsx
│   ├── FiveForecastBar/
│   │   ├── FiveForecastBar.jsx
│   │   └── ForecastCard.jsx
│   ├── HourlyForecastBar.jsx
│   ├── WeatherConditionBar.jsx
├── pages/
│   └── Dashboard.jsx
├── utils/
│   └── fetchWeather.js (API logic here)
├── App.jsx
└── main.jsx


