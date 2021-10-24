import { renderForecast } from './assets/modules/weather.js';
import { location } from './assets/modules/variables.js';
import { setVisibility } from './assets/modules/visibility.js';

window.addEventListener('load', renderForecast);
location.addEventListener('blur', renderForecast);

setVisibility();
