import { createContext, useState } from "react";
import { fetchWeatherDataForCity } from "../utils/fetchWeatherDataForCity";
import PropTypes from 'prop-types';

export const WeatherContext = createContext(null);

export const WeatherProvider = ({children}) => {
    const [weatherData , setWeatherData] = useState(null)
    const [searchCity , setSearchCity] = useState("New Delhi")
    const [isDegCelsius , setIsDegCelsius] = useState(true)

    const getWeatherData = async () => {
       try {
        const response = await fetchWeatherDataForCity(searchCity)
        setWeatherData(response)
       } catch (error) {
        console.log({error})
        // alert(error.message)
        alert("Entered city name is incorrect or there is some network issue. Please try again...")
       }
    }

    return <WeatherContext.Provider value={{weatherData,searchCity,setSearchCity,getWeatherData,isDegCelsius,setIsDegCelsius}}>
        {children}
    </WeatherContext.Provider>

}

WeatherProvider.propTypes = {
    children: PropTypes.node.isRequired, 
  };