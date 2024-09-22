import useWeather from "../utils/useWeather";

const WeatherDetails = () => {
  const { weatherData,isDegCelsius } = useWeather();

  return (
    <div className="flex bg-gray-800 p-5 rounded-lg mx-10 h-full shadow-xl shadow-slate-900 ">
      <div className="flex-1 flex flex-col p-4 justify-center items-center text-5xl">
        <p className="text-white  font-bold my-3">{isDegCelsius ? `${weatherData?.current?.temp_c}\u00B0C` : `${weatherData?.current?.temp_f}\u00B0F`}</p>
        <p className="text-gray-400 text-lg">
          Feels like: {isDegCelsius ? `${weatherData?.current?.feelslike_c}\u00B0C` : `${weatherData?.current?.feelslike_f}\u00B0F` }
        </p>
      </div>
      <div className="flex-1  p-4">
        <img
          src={weatherData?.current?.condition?.icon}
          alt="Weather Icon"
          className="mx-auto  w-2/3"
        />
        <p className="text-white text-2xl text-center ">
          {weatherData?.current?.condition?.text}
        </p>
      </div>
      <div className="flex-1  p-4">
        <div className="grid grid-cols-2 gap-4 mt-4 text-white">
          {/* Humidity */}
          <div className="flex flex-col items-center">
            <img
              src="src/assets/dark-mode/humidity-dark-mode.png"
              alt="Humidity Icon"
              className="w-1/3"
            />
            <span>{weatherData?.current?.humidity}%</span>
            <span>Humidity</span>
          </div>

          {/* Wind Speed */}
          <div className="flex flex-col items-center">
            <img
              src="src/assets/dark-mode/wind-dark-mode.png"
              alt="Wind Speed Icon"
              className="w-1/3"
            />
            <span>{weatherData?.current?.wind_kph} kph</span>
            <span>Wind Speed</span>
          </div>

          {/* Pressure */}
          <div className="flex flex-col items-center">
            <img
              src="src/assets/dark-mode/pressure-dark-mode.png"
              alt="Pressure Icon"
              className="w-1/3"
            />
            <span>{weatherData?.current?.pressure_mb} mb</span>
            <span>Pressure</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
