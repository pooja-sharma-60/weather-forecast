import Header from "./components/Header";
import WeatherDetails from "./components/WeatherDetails";
import "./App.css";
import LocationCard from "./components/LocationCard";
import useWeather from "./utils/useWeather";
import ForecastList from "./components/ForecastList";
import HourlyForecastList from "./components/HourlyForecastList";
import { useEffect } from "react";

function App() {
  const { weatherData , getWeatherData , setSearchCity} = useWeather();
  useEffect(() => {
    getWeatherData()
    setSearchCity("")
  },[])
  
  return (
    <>
      <Header />
      {weatherData ? (
        <div>
          <div className="flex my-5 ">
            <div className="w-2/5 ">
              <LocationCard />
            </div>
            <div className="w-3/5 ">
              <WeatherDetails />
            </div>
          </div>
          <div className="flex my-5 ">
            <div className="w-1/3 ">
             <ForecastList />
            </div>
            <div className="w-2/3">
              <HourlyForecastList />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
