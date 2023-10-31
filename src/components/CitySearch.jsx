import { useEffect, useState } from "react";

export default function CitySearch({apiKey, setGeo}) {
  const [city, setCity] = useState('');
  const [cityInput, setCityInput] = useState('');
  
  useEffect(() => {
    if (city !== '') {
      fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`)
      .then(response => response.json())
      .then(geoData => {
        console.log(geoData[0]);
        setGeo(geoData[0]);
      });
    }
  },[city])
  
  return (
    <div className="flex flex-col"> 
      <h2>{city}</h2>
      <label htmlFor="city">Ville</label>
      <input 
        className="border" 
        type="text" 
        id="city"
        onChange={e => setCityInput(e.target.value)}
      />
      <button onClick={() => setCity(cityInput)}>Valider</button>
    </div>
  )
}