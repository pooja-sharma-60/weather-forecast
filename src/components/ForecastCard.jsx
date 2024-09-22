/* eslint-disable react/prop-types */

import extractDateTime from "../utils/extractDateTime"
import useWeather from "../utils/useWeather"

const ForecastCard = ({data}) => {
    const {day,date} = extractDateTime(data?.date)
    const {isDegCelsius} = useWeather()
    
console.log(data)
  return (
    <div className="flex justify-between items-center">
       <div className="flex-1">
        <img src={data?.day?.condition?.icon} alt="weather-icon"/>
        </div> 
       <div className="flex-1">{isDegCelsius ? `${data?.day?.avgtemp_c}\u00B0C` : `${data?.day?.avgtemp_f}\u00B0F`}</div> 
       <div className="flex-1">{`${day.slice(0,3)}, ${date}`}</div> 
    </div>
  )
}

export default ForecastCard