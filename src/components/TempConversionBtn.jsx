import useWeather from "../utils/useWeather";

const TempConversionBtn = () => {
  const { isDegCelsius, setIsDegCelsius } = useWeather();

  return (
    <div>
      <button
        onClick={() => setIsDegCelsius(!isDegCelsius)}
        className={` w-12 h-6 md:w-20 md:h-10 mx-5 my-1 rounded-full flex items-center px-1 transition-all duration-300 ${
          !isDegCelsius
            ? "bg-green-900 justify-end"
            : "bg-gray-300 justify-start"
        }`}
      >
        <div
          className={`w-5 h-5 md:w-8 md:h-8 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            !isDegCelsius ? "translate-x-1" : "translate-x-0"
          }`}
        ></div>
      </button>
    </div>
  );
};

export default TempConversionBtn;
