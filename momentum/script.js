import { renderForecast } from './assets/modules/weather.js';
import { location } from './assets/modules/variables.js';

window.addEventListener('load', renderForecast);
location.addEventListener('blur', renderForecast);
