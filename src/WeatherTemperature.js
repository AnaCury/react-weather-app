import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  const clickedStyle = {
    color: "#FF8303",
  };

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertCelsius(event) {
    event.preventDefault("celsius");
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="p-1 WeatherTemperature">
        <div className="WeatherDisplayInfos">
          <span className="p-1 temperature">{Math.round(props.celsius)}</span>
          <div className="p-1 DisplayUnits">
            <btn
              id="metric"
              onClick={convertCelsius}
              style={clickedStyle}
            >
              °C{" "}
            </btn>
            <span className="break"></span>
            <btn id="imperial" onClick={convertFahrenheit}>
              °F
            </btn>
          </div>
        </div>
      </div>
    );
  } else {
    let tempFahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className="WeatherTemperature">
        <div className="WeatherDisplayInfos">
          <span className="temperature">{Math.round(tempFahrenheit)}</span>
          <div className="DisplayUnits">
            <btn id="metric" onClick={convertCelsius}>
              °C{" "}
            </btn>
            <span className="break"></span>
            <btn
              id="imperial"
              onClick={convertFahrenheit}
              style={clickedStyle}
            >
              °F
            </btn>
          </div>
        </div>
      </div>
    );
  }
}
