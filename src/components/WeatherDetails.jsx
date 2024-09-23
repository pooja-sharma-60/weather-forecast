import useWeather from "../utils/useWeather";

const WeatherDetails = () => {
  const { weatherData,isDegCelsius } = useWeather();

  return (
    <div className="flex bg-gray-800 p-5 rounded-lg mx-10 my-5 md:my-0 h-full shadow-xl shadow-slate-900 flex-wrap">
      <div className="flex flex-col p-4 justify-center items-center text-5xl w-1/2 xl:w-1/3">
        <p className="text-white  font-bold my-3">{isDegCelsius ? `${weatherData?.current?.temp_c}\u00B0C` : `${weatherData?.current?.temp_f}\u00B0F`}</p>
        <p className="text-gray-400 text-lg">
          Feels like: {isDegCelsius ? `${weatherData?.current?.feelslike_c}\u00B0C` : `${weatherData?.current?.feelslike_f}\u00B0F` }
        </p>
      </div>
      <div className=" p-4 w-1/2 xl:w-1/3">
        <img
          src={weatherData?.current?.condition?.icon}
          alt="Weather Icon"
          className="mx-auto  xl:w-2/3"
        />
        <p className="text-white text-2xl text-center ">
          {weatherData?.current?.condition?.text}
        </p>
      </div>
      <div className="w-full p-4 xl:w-1/3">
        <div className="grid  grid-cols-4 xl:grid-cols-2 gap-4 mt-4 text-white">
          {/* Humidity */}
          <div className="flex flex-col items-center">
            <img
              src="src/assets/humidity.png"
              alt="Humidity Icon"
              className="w-1/3"
            />
            <span>{weatherData?.current?.humidity}%</span>
            <span>Humidity</span>
          </div>

          {/* Wind Speed */}
          <div className="flex flex-col items-center">
            <img
              src="src/assets/wind.png"
              alt="Wind Speed Icon"
              className="w-1/3"
            />
            <span>{weatherData?.current?.wind_kph} kph</span>
            <span>Wind </span>
          </div>

          {/* Pressure */}
          <div className="flex flex-col items-center">
            <img
              src="src/assets/pressure.png"
              alt="Pressure Icon"
              className="w-1/3"
            />
            <span>{weatherData?.current?.pressure_mb} mb</span>
            <span>Pressure</span>
          </div>
          {/* UV */}
          <div className="flex flex-col items-center">
            <img
              src="src/assets/uv.png"
              alt="Pressure Icon"
              className="w-1/3"
            />
            <span>{weatherData?.current?.uv}</span>
            <span>UV</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
