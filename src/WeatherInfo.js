import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="WeatherDisplay">
        <div className="CityDiv">
          <div className="DisplayCity">Weather in {props.data.city}</div>
        </div>
        <div className="DisplayTemp">
          <div className="DisplayIcon">
            <WeatherIcon code={props.data.icon} size={80} />
          </div>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>

      <div className="WeatherDescription">
        <div>
          <FormattedDate date={props.data.date} />
        </div>
        <div className="text-capitalize">{props.data.description}</div>
        <div>Humidity: {props.data.humidity}%</div>
        <div>Wind: {props.data.wind}km/h</div>
      </div>
    </div>
  );
}
