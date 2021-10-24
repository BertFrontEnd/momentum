import { renderForecast, setForecast } from './assets/modules/weather.js';
/* import { location } from './assets/modules/variables.js'; */
import { setVisibility } from './assets/modules/visibility.js';
import { setPhrase } from './assets/modules/quote.js';
import { renderTime } from './assets/modules/time.js';

window.addEventListener('load', renderForecast);
window.addEventListener('load', renderTime);

setForecast();
setVisibility();
setPhrase();
