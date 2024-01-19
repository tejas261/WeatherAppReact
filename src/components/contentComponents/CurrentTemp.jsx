import React, { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

function CurrentTemp() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const { weatherdata,weatherCondition } = useContext(WeatherContext);

  if (
    !weatherdata ||
    !weatherdata.currentConditions ||
    !weatherdata.days ||
    weatherdata.days.length === 0
  ) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <div className="h-[33rem] p-6 w-full bg-black rounded-3xl">
        <h1 className="text-center font-bold text-3xl">
          {weatherdata.resolvedAddress}
        </h1>
        <h1 className="text-center font-bold mt-10">Feels Like</h1>
        <h1 className="text-center font-bold text-[50px] ">
          {Math.round(weatherdata.currentConditions.feelslike)}
          <sup>o</sup>C
        </h1>
        <div>
          <span>
            {" "}
            <img
              className="m-4 w-28 inline-block"
              src={`../src/assets/${weatherCondition.toLowerCase()}.png`}
              alt=""
            />
          </span>
          <h1 className="m-8 inline text-3xl">
            {weatherdata.days[0].conditions}
          </h1>
        </div>
        <hr />
        <span><i className="fa-regular fa-calendar-days mt-8"></i></span>
        <h1 className="p-2 inline-block">
          {weekday[new Date().getUTCDay(weatherdata.days[0].datetime)] +
            " , " +
            month[new Date().getUTCMonth()] +
            "  " +
            new Date(weatherdata.days[0].datetime).getUTCDate()}
        </h1> <br />
        <i className="fa-solid fa-droplet"></i>
        <h1 className="p-2 inline-block">Dew : {weatherdata.currentConditions.dew}</h1> <br />
        <i className="fa-solid fa-cloud-rain"></i>
        <h1 className="p-2 inline-block">
          Chances of Precipitation : {weatherdata.days[0].precipprob} %
        </h1>
      </div>
    </div>
  );
}

export default CurrentTemp;
