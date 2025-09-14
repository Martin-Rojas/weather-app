import "./styles.css";

const location = `pflugerville`;
const APIUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=45P5NZGENNKHBPNP5YQZZC7NP`;

async function getWeather() {
  const response = await fetch(APIUrl).catch((err) => console.log(err));
  const weatherData = await response.json();
  console.log(weatherData.currentConditions);
  const displayWeatherData = {
    dateTime: weatherData.currentConditions.datetime,
    tempMax: weatherData.currentConditions.temp,
    humidity: weatherData.currentConditions.humidity
  };
  return displayWeatherData;
}
const data = getWeather()
console.log(data);
