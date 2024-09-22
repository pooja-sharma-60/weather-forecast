/* eslint-disable react/prop-types */
import extractDateTime from "../utils/extractDateTime"
import useWeather from "../utils/useWeather"


const HourlyForecastCard = ({data}) => {
  const {isDegCelsius} = useWeather()

    const {time} = extractDateTime(data?.time)
    console.log(time)
  return (
    <div className="bg-gray-800 m-3 p-3 text-center rounded-3xl flex-1 ">
        <div className="text-2xl font-bold">{time}</div>
        <div className="flex items-center justify-center">
            <img src={data?.condition?.icon} alt="weather-icon"/> 
        </div>
        <div className="text-xl font-bold">{isDegCelsius ? `${data?.temp_c}\u00B0C` : `${data?.temp_f}\u00B0F`}</div>
        <div>Humidity: {data?.humidity}%</div>
        <div className="font-thin">Wind: {data?.wind_kph}kph</div>
    </div>
  )
}

export default HourlyForecastCard