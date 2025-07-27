import React, {useState} from "react";
import './App.css';
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WeatherDisplay from "./components/WeatherDisplay"

function App(){
  const API_KEY = "82a7570434ea65c4a36d563f3e36b218";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const checkWeather = async (city) => {
    setError('');
    try{
      const response = await fetch(`${BASE_URL}${city}&appid=${API_KEY}`);

      if (!response.ok){
        if(response.status === 404){
          setError('City not found. Please Try Again');
        }else{
          setError('Something went wrong. Please try again later.');
        }
        setWeatherData(null);
        return;
      }
      const data = await response.json();
      setWeatherData(data);
    }catch(err){
      console.error("Fetch error", err);
      setError('Failed to fetch weather data. Check your internet connection! Try again later');
      setWeatherData(null);
    }
  };

  return(
    <>
    <Header/>
    <div className="box">
      <SearchBar onSearch={checkWeather}/>
      {error && <p className="error-message">{error}</p>}
      {weatherData && <WeatherDisplay weather={weatherData}/>}
    </div>
    <Footer/>
    </>
  );

}

export default App;