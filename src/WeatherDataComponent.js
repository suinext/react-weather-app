import React from 'react';
import './App.css'


const WeatherDataComponent = ({ weatherData }) => {
    if (!weatherData || !weatherData.data || weatherData.data.length === 0) {
        return <p>No weather data available</p>;
    }

    const {
        city_name,
        temp,
        weather: { description },
    } = weatherData.data[0];

    return (
        <div>
            <h2 className='topic'>Weather Information</h2>
            <div className='card'>
                <p className='city'>City: {city_name}</p>
                <p className='temp'>Temperature: {temp}°C</p>
                <p className='desc'>Description: {description}</p>
            </div>
            {/* Render more data as needed */}
        </div>
    );
};

export default WeatherDataComponent;
