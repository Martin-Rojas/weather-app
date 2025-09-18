import "./styles.css";

const location = `Austin`;
const APIUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=45P5NZGENNKHBPNP5YQZZC7NP`;

const addressEl = document.getElementById(`address`);
const currentTempIcon = document.getElementById(`weather-icon`);
const currentTempEl = document.getElementById(`temp`);
const currentTempIconDescription = document.getElementById(`icon-description`);
const dayOneEl = document.getElementById(`one-day`);
const dayTwoEl = document.getElementById(`two-day`);
const dayThreeEl = document.getElementById(`three-day`);
const dayFourEl = document.getElementById(`four-day`);
const dayFiveEl = document.getElementById(`five-day`);

// Get all 5 element in an array
const weatherDays = [dayOneEl, dayTwoEl, dayThreeEl, dayFourEl, dayFiveEl];

const weekDays = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];

// Get weather data from API
async function getWeather() {
  const response = await fetch(APIUrl).catch((err) => console.log(err));
  const weatherData = await response.json();

  return weatherData;
}

async function displayCurrentWeather() {
  const data = await getWeather();

  // Address
  addressEl.innerHTML = data.resolvedAddress;

  // Icon imgs
  currentTempIcon.setAttribute(
    `src`,
    `./images/${data.currentConditions.icon}.png`
  );
  // Current Temp
  currentTempEl.innerHTML = `${Math.round(data.currentConditions.temp)}&deg`;

  // Current icon description
  currentTempIconDescription.innerHTML = data.currentConditions.conditions;
}
displayCurrentWeather();

async function getNextFiveDays() {
  // get data for next five days
  const data = await getWeather();
  for (let index = 0; index < 5; index++) {
    const dayEl = weatherDays[index];
    const img = dayEl.querySelector("img");
    const maxDegreesEl = dayEl.querySelector(`.max-degrees`);

    maxDegreesEl.innerHTML = `${Math.round(data.days[index].tempmax)}&deg`;

    img.setAttribute(`src`, `./images/${data.days[index].icon}.png`);
  }
}

getNextFiveDays();
