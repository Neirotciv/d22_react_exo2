import DayForecast from "./DayForecast";
import { formatDateFromTimestamp } from '../utils/date';
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
        city: city,
        date: formatDateFromTimestamp(data.dt),
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
    <div className="">
      {daysForecast.map((day, index) => {
        return (
          <div key={index} className="bg-slate-100">
            <h2 className="pt-4 my-4 text-xl text-center">{day[0].date}</h2>
            <DayForecast forecast={day} />
          </div>
        )
      })}
    </div>
  )
}