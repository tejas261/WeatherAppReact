import React, {useContext, useState} from "react";
import { WeatherContext } from '../context/WeatherContext'

function Navbar() {
    const {fetchWeather,setcity} = useContext(WeatherContext)
    
  return (
    <>
      <nav className="flex">
        <div className="flex w-20 p-6">
          <span>
            <i className="fa-solid fa-temperature-three-quarters text-[50px]"></i>
          </span>
            <h1 className="text-5xl">The Weather Dashboard</h1>
        </div>

        <div className="nav mt-16 w-[80%]">
          <form onSubmit={fetchWeather} className="flex justify-center">
            <input style={{color:"#000"}} onChange={(e)=>{
              setcity(e.target.value)
            }} type="text" className="p-4 w-[40%] m-2 rounded-3xl" placeholder="Search"/>
            <button>
              <i className=" fas fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
