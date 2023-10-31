import CitySearch from "./components/CitySearch";
import DayWeather from "./components/DayWeather";
import WeekWeather from "./components/WeekWeather";
import { useEffect, useState } from "react";

function App() {
  const apiKey = "ee9be9d03ef3e3369702f2610e323f41";
  const [geo, setGeo] = useState("");
  
  return (
    <div className="container mx-auto">
      <h1 className="text-red-400">Weather App</h1>
      <CitySearch apiKey={apiKey} setGeo={setGeo} />
      <DayWeather />
      <WeekWeather />
    </div>
  )
}

export default App

// Récupérer les coordonnées de la ville
// Météo du jour : nom de la ville, température en Celsius, description du temps et icône
// Afficher les prévisions météo sur 5 jours toutes les trois heures
// Loader pendant les chargements

// [
//   {
//       "name": "Lyon",
//       "local_names": {
//           "br": "Lyon",
//           "lv": "Liona",
//           "bg": "Лион",
//           "zh": "里昂",
//           "lt": "Lionas",
//           "la": "Lugdunum",
//           "oc": "Lion",
//           "it": "Lione",
//           "ur": "لیوں",
//           "ca": "Lió",
//           "be": "Ліён",
//           "uk": "Ліон",
//           "el": "Λυών",
//           "kn": "ಲ್ಯೊ",
//           "hu": "Lyon",
//           "pt": "Lião",
//           "ko": "리옹",
//           "en": "Lyon",
//           "fr": "Lyon",
//           "gl": "Lión",
//           "ja": "リヨン",
//           "ar": "ليون",
//           "eo": "Liono",
//           "ru": "Лион",
//           "mk": "Лион",
//           "sr": "Лион"
//       },
//       "lat": 45.7578137,
//       "lon": 4.8320114,
//       "country": "FR",
//       "state": "Auvergne-Rhône-Alpes"
//   }
// ]