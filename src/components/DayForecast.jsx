import WeatherInfo from "./WeatherInfo";

export default function DayForecast({forecast}) {
  return (
    <div className="flex mx-4 overflow-x-auto">
      {forecast.map((step, index) => 
        <WeatherInfo key={index} {...step} />
      )}
    </div>
  )
}