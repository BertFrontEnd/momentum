import { renderForecast, setForecast } from './assets/modules/weather.js';
import { setVisibility } from './assets/modules/visibility.js';
import { renderPhrase, setPhrase } from './assets/modules/quote.js';
import { setTime } from './assets/modules/time.js';
import { setDate } from './assets/modules/date.js';
import { setGreeting } from './assets/modules/greeting.js';

window.addEventListener('load', renderForecast);
window.addEventListener('load', renderPhrase);

setForecast();
setVisibility();
setPhrase();
setTime();
setDate();
setGreeting();
