import "./styles.css";

const location = `pflugerville`;
const APIUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=45P5NZGENNKHBPNP5YQZZC7NP`;

async function getWeather() {
  const response = await fetch(APIUrl);
  const weatherData = await response.json();
  console.log(weatherData.currentConditions);
}
getWeather();
