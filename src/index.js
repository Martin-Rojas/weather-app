import "./styles.css";

let location = `Austin`;

const addressEl = document.getElementById(`address`);
const currentTempIcon = document.getElementById(`weather-icon`);
const currentTempEl = document.getElementById(`temp`);
const currentTempIconDescription = document.getElementById(`icon-description`);
const dayOneEl = document.getElementById(`one-day`);
const dayTwoEl = document.getElementById(`two-day`);
const dayThreeEl = document.getElementById(`three-day`);
const dayFourEl = document.getElementById(`four-day`);
const dayFiveEl = document.getElementById(`five-day`);

const btnDetails = document.getElementById(`btn-details`);
const weatherDetails = document.getElementById(`weather-detials`);

const tempFeelsLikeEl = document.querySelector(`#feels-like`);
const humidityEl = document.getElementById(`humidity`);
const windEl = document.getElementById(`wind`);
const uvIndexEl = document.getElementById(`uvindex`);
const sunriseEl = document.getElementById(`sunrise`);
const sunsetEl = document.getElementById(`sunset`);

const formEL = document.getElementById(`form`);
const inputFormEl = document.getElementById(`location`);

// Get all 5 element in an array
const weatherDays = [dayOneEl, dayTwoEl, dayThreeEl, dayFourEl, dayFiveEl];

const weekDays = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];

// Get weather data from API
async function getWeather(city) {
  const APIUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=45P5NZGENNKHBPNP5YQZZC7NP`;
  const response = await fetch(APIUrl).catch((err) => console.log(err));
  const weatherData = await response.json();

  return weatherData;
}

async function displayCurrentWeather(city) {
  const data = await getWeather(city);

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

  // Current weather details
  // templike
  tempFeelsLikeEl.innerHTML =
    "Temperture feels: " + data.currentConditions.feelslike + "&deg";
  // humidity
  humidityEl.innerHTML = `Humidity: ${data.currentConditions.humidity}%`;
  // wind
  windEl.innerHTML = `Wind: ${data.currentConditions.windspeed} mph`;
  // Uv index
  uvIndexEl.innerHTML = `UV index: ${data.currentConditions.uvindex}`;
  // sunrise
  sunriseEl.innerHTML = `Sunrise: ${data.currentConditions.sunrise}`;
  // sunset
  sunsetEl.innerHTML = `Sunset: ${data.currentConditions.sunset}`;
}

async function getNextFiveDays(city) {
  // get data for next five days
  const data = await getWeather(city);
  for (let index = 0; index < 5; index++) {
    const dayEl = weatherDays[index];
    const img = dayEl.querySelector("img");
    const maxDegreesEl = dayEl.querySelector(`.max-degrees`);
    const minDegreesEl = dayEl.querySelector(`.min-degrees`);
    const dayOfWeekEl = dayEl.querySelector(`.week-day`);

    maxDegreesEl.innerHTML = `${Math.round(data.days[index].tempmax)}&deg`;
    minDegreesEl.innerHTML = `${Math.round(data.days[index].tempmin)}&deg`;
    img.setAttribute(`src`, `./images/${data.days[index].icon}.png`);

    // Get day of the weeek
    const dayNumber = new Date(data.days[index].datetime).getDay();
    console.log(weekDays[dayNumber]);

    dayOfWeekEl.innerHTML = weekDays[dayNumber];
  }
}

// Btn event handler
btnDetails.addEventListener(`click`, () => {
  weatherDetails.style.display =
    weatherDetails.style.display === "none" ? "block" : "none";
});

// Handle the form submitted and save the value
formEL.addEventListener(`submit`, (event) => {
  event.preventDefault();
  console.log(inputFormEl.value);
  location = inputFormEl.value;

  displayCurrentWeather(location);
  getNextFiveDays(location);
  console.log(location);
});
