import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./index.css";

function App() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();

      if (data.cod === 200) {
        setWeather(data);
      } else {
        setWeather(null);
        alert("❌ City not found!");
      }
    } catch (error) {
      console.error("⚠️ Error fetching weather:", error);
    }
  };

  return (
    <div className="app">
      <header>
        <h1 className="title">☁️ Modern Weather</h1>
      </header>
      <main>
        <SearchBar onSearch={fetchWeather} />
        {weather && <WeatherCard weather={weather} />}
      </main>
    </div>
  );
}

export default App;
