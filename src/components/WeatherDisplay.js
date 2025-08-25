import React from "react";
import Cloudspng from '../assets/clouds.png';
import Clearpng from '../assets/clear.png';
import Rainpng from '../assets/rain.png';
import Mistpng from '../assets/mist.png';
import Snowpng from '../assets/snow.png';
import Drizzlepng from '../assets/drizzle.png';
import Defaultpng from '../assets/default.png';
import Humiditypng from '../assets/humidity.png';
import Windpng from '../assets/wind.png';



function WeatherDisplay({ weather }) {
  let weatherIconSrc = "";
  const weatherCondition = weather.weather[0].main.toLowerCase();

  if (weatherCondition.includes("clouds")) {
    weatherIconSrc = Cloudspng;
  } else if (weatherCondition.includes("clear")) {
    weatherIconSrc = Clearpng;
  } else if (weatherCondition.includes("rain")) {
    weatherIconSrc = Rainpng;
  } else if (weatherCondition.includes("mist")) {
    weatherIconSrc = Mistpng;
  } else if (weatherCondition.includes("snow")) {
    weatherIconSrc = Snowpng;
  } else if (weatherCondition.includes("drizzle")) {
    weatherIconSrc = Drizzlepng;
  } else {
    weatherIconSrc = Defaultpng;
  }

  return (
    <div className="weather">
      <img
        src={weatherIconSrc}
        className="weather-icon"
        alt={weather.weather[0].description}
      />
      <h1 className="temp">{Math.round(weather.main.temp)}°C</h1>
      <h2 className="city">{weather.name}</h2>

      <div className="section">
        <div className="humidity-section">
          <img src={Humiditypng} alt="Humidity icon" />
          <p>{weather.main.humidity}% Humidity</p>
        </div>

        <div className="wind-section">
          <img src={Windpng} alt="Wind icon" />
          <p>{weather.wind.speed} m/s Wind</p>
        </div>
      </div>
       <div className="location-section">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/marker.png" alt="Location icon" />
          <p>
            Latitude: {weather.coord.lat.toFixed(2)}, Longitude: {weather.coord.lon.toFixed(2)}
          </p>
        </div>
    </div>
  );
}

export default WeatherDisplay;
