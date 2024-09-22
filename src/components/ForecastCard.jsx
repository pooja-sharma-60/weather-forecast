/* eslint-disable react/prop-types */

import extractDateTime from "../utils/extractDateTime"

const ForecastCard = ({data}) => {
    const {day,date} = extractDateTime(data?.date)
    
console.log(data)
  return (
    <div className="flex justify-between items-center">
       <div className="flex-1">
        <img src={data?.day?.condition?.icon} alt="weather-icon"/>
        </div> 
       <div className="flex-1">{`${data?.day?.avgtemp_c}\u00B0C`}</div> 
       <div className="flex-1">{`${day.slice(0,3)}, ${date}`}</div> 
    </div>
  )
}

export default ForecastCard