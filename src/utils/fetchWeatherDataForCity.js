import axios from "axios"

const url = `https://api.weatherapi.com/v1/forecast.json?key=9539e6bbda834b3789564112242109`

export const fetchWeatherDataForCity = async (city) => {
   const response = await axios.get(`${url}&q=${city}&days=5`)
   
   return await response.data
}