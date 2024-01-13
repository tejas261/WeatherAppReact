import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../context/WeatherContext";

function Highlights() {
  const {data,weatherdata} = useContext(WeatherContext)

  if (!data || !data.days || data.days.length === 0) {
    return <div>Loading....</div>;
  }
  return (
    <div className="flex flex-col m-10 h-[40rem] rounded-3xl text-3xl bg-[#191919]">
      <h1 className="m-4">Today's Highlights</h1>
      <div className="flex flex-row justify-between items-center h-[30rem] border-white border-2 bg-[#000] rounded-3xl m-6 p-5">
        <div className="w-[50rem] text-3xl p-4">
          <h1>Air Quality Index</h1>
          <div className="flex border-white rounded-2xl border-2 p-6 justify-between m-5">
            <img className="w-16" src="../../../public/assets/air.png" alt="" />
            <div>
              <h4>CO</h4>
              <h1>{data.days[0].co}</h1>
            </div>
            <div>
              <h4>
                SO<sub>2</sub>
              </h4>
              <h1>{data.days[0].so2}</h1>
            </div>
            <div>
              <h4>
                NO<sub>2</sub>
              </h4>
              <h1>{data.days[0].no2}</h1>
            </div>
            <div>
              <h4>
                O<sub>3</sub>
              </h4>
              <h1>{data.days[0].o3}</h1>
            </div>
          </div>
        </div>

        <div className="w-[50rem] text-3xl p-4">
          <h1>Sunrise and Sunset</h1>
          <div className="flex border-white rounded-2xl border-2 m-5 p-6 justify-between">
          <img className="w-16" src="../WeatherAppReact/public/assets/sunset.png"/>
            <div>
              <h4>Sunrise</h4> 
              <h1>{weatherdata.currentConditions.sunrise.slice(0,5)}</h1>
            </div>
            <img className="w-16" src="../WeatherAppReact/public/assets/sunrise.png"/>
            <div>
              <h4>Sunset</h4>
              <h1>{weatherdata.currentConditions.sunset.slice(0,5)}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between p-3">
        <div className='divs'>
          <h1 className="mb-2">Humidity</h1>
          <div className="flex p-2">
            <img className="w-16" src="../WeatherAppReact/public/assets/humidity.png" alt="" />
              <h1 className="ml-4 flex justify-center items-center">{weatherdata.days[0].humidity} %</h1>
          </div>
        </div>

        <div className='divs'>
          <h1>Pressure</h1>
          <div className="flex p-2">
          <img className="w-16" src="../WeatherAppReact/public/assets/pressure.png" alt="" />
            <h1 className="ml-4 flex justify-center items-center">{Math.floor(weatherdata.days[0].pressure)}hPa</h1>
          </div>
        </div>

        <div className='divs'>
          <h1>Wind Speed</h1>
          <div className="flex p-2">
            <img className="w-16" src="../WeatherAppReact/public/assets/wind.png" alt="" />
            <h1 className="ml-4 flex justify-center items-center">{Math.floor(weatherdata.days[0].windspeed)} KPH</h1>
          </div>
        </div>

        <div className='divs'>
          <h1>Feels Like</h1>
          <div className="flex p-2">
            <img className="w-16" src="../public/assets/temp.png" alt="" />
            <h1 className="ml-4 flex justify-center items-center">
              {Math.floor(weatherdata.days[0].feelslike)}<sup>o</sup> C
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
