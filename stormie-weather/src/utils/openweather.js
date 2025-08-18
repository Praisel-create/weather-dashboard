const API_KEY = 'b5da4e3b6344f0d3accf0a8101cd4188';

export const fetchWeather = async (cityName) => {
    const response = await fetch (
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`
    )
}