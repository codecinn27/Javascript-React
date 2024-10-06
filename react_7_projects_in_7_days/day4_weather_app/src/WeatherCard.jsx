import React, {useEffect, useState} from 'react'
import { FaSearchLocation } from "react-icons/fa";

const WeatherCard = () => {

    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [search, setSearch] = useState(false);

    const fetchWeatherData = async() => {
        try{
            const response = await fetch(`https://api.data.gov.my/weather/forecast`);
            const data = await response.json();
            setWeatherData(data);
        }
        catch(error){
            console.log("Error fetching weather data",error);
            setWeatherData(null);
            setSearch(true);
        }
    }

    useEffect(() => {
        if(city && search){
            fetchWeatherData();
        }
    }, [city, search]);

  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 mt-10 p-2 w-[400px] h-[320px] pt-4'>
      <div>
        <input type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className='rounded-2xl outline-none p-2'
        placeholder='Enter city name'
        />
        <button>
            <FaSearchLocation />
        </button>
      </div>
    </div>
  )
}

export default WeatherCard

