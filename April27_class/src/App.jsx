import React, { useState, useEffect } from "react";
import useDebounce from "./components/Debaonsing";

function App() {
  const API_KEY = "55140bef13c48664c68c05e193f57bf5";

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const debouncedSearch = useDebounce(search, 500);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (!res.ok) {
        throw new Error("City not found");
      }

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <div
      style={{
        // padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <h1>Wether App</h1>
      <input
        type="text"
        value={search}
        placeholder="Enter city name..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.main.temp} °C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
