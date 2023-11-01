import { useEffect, useState } from "react"

export default function DayWeather({weather, main, city}) {
  const [icon, setIcon] = useState('')
  
  useEffect(() => {
    setIcon(`https://openweathermap.org/img/wn/${weather.icon}@2x.png`);
  }, [])

  return (
    <div>
      <h3 className="text-black">Météo de {city}</h3>
      <img src={icon} alt="" />
      <p>{weather.description}</p>
      <ul>
        <li>Température min : {main.temp_min}°</li>
        <li>Température max : {main.temp_max}°</li>
      </ul>
    </div>
  )
}