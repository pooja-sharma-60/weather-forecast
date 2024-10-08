import useWeather from "../utils/useWeather";
import HourlyForecastCard from "./HourlyForecastCard";

const HourlyForecastList = () => {
  const { weatherData } = useWeather();
  const {
    forecast: { forecastday },
  } = weatherData;
  const { hour } = forecastday[0];
  const filteredHours = hour.filter(
    (_, index) => index % 3 === 0 && index > 8 && index < 22
  );

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg mx-10 my-5 md:my-0 h-full shadow-xl shadow-slate-900">
      <h2 className="text-2xl">Hourly Forecast: </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4">
        {filteredHours.map((hourData, index) => (
          <HourlyForecastCard key={index} data={hourData} />
        ))}
      </div>
    </div>
  );
};

export default HourlyForecastList;
