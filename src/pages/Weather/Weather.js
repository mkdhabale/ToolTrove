import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "../../styles/weather.css";
import "../../styles/centered-style.css";
import WeatherApp from "./WeatherApp";
import { Spinner } from "react-bootstrap";
import "../../styles/loading.css";

const Weather = () => {
  // State to hold input city name and weather data
  const [city, setCity] = useState("Pune");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false); // New loading state

  const [error, setError] = useState(null);

  // Your OpenWeather API key
  const API_KEY = "f63f4d97a61ffc0f107357aa514dbc14"; // Replace with your actual API key

  // Function to handle the form submit and fetch weather
  const fetchWeather = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true); // Start loading

      // Check if city is entered
      if (!city) {
        setError("Please enter a city name");
        setWeatherData(null);
        setLoading(false);
        return;
      }

      try {
        setError(null); // Clear any previous errors
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        setWeatherData(response.data);
      } catch (err) {
        setError("City not found or an error occurred");
        setWeatherData(null);
      }
      setLoading(false); // Stop loading once the data is fetched
    },
    [city]
  ); // Empty dependency array means fetchWeather won't change

  // Use useEffect to fetch weather data when the component mounts
  useEffect(() => {
    const event = new Event("click");
    fetchWeather(event);
  }, [fetchWeather]); // Empty dependency array ensures this only runs once on mount

  return (
    <div className="row-center AppWeatherDv">
      <div className="col-center">
        <div className="AppWeather">
          <form onSubmit={fetchWeather} className="weather-form">
            <input
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit">Get Weather</button>
          </form>
          <div>{error && <p className="error">{error}</p>}</div>
        </div>
        <div className="AppWeather">
          {/* Show loading spinner when loading is true */}
          {loading ? (
            <div className="loading-container">
              <Spinner animation="border" variant="primary" />
              <p>Loading...</p>
            </div>
          ) : // Show the weather data once it's fetched
          weatherData ? (
            <WeatherApp data={weatherData} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Weather;
