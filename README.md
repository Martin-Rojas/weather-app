# weather-app

# 🌦 Weather App

A simple weather application built with **HTML, CSS, and JavaScript**.  
It fetches real-time weather data using the [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api) and displays current conditions along with a 5-day forecast.

---

## 🚀 Features

- Search for any city or location.
- Display **current weather**:
  - Temperature (toggle between °C and °F)
  - Weather condition (with icon)
  - Feels-like temperature
  - Humidity
  - Wind speed
  - UV index
  - Sunrise and sunset times
- Display **5-day forecast** with:
  - Day of the week
  - Max & min temperatures
  - Weather icons
- Toggle visibility of **detailed conditions**.
- Responsive dark-themed UI.

---

## 📂 Project Structure

.
├── index.js # Main JavaScript (fetch data, render UI, handle events)
├── styles.css # Dark theme styling for app layout and components
├── template.html # HTML template (form, current weather, forecast, details)
└── /public/images # Weather condition icons (clear-day.png, rain.png, etc.)

---

## ⚙️ Setup

1. Clone or download this repo.
2. Get a free API key from [Visual Crossing](https://www.visualcrossing.com/weather-api).
3. Replace the placeholder key in **index.js**:

   ```js
   const APIUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=YOUR_API_KEY`;
   ```

4. Open template.html in your browser.

## Preview

Search bar to enter city

Header with location name and toggle button (°C / °F)

Current weather with temperature, icon, and condition description

Five-day forecast in horizontal cards

Details section with extra data (hidden until "View details" is clicked)

## 🔧 How It Works

Form submission updates the location value and fetches new data.

displayCurrentWeather() updates the current conditions.

getNextFiveDays() updates the 5-day forecast cards.

renderTemperatures() toggles between Celsius and Fahrenheit.

Event listeners:

submit → handle location search

toggle-degrees → switch between °C / °F

btn-details → show/hide extra weather details

## 🎨 Styling

Built with CSS Flexbox for layout.

Dark theme with green/blue accent buttons.

Mobile responsive (forecast cards stack vertically below 800px width).

## 📌 Future Improvements

Add hourly forecast.

Add loading spinners for better UX.

Add error handling for invalid city names.

Store last searched location in local storage.

## 📜 License
This project is open-source. Feel free to use and modify it.
