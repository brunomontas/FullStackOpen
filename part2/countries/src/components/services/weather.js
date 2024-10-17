import axios from 'axios';
const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast';
const api_key = import.meta.env.VITE_SOME_KEY;

const getWeather = (lat, lon) => {
  console.log('lat', lat);
  console.log('lon', lon);
  const request = axios.get(
    `${baseUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`
  );
  return request.then((response) => {
    console.log(response.data);
    return response.data;
  });
};

export default { getWeather };
