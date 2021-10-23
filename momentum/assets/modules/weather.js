const location = document.querySelector('.city__location');

const weatherForecast = document.querySelector('.weather__forecast');

const forecast = document.querySelector('.forecast__description');
const feels = document.querySelector('.feels__description');
const wind = document.querySelector('.wind__description');
const humidity = document.querySelector('.humidity__description');

const icon = document.querySelector('.weather__icon ');

// Get Forecast
function getForecast() {
  const idApi = `1b6b5070efbf756fbf0bba5241bcc2db`;
  const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${location.value}&appid=${idApi}`;

  const requestApi = fetch(urlApi)
    .then((res) => {
      if (res.status >= 400 && res.status < 500 && res.status != 404) {
        console.log('Error res');
      } else {
        return res.json();
      }
    })
    .then((data) => {
      if (data.cod == '404') {
        console.log('Error data');
        renderErrorApi();
      } else {
        return data;
      }
    })
    .catch(() => {
      throw new Error(renderErrorFetch());
    });

  return requestApi;
}

// Render Error Api
function renderErrorApi() {
  if (location.value === '[Location]') {
    weatherForecast.innerHTML = `<span>No Location</span>`;
  } else {
    weatherForecast.innerHTML = `
  <span>Incorrect</span>
  <span>request</span>
  <span>to API</span>
  `;
  }
}

// Render Error Fetch
function renderErrorFetch() {
  if (location.value === '[Location]') {
    weatherForecast.innerHTML = `<span>No Location</span>`;
  } else {
    weatherForecast.innerHTML = `
  <span>Wrong request</span>
  <span>or crashed</span>
  <span>Internet / Api</span>
  `;
  }
}

// Render Forecast
async function renderForecast() {
  const currentForecast = await getForecast();

  forecast.textContent = `${Math.round(currentForecast.main.temp - 273.15)}°, ${
    currentForecast.weather[0].description
  }`;
  feels.textContent = `Feels: ${Math.round(
    currentForecast.main.feels_like - 273.15,
  )}°`;
  wind.textContent = `Wind: ${currentForecast.wind.speed} m/s`;
  humidity.textContent = `Humidity: ${currentForecast.wind.speed}%`;
  icon.style.backgroundImage = `url('./assets/images/weather/${currentForecast.weather[0].icon}.svg`;
  console.log(icon);
}

export { renderForecast };
