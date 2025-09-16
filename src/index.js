import "./styles.css";

const location = `barcelona`;
const APIUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=45P5NZGENNKHBPNP5YQZZC7NP`;

const addressEl = document.getElementById(`address`);
const currentTempIcon = document.getElementById(`weather-icon`);
const currentTempEl = document.getElementById(`temp`);
const currentTempIconDescription = document.getElementById(`icon-description`);

async function getWeather() {
  const response = await fetch(APIUrl).catch((err) => console.log(err));
  const weatherData = await response.json();

  const displayWeatherData = {
    dateTime: weatherData.currentConditions.datetime,
    tempMax: weatherData.currentConditions.temp,
    humidity: weatherData.currentConditions.humidity,
    currentPlace: weatherData.resolvedAddress,
    icon: weatherData.currentConditions.icon,
    conditions: weatherData.currentConditions.conditions,
  };

  return displayWeatherData;
}

async function displayData() {
  const data = await getWeather();

  // Address
  addressEl.innerHTML = data.currentPlace;

  // Icon imgs
  currentTempIcon.setAttribute(`src`, `./images/${data.icon}.png`);
  // Current Temp
  currentTempEl.innerHTML = `${Math.round(data.tempMax)}&deg`;

  // Current icon description
  currentTempIconDescription.innerHTML = data.conditions;
  
}
displayData();
