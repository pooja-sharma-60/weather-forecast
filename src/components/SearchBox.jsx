import useWeather from "../utils/useWeather"

const SearchBox = () => {
    const {searchCity , setSearchCity , getWeatherData} = useWeather()
    const handleInput = () => {
      if(searchCity === ""){
        alert("enter a city name")
        return ;
      }
      getWeatherData();
      setSearchCity("")
    }

  return (
   <div className="flex justify-around items-center">
   <input type="text" placeholder="Search..." value={searchCity} onChange={(e) => setSearchCity(e.target.value)} className="w-full py-2 px-4 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500" />
   <button className=" text-white font-bold py-2 px-4 rounded text-left border mx-2" onClick={handleInput}>
        Search
    </button>

   </div>
  )
}

export default SearchBox