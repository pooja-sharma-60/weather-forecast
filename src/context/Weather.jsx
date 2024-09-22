import { createContext, useState } from "react";
import { fetchWeatherDataForCity } from "../utils/fetchWeatherDataForCity";
import PropTypes from 'prop-types';

export const WeatherContext = createContext(null);

export const WeatherProvider = ({children}) => {
    const [weatherData , setWeatherData] = useState(null)
    const [searchCity , setSearchCity] = useState("New Delhi")

    const getWeatherData = async () => {
       try {
        const response = await fetchWeatherDataForCity(searchCity)
        setWeatherData(response)
       } catch (error) {
        console.log({error})
       }
    }

    return <WeatherContext.Provider value={{weatherData,searchCity,setSearchCity,getWeatherData}}>
        {children}
    </WeatherContext.Provider>

}

WeatherProvider.propTypes = {
    children: PropTypes.node.isRequired, 
  };