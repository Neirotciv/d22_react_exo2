import CitySearch from "./components/CitySearch";
import DayWeather from "./components/DayWeather";
import WeekWeather from "./components/WeekWeather";
import { useEffect, useState } from "react";

function App() {
  const apiKey = "ee9be9d03ef3e3369702f2610e323f41";
  const [geo, setGeo] = useState();
  const [dayWeather, setDayWeather] = useState();
  const [isDayWeatherFetched, setIsDayWeatherFetched] = useState(false);

  useEffect(() => {
    if (geo !== undefined) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geo.lat}&lon=${geo.lon}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(weatherData => {
          console.log(weatherData);
          const dayWeather = {
            weather: weatherData.weather[0],
            main: weatherData.main,
            city: geo.name,
          }
          setDayWeather(dayWeather);
          setIsDayWeatherFetched(true);
        });
    }
  }, [geo])
  
  return (
    <div className="container mx-auto">
      <h1 className="text-red-400">Weather App</h1>
      <CitySearch apiKey={apiKey} setGeo={setGeo} />
      {isDayWeatherFetched && <DayWeather dayWeather={dayWeather} />}
      <WeekWeather />
    </div>
  )
}

export default App

// Météo du jour : nom de la ville, température en Celsius, description du temps et icône
// Afficher les prévisions météo sur 5 jours toutes les trois heures
// Loader pendant les chargements