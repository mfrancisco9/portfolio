import React, { useState, useEffect } from "react";
import "../css/niceday.css";
import Chicago from "../images/chicago.jpg";
import axios from "axios";

export default function NiceDay() {
  const [city, setCity] = useState("Chicago");
  const [weathers, setWeathers] = useState([]);
  const openWeatherKey = `9d0408c1b72df0440eea79041dfc4aeb`;

  const makeCall = () => {
    setWeathers([]);
    console.log("making the weather call");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${openWeatherKey}`;
    axios.get(url).then((data) => {
      var lat = data.data.coord.lat;
      var lon = data.data.coord.lon;
      console.log(lat, lon);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${openWeatherKey}`
        )
        .then((data) => {
          console.log(data);

          for (let i = 0; i < 3; i++) {
            setWeathers((weathers) => [
              ...weathers,
              {
                high: data.data.daily[i].temp.max,
                low: data.data.daily[i].temp.min,
                sunrise: data.data.daily[i].sunrise,
                rain: data.data.daily[i].pop,
                uvi: data.data.daily[i].uvi,
                windspeed: data.data.daily[i].wind_speed,
                weather: data.data.daily[i].weather[0].description,
              },
            ]);
          }
        });
    });
  };

  const makeDecision = (high, low, rain, wind, uvi) => {
    var returnString = "";
    console.log(high, low, rain, wind)
 
    if (high < 85 && low > 50 && rain < 5 && wind < 12) {
        returnString = "It should be a nice day for a ride"
    }

    if (high > 85) {
       returnString = "It's probably too hot for a ride"
    }

    if (low < 50) { 
        returnString = "It's a bit cold for a ride"
    }

    if (uvi > 2.5) {
        returnString += `, but the UV index is ${Math.round(uvi * 10) / 10} so don't forget sunscreen.`
    } else {
        returnString += `.`
    }

    return returnString

  };

  const makeDays = () => {
    let boxes = [];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let months = [
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
    const nth = (d) => {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    const today = new Date();
    console.log(today.getDay());

    for (let i = 0; i < 3; i++) {
      boxes.push(
        <div className="nice-day-column">
            <div className="nice-day-date">
          <span id="nice-day-day-name" key={"day" + { i }}>
            {days[today.getDay() + i]}
          </span>
          <span id="nice-day-month-date">
            {months[today.getMonth()]} {today.getDay() + i}
            {nth(today.getDay() + i)}
          </span>
          </div>
          {weathers[i] ? (
            <div className="nice-weather-numbers">
              <span>High: {Math.round(weathers[i].high)}°F</span>
              <span>Low: {Math.round(weathers[i].low)}°F</span>
              {weathers[i].rain >= 1 ? (
                <span>{weathers[i].rain}% chance of rain</span>
              ) : null}
              <span>{Math.round(weathers[i].windspeed * 10) / 10} mph wind</span>
            </div>
          ) : null}
          {weathers[i] ? (
            <div className="nice-weather-decision">
              <span>
                {makeDecision(
                  weathers[i].high,
                  weathers[i].low,
                  weathers[i].rain,
                  weathers[i].windspeed,
                  weathers[i].uvi
                )}
              </span>
            </div>
          ) : null}
        </div>
      );
    }

    return boxes;
  };

  useEffect(() => {
    makeCall();
  }, []);

  return (
    <div>
            <a name="nicedayforaride"/>
    <div
      className="misc-div"
      id="nice-day"
      style={{ backgroundImage: `url(${Chicago})` }}
    >
      <div id="bg-layer-nice-day">
      <div id="nice-day-description"><span id="nice-day-text-span">Is there a nice day for a bike ride any time soon?</span></div>
        <div id="nice-day-main">
          {makeDays()}</div>
      </div>
    </div>
    </div>
  );
}
