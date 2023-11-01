import { useEffect, useState } from "react"

export default function WeatherInfo({weather, main, city}) {
  const [icon, setIcon] = useState('')
  console.log(main)
  useEffect(() => {
    setIcon(`https://openweathermap.org/img/wn/${weather.icon}@2x.png`);
  }, [weather.icon])

  return (
    <div className="p-4 m-2 bg-white rounded-lg shadow-md min-w-56">
      <img src={icon} alt="" className="w-24 h-24 mx-auto mb-4" />
      <p className="mb-2 text-center text-gray-700">{weather.description}</p>
      <ul className="text-sm text-gray-600">
        <li className="mb-1">Température min : {main.temp_min}°C</li>
        <li>Température max : {main.temp_max}°C</li>
      </ul>
  </div>
  )
}