import CitySearch from "./components/CitySearch";
import WeatherInfo from "./components/WeatherInfo";
import WeatherForecast from "./components/WeatherForecast";
import { formatDateFromTimestamp } from './utils/date';
import { useEffect, useState } from "react";

function App() {
  const apiKey = "ee9be9d03ef3e3369702f2610e323f41";
  const [geo, setGeo] = useState(null);
  const [weatherData, setWeatherData] = useState();
  const [forecastData, setForecastData] = useState();
  const [isDayWeatherFetched, setIsDayWeatherFetched] = useState(false);
  const [isForecastFetched, setIsForecastFetched] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setGeo({lat: latitude, lon: longitude});
    });
  }, []);

  useEffect(() => {
    if (geo !== null) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geo.lat}&lon=${geo.lon}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(weatherData => {
          const dayWeather = {
            weather: weatherData.weather[0],
            main: weatherData.main,
            city: weatherData.name,
            date: formatDateFromTimestamp(),
          }
          setWeatherData(dayWeather);
          setIsDayWeatherFetched(true);
        });
    }
  }, [geo]);

  useEffect(() => {
    if (geo !== null) {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${geo.lat}&lon=${geo.lon}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(forecastData => {
          const forecast = {
            city: forecastData.city.name,
            list: forecastData.list
          }
          setForecastData(forecast);
          setIsForecastFetched(true);
        });
    }
  }, [geo]);

  const DayWeather = () => {
    return (
      <div className="flex flex-col items-center m-4">
        <h2 className="my-2 text-xl">Météo à {weatherData.city}</h2>
        <WeatherInfo {...weatherData} />
      </div>
    )
  }
  
  return (
    <div className="">
      <h1 className="my-2 text-2xl text-center text-red-400">Weather App</h1>
      <CitySearch apiKey={apiKey} setGeo={setGeo} />
      {isDayWeatherFetched && <DayWeather />}
      {isForecastFetched && <WeatherForecast {...forecastData} />}
    </div>
  )
}

export default App

// Météo du jour : nom de la ville, température en Celsius, description du temps et icône
// Afficher les prévisions météo sur 5 jours toutes les trois heures
// Loader pendant les chargements