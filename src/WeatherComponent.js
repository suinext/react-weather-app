


import React, { useState, useEffect } from 'react';
import WeatherDataComponent from './WeatherDataComponent'; // Import your component

const API_URL_weather = 'https://api.weatherbit.io/v2.0/current?postal_code=90000&country=LK&key=233eb887cc8d422eb0485cf858f2cfcf';


const WeatherComponent = () => {
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async () => {
        try {
            const response = await fetch(API_URL_weather);
            const data = await response.json();
            setWeatherData(data); // Update state with fetched weather data
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    useEffect(() => {
        fetchWeather();
    }, []);

    return (
        <div className='app'>
            <WeatherDataComponent weatherData={weatherData} />
        </div>
    );
};

export default WeatherComponent;
