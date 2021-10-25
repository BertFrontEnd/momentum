alert(
  'If possible, postpone the check until Thursday, maybe after 15.00, please. Or let me know the deadline when you can check (https://t.me/BertCAD). Thank you very much!',
);

import { renderForecast, setForecast } from './assets/modules/weather.js';
import { setVisibility } from './assets/modules/visibility.js';
import { renderPhrase, setPhrase } from './assets/modules/quote.js';
import { setTime } from './assets/modules/time.js';
import { setDate } from './assets/modules/date.js';
import { setGreeting } from './assets/modules/greeting.js';
import { setValue } from './assets/modules/storage.js';

window.addEventListener('load', renderForecast);
window.addEventListener('load', renderPhrase);

setForecast();
setVisibility();
setPhrase();
setTime();
setDate();
setGreeting();
setValue();
