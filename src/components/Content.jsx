import React, { useContext, useEffect } from "react";
import CurrentTemp from "./contentComponents/CurrentTemp";
import Next5Days from "./contentComponents/Next5Days";
import Highlights from "./contentComponents/Highlights";
import Hourly from "./contentComponents/Hourly";

function Content() {
  return (
    <div className="main flex sm:max-lg:flex-col w-full">
      <div className="left flex flex-col sm:max-lg:flex-row sm:max-lg:w-full sm:max-lg:justify-evenly w-[50rem] h-[35rem] m-[2rem] sm:max-lg:min-w-[752px]">
        <CurrentTemp />
        <Next5Days />
      </div>

      <div className="right w-full min-w-[840px]">
        <Highlights />
        <Hourly />
      </div>
    </div>
  );
}

export default Content;
