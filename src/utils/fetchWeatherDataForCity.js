import axios from "axios"
const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

const url = `${apiUrl}?key=${apiKey}`
// console.log(url)


export const fetchWeatherDataForCity = async (city) => {
   const response = await axios.get(`${url}&q=${city}&days=5`)
   console.log(`${url}&q=${city}&days=5`)
   
   return await response.data
}