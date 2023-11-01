import WeatherInfo from "./WeatherInfo";

export default function DayForecast({forecast}) {
  return (
    <div className="flex">
      {forecast.map((step, index) => 
        <WeatherInfo key={index} {...step} />
      )}
    </div>
  )
}