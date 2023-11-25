import React from "react";

export default function Result({ weatherData }) {
  return (
    <div className="shadow mt-5 p-5">
      {weatherData.name !== undefined ? (
        <>
          <h1
            className="text-dark fw-bold"
            style={{ borderBottom: "2px solid black", padding: "25px" }}
          >
            {weatherData.name}
          </h1>
          <div className="d-flex justify-content-between">
            <div className="mt-3">
              <h3 className="text-dark fw-bold">Max Temp</h3>
              <b className="text-light"> {weatherData.main.temp_max}</b>
            </div>
            <div className="mt-3">
              <h3 className="text-dark fw-bold">Min Temp</h3>
              <b className="text-light">{weatherData.main.temp_min}</b>
            </div>
            <div className="mt-3">
              <h3 className="text-dark fw-bold">humidity</h3>
              <b className="text-light"> {weatherData.main.humidity}</b>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="mt-3">
              <h3 className="text-dark fw-bold">Cloude</h3>
              <img
                src={` https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt=""
              />
            </div>
            <div className="mt-3">
              <h3 className="text-dark fw-bold">Weather</h3>{" "}
              <b className="text-light">{weatherData.weather[0].main}</b>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3
            className="text-dark fw-bold"
            style={{ borderBottom: "2px solid black", padding: "25px" }}
          >
            Please Enter City Name
          </h3>
        </>
      )}
    </div>
  );
}
