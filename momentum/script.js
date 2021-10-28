/* alert(
  'If possible, postpone the check until Thursday, maybe after 15.00, please. Or let me know the deadline when you can check (https://t.me/BertCAD). Thank you very much!',
); */

import { renderValue, setValue } from './assets/modules/storage.js';
import { renderForecast, setForecast } from './assets/modules/weather.js';
import { setVisibility } from './assets/modules/visibility.js';
import { renderPhrase, setPhrase } from './assets/modules/quote.js';
import { setTime } from './assets/modules/time.js';
import { setDate } from './assets/modules/date.js';
import { setGreeting } from './assets/modules/greeting.js';
import {
  renderBackground,
  setLoop,
  nextImage,
  previousImage,
} from './assets/modules/unsplash.js';
import { setAudio } from './assets/modules/audio.js';

window.addEventListener('load', renderValue);
window.addEventListener('load', renderForecast);
window.addEventListener('load', renderPhrase);
window.addEventListener('load', renderBackground);

setValue();
setForecast();
setVisibility();
setPhrase();
setTime();
setDate();
setGreeting();
setLoop();
nextImage();
previousImage();
setAudio();
