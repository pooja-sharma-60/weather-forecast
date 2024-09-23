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
          <div className="flex my-5 flex-wrap">
            <div className="w-full md:w-2/5 md:my-2 ">
              <LocationCard />
            </div>
            <div className="w-full md:w-3/5 ">
              <WeatherDetails />
            </div>
          </div>
          <div className="flex my-5 flex-wrap">
            <div className="w-full my-5 lg:w-1/3 md:my-2 ">
             <ForecastList />
            </div>
            <div className="w-full lg:w-2/3 md:my-2">
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
