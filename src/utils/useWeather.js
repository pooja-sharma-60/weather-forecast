import { useContext } from "react"
import { WeatherContext } from "../context/Weather"

const useWeather = () => {
    return useContext(WeatherContext)
}

export default useWeather