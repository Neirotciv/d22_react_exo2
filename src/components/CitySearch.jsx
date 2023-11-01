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
  }, [city])
  
  return (
    <div className="flex items-end mx-4">
      <div className="flex flex-col w-full">
        <label htmlFor="city">Choisir une ville</label>
        <input 
          className="border" 
          type="text" 
          id="city"
          onChange={e => setCityInput(e.target.value)}
        />
      </div>
      <button 
        onClick={() => setCity(cityInput)}
        className="py-1 mx-2 bg-blue-500 rounded-md hover:bg-blue-600 w-36"
      >
        Valider
      </button>
    </div>
  )
}