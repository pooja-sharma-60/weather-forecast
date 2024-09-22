
import useWeather from "../utils/useWeather"


const TempConversionBtn = () => {
  
  const {isDegCelsius,setIsDegCelsius} = useWeather()

  return (
  
  <div>
  
   <button
      onClick={() => setIsDegCelsius(!isDegCelsius)}
      className={`w-20 h-10 mx-5 my-1 rounded-full flex items-center px-1 transition-all duration-300 ${
        !isDegCelsius ? 'bg-green-900 justify-end' : 'bg-gray-300 justify-start'
      }`}
    >
      <div
        className={`w-8 h-8 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          !isDegCelsius ? 'translate-x-1' : 'translate-x-0'
        }`}
      ></div>
     
    </button>
    <span className="mx-6 text-xl font-bold ">
  {isDegCelsius ? "Celsius" : "Fahrenheit"}
  </span>
  </div>
 
    
  )
}

export default TempConversionBtn