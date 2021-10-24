import { renderForecast, setForecast } from './assets/modules/weather.js';
/* import { location } from './assets/modules/variables.js'; */
import { setVisibility } from './assets/modules/visibility.js';

window.addEventListener('load', renderForecast);

setForecast();
setVisibility();
