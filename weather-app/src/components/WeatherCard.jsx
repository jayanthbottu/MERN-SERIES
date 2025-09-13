function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>
      <h3>{Math.round(weather.main.temp)}°C</h3>
      <p className="desc">{weather.weather[0].description}</p>
      <div className="details">
        <p>🌡️ Feels like: {Math.round(weather.main.feels_like)}°C</p>
        <p>💧 Humidity: {weather.main.humidity}%</p>
        <p>🌬️ Wind: {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;
