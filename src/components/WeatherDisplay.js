import React from "react";

function WeatherDisplay({ weather }) {
  let weatherIconSrc = "";
  const weatherCondition = weather.weather[0].main.toLowerCase();

  if (weatherCondition.includes("clouds")) {
    weatherIconSrc = "/images/clouds.png";
  } else if (weatherCondition.includes("clear")) {
    weatherIconSrc = "/images/clear.png";
  } else if (weatherCondition.includes("rain")) {
    weatherIconSrc = "/images/rain.png";
  } else if (weatherCondition.includes("mist")) {
    weatherIconSrc = "/images/mist.png";
  } else if (weatherCondition.includes("snow")) {
    weatherIconSrc = "/images/snow.png";
  } else if (weatherCondition.includes("drizzle")) {
    weatherIconSrc = "/images/drizzle.png";
  } else {
    weatherIconSrc = "/images/default.png";
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
          <img src="/images/humidity.png" alt="Humidity icon" />
          <p>{weather.main.humidity}% Humidity</p>
        </div>

        <div className="wind-section">
          <img src="/images/wind.png" alt="Wind icon" />
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
