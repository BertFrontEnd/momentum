const location = document.querySelector('.city__location');

const forecast = document.querySelector('.forecast__description');
const feels = document.querySelector('.feels__description');
const wind = document.querySelector('.wind__description');
const humidity = document.querySelector('.humidity__description');

const icon = document.querySelector('.weather__icon ');

// Get Forecast
function getForecast() {
  const location = document.querySelector('.city__location');

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
  if (!location.value) {
    forecast.textContent = 'No Location';
  } else {
    forecast.textContent = 'Incorrect request to API';
  }
}

// Render Error Fetch
function renderErrorFetch() {
  if (!location.value) {
    forecast.textContent = 'No Location';
  } else {
    forecast.textContent = 'Wrong request or crashed Internet / Api';
  }
}

// Render Forecast
async function renderForecast() {
  forecast.textContent = '';
  feels.textContent = '';
  wind.textContent = '';
  humidity.textContent = '';
  icon.style.backgroundImage = '';

  const currentForecast = await getForecast();

  forecast.textContent = `${Math.round(currentForecast.main.temp - 273.15)}°, ${
    currentForecast.weather[0].description
  }`;
  feels.textContent = `Feels: ${Math.round(
    currentForecast.main.feels_like - 273.15,
  )}°`;
  wind.textContent = `Wind: ${Math.round(currentForecast.wind.speed)} m/s`;
  humidity.textContent = `Humidity: ${Math.round(currentForecast.wind.speed)}%`;
  icon.style.backgroundImage = `url('./assets/images/weather/${currentForecast.weather[0].icon}.svg`;
}

// Set Forecast
const setForecast = () => {
  location.addEventListener('blur', renderForecast);
};

export { renderForecast, setForecast };
