const API_KEY = 'b5da4e3b6344f0d3accf0a8101cd4188';

export const fetchTemp = async (cityName) => {
    const response = await fetch (
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`
    );

    if (!response.ok) throw new Error("Failed to fetch temperature");
    const data = await response.json();

    if (!data.list || data.list.length === 0) {
        throw new Error("Temperature not found");
    }

    const temp = data.list[0].main.temp;
    return { temperature: temp };
};

export const fetchWindSpeed = async (cityName) => {
    const response = await fetch (
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`
    );

    if (!response.ok) throw new Error("Failed to fetch Wind Data");
    const data = await response.json();

    if (!data.list || data.list.length === 0) {
        throw new Error("Wind Speed not found");
    }

    const wind = data.list[0].wind.speed;
    return { windspeed: wind };
};

export const fetchFeel = async (cityName) => {
    const response = await fetch (
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`
    );

    if (!response.ok) throw new Error("Failed to fetch Feels like data");
    const data = await response.json();

    if (!data.list || data.list.length === 0) {
        throw new Error("Feels like not found");
    }

    const feels = data.list[0].main.feels_like;
    return { feelslike: feels };
};

export const fetchPressure = async (cityName) => {
    const response = await fetch (
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`
    );

    if (!response.ok) throw new Error("Failed to fetch pressure data");
    const data = await response.json();

    if (!data.list || data.list.length === 0) {
        throw new Error("Pressure not found");
    }

    const pressure = data.list[0].main.pressure;
    return { pressure: pressure };
};

export const fetchHumidity = async (cityName) => {
    const response = await fetch (
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`
    );

    if (!response.ok) throw new Error("Failed to fetch humidity");
    const data = await response.json();

    if (!data.list || data.list.length === 0) {
        throw new Error("Humidity not found");
    }

    const humidity = data.list[0].main.humidity;
    return { humidity: humidity };
};

export const fetchDate = async (cityName) => {
    const response = await fetch (
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`
    );

    if (!response.ok) throw new Error("Failed to fetch Date");
    const data = await response.json();

    if (!data.list || data.list.length === 0) {
        throw new Error("Date not found");
    }

    const date = data.list[0].dt_txt;
    return { date: date };
}