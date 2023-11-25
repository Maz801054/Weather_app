import { useState } from "react";
import "./App.css";
import Search from "./Component/Search";
import Result from "./Component/Result";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);

  const changeSearch = (value) => {
    setSearch(value);
  };

  const searchWeatherHandler = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b6fdd76743b8655b2523d3333e917327&units=metric`
      )
      .then((response) => {
        // console.log(response);
        setWeather(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="text-center mt-5 p-3 shadow Bg"
      style={{ width: "90vw", margin: "auto" }}
    >
      <Search
        searchData={search}
        eventHandler={changeSearch}
        searchWeather={searchWeatherHandler}
      />
      <Result weatherData={weather} />
    </div>
  );
}

export default App;
