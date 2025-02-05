import React from "react";
import "../../styles/weather-app.css";

const WeatherApp = ({ data }) => {
  const {
    name,
    sys: { country, sunrise, sunset },
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed, deg, gust },
    clouds: { all },
    weather,
    coord: { lon, lat },
  } = data;

  // Convert timestamp to readable time (sunrise and sunset)
  const convertTimestampToTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString();
  };

  // Get weather description and icon
  const weatherDescription = weather[0]?.description;
  const weatherIcon = `http://openweathermap.org/img/wn/${weather[0]?.icon}.png`;

  return (
    <div className="weather-container">
      <div className="weather-header">
        <h1>
          Weather in {name}, {country}
        </h1>
        <p>
          Coordinates: {lat}° N, {lon}° E
        </p>
      </div>

      <div className="weather-summary">
        <img
          src={weatherIcon}
          alt={weatherDescription}
          className="weather-icon"
        />
        <h2>{weatherDescription}</h2>
        <p>Current Temp: {temp}°C</p>
        <p>Feels Like: {feels_like}°C</p>
        <p>
          Min Temp: {temp_min}°C | Max Temp: {temp_max}°C
        </p>
      </div>

      <div className="weather-details">
        <div className="weather-detail">
          <h3>Wind Information</h3>
          <p>Speed: {speed} m/s</p>
          <p>Direction: {deg}°</p>
          <p>Gust: {gust} m/s</p>
        </div>
        <div className="weather-detail">
          <h3>Pressure & Humidity</h3>
          <p>Pressure: {pressure} hPa</p>
          <p>Humidity: {humidity}%</p>
        </div>
        <div className="weather-detail">
          <h3>Cloudiness</h3>
          <p>{all}% Cloud Cover</p>
        </div>
      </div>

      <div className="sun-info">
        <div>
          <h3>Sunrise</h3>
          <p>{convertTimestampToTime(sunrise)}</p>
        </div>
        <div>
          <h3>Sunset</h3>
          <p>{convertTimestampToTime(sunset)}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
