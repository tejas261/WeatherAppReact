import { createContext,useEffect,useState } from "react";
import axios from 'axios'

const WeatherContext = createContext()

const WeatherProvider=({children})=>{
  const [weatherdata, setweatherdata] = useState([])
  const [data,setData] = useState({})
  const [weatherCondition,setWeatherCondition] = useState("")
    const [city, setcity] = useState("Bengaluru")
    // const getLoc=()=>{
    //     if(navigator.geolocation){
    //       navigator.geolocation.getCurrentPosition(showPosition)
    //     }
    //     else{
    //       alert("error!!!")
    //     }
    //   }
    
    //   function showPosition(position){
    //     console.log(position)
    //     setlat(position.coords.latitude)
    //     setlon(position.coords.longitude)
      // }


    const fetchWeather=async()=>{
        const res = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}%20?unitGroup=metric&key=${import.meta.env.VITE_APIKEY}&contentType=json`)
        const data = res.data
        setweatherdata(data)
        setWeatherCondition(data.currentConditions.conditions)
    }

    const airData = async(e)=>{
      try {
        const res = await axios.get(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${import.meta.env.VITE_APIKEY}&contentType=json&elements=datetime,pm1,pm2p5,pm10,o3,no2,so2,co`
        );
        const newData = res.data
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

    }

    useEffect(() => {
      const fetchData = async () => {
        await fetchWeather();
        await airData();
      };
  
      fetchData();
    }, [city]);
 
    return <WeatherContext.Provider value={{airData,fetchWeather,setcity,city,weatherdata,data,weatherCondition}}>{children}</WeatherContext.Provider>
}

export {WeatherContext,WeatherProvider}