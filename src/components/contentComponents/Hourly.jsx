import React, { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

function Hourly() {
  const { weatherdata, weatherCondition } = useContext(WeatherContext);
  if (
    !weatherdata ||
    !weatherdata.currentConditions ||
    !weatherdata.days ||
    weatherdata.days.length === 0
  ) {
    return <div>Loading....</div>;
  }
  return (
    <div className="text-3xl bg-[#191919] m-10 rounded-3xl p-4">
      <h1>Today At</h1>
      <div className="flex border-white rounded-2xl border-2 m-5 p-6 justify-between bg-black">
      {weatherdata.days[0].hours.filter((x,i)=> i%3===0).slice(0,10).map((hours,index)=>{
                return(
                <div key={index++} className='w-full p-6'>
                <h1 className="p-2">{hours.datetime.slice(0,5)}</h1>
                <img width={50} src={`public/assets/${weatherCondition}.png`} alt="" />
                <h1 className="p-2">{Math.round(hours.temp)}<sup>o</sup> C</h1>
            </div>
                )
            })}
      </div>
    </div>
  );
}

export default Hourly;
