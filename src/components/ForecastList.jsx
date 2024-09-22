import useWeather from "../utils/useWeather"
import ForecastCard from "./ForecastCard"


const ForecastList = () => {
  const {weatherData} = useWeather()
  const {forecast : {forecastday}} = weatherData


 
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg mx-10 h-full shadow-md shadow-slate-600 ">
        <h2 className="text-2xl">{forecastday.length} Days Forecast: </h2>
        {forecastday.map((day,index) => <ForecastCard key={index} data={day}/>)}
    </div>
  )
}

export default ForecastList