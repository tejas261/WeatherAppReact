import "./App.css";

function App() {
  let city;
  let start = () => {
    city = document.getElementById("searchbar").value;
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metrics&appid=05b2a1d9770fe84ac37fded20630cab7"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        document.getElementById("h2").innerHTML = "Weather in  " + data.name;

        document.getElementById("temp").innerHTML =
          Math.round(data.main.temp - 273.15) + "<sup>o</sup> C";

        document.getElementById("weather1").innerHTML = "Weather Condition : "+
          data.weather[0].description.toUpperCase();

        document.getElementById("weather2").innerHTML =
          "Humidity : " + data.main.humidity + " %";

        document.getElementById("weather3").innerHTML =
          "Wind Speed : " + data.wind.speed + " m/s";

        // document.getElementById("img").src =
        //   "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

        const weatherCondition = data.weather[0].main.toLowerCase();

        // Remove any existing weather classes from temp-bg
        const tempBg = document.getElementById("temp-bg");
        tempBg.classList.remove("clear", "clouds", "rain", "snow", "haze");

        // Add the appropriate weather class to temp-bg
        if (weatherCondition === "clear") {
          tempBg.classList.add("clear");
        } else if (weatherCondition === "clouds") {
          tempBg.classList.add("clouds");
        } else if (weatherCondition === "rain") {
          tempBg.classList.add("rain");
        } else if (weatherCondition == "haze") {
          tempBg.classList.add("haze");
        } else if (weatherCondition === "snow") {
          tempBg.classList.add("snow");
        }
      })

      .catch(() => {
        alert("Check your city name and try again😢😢");
      });
  };

  return (
    <div className="card">
      <div className="search">
        <input
          id="searchbar"
          type="text"
          className="searchbar"
          placeholder="Search"
        />
        <button id="search" onClick={start}>
          <i className=" fas fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className="main">
        <div className="leftcontent">
          <h2 id="h2"> </h2>
          <div id="temp-bg">
            <h1 id="temp"></h1>
          </div>
        </div>

        <div className="content">
          <div className="next">
            <h3 id="weather1"> </h3>
          </div>
          <h3 id="weather2"></h3>
          <h3 id="weather3"> </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
