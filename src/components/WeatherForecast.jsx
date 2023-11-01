import DayForecast from "./DayForecast";
import { useEffect, useState } from "react"

export default function ForecastWeather({city, list}) {
  const [daysForecast, setDaysForecast] = useState([]);

  useEffect(() => {
    const formattedForecast = formatForecastData(list);
    const groupedForecast = groupForecasts(formattedForecast);
    setDaysForecast(groupedForecast);
  }, [list]);

  const formatForecastData = (dataList) => {
    return dataList.map(data => {
      const step = {
        weather: data.weather[0],
        main: data.main,
        city: city
      }
      return step;
    })
  }

  const groupForecasts = (forecasts) => {
    const grouped = [];
    for (let i = 0; i < forecasts.length; i += 8) {
      grouped.push(forecasts.slice(i, i + 8));
    }
    return grouped;
  }

  return (
    <>
      {daysForecast.map((day, index) => 
        <DayForecast key={index} forecast={day} />
      )}
    </>
  )
}