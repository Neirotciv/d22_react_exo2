import { useEffect, useState } from "react"

export default function DayWeather({dayWeather}) {
  const [icon, setIcon] = useState('')
  
  useEffect(() => {
    setIcon(`https://openweathermap.org/img/wn/${dayWeather.weather.icon}@2x.png`);
    console.log(dayWeather)
  }, [])

  return (
    <div>
      <h3 className="text-black">Météo de {dayWeather.city}</h3>
      <img src={icon} alt="" />
      <p>{dayWeather.weather.description}</p>
      <ul>
        <li>Température min : {dayWeather.main.temp_min}°</li>
        <li>Température max : {dayWeather.main.temp_max}°</li>
      </ul>
    </div>
  )
}