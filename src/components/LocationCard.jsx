
import extractDateTime from "../utils/extractDateTime"
import useWeather from "../utils/useWeather"


const LocationCard = () => {
    const {weatherData} = useWeather()
    const {date,day,time} = extractDateTime(weatherData?.location?.localtime)
    
    console.log(weatherData)
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg mx-10 h-full flex flex-col justify-center items-center shadow-md shadow-slate-600 ">
    <div className="text-center mb-4">
      <h2 className="text-2xl font-semibold">{weatherData?.location?.name}</h2>
    </div>
    <div className="text-center mb-2">
      <p className="text-6xl font-bold">{time}</p>
    </div>
    <div className="text-center">
      <p className="text-lg">{day}</p>
      <p className="text-lg">{date}</p>
    </div>
  </div>
  )
}

export default LocationCard