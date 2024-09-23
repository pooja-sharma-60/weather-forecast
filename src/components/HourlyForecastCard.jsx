/* eslint-disable react/prop-types */
import extractDateTime from "../utils/extractDateTime";
import useWeather from "../utils/useWeather";

const HourlyForecastCard = ({ data }) => {
  const { isDegCelsius } = useWeather();

  const { time } = extractDateTime(data?.time);
  console.log(time);
  return (
    <div className="bg-gray-700 m-3 py-3  text-center rounded-3xl ">
      <div className="grid grid-cols-2 sm:grid-cols-1 items-center">
        <div>
          <div className="text-3xl sm:text-2xl font-bold ">{time}</div>
          
        </div>
        <div>
        <div className="flex items-center justify-center">
            <img src={data?.condition?.icon} alt="weather-icon" />
          </div>
          <div className="text-xl font-bold">
            {isDegCelsius ? `${data?.temp_c}\u00B0C` : `${data?.temp_f}\u00B0F`}
          </div>
          <div className="font-thin hidden sm:block">Humidity: {data?.humidity}%</div>
          <div className="font-thin hidden sm:block">Wind: {data?.wind_kph}kph</div>
        </div>
      </div>
    </div>
  );
};

export default HourlyForecastCard;
