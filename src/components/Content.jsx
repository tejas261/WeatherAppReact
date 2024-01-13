import React, { useContext, useEffect} from "react";
import CurrentTemp from "./contentComponents/CurrentTemp";
import Next5Days from "./contentComponents/Next5Days";
import Highlights from "./contentComponents/Highlights";
import Hourly from "./contentComponents/Hourly";

function Content() {
  
  return (
    <div className="main flex w-full">
      <div className="left flex flex-col w-full h-[35rem] m-[2rem]">
      <CurrentTemp/>
      <Next5Days/>
    </div>

    <div className="left w-[100%] m-[2rem]">
      <Highlights/>
      <Hourly/>
    </div>
    </div>
  );
}

export default Content;
