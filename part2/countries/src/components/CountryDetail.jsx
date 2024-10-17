import { useState, useEffect } from 'react';
import weatherService from './services/weather';

const CountryDetail = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    weatherService
      .getWeather(country.latlng[0], country.latlng[1])
      .then((apiResponse) => {
        setWeather(apiResponse);
      });
  }, []);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
      {weather ? (
        <div>
          <h1>Weather in {country.name.common}</h1>
          <p>temperature {weather.list[0].main.temp} Celcious</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}.png`}
          />
          <p>wind {weather.list[0].wind.speed} m/s</p>
        </div>
      ) : (
        <p>getting weather data...</p>
      )}
    </div>
  );
};

export default CountryDetail;
