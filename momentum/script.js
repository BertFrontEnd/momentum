/* alert(
  'If possible, postpone the check until Thursday, maybe after 15.00, please. Or let me know the deadline when you can check (https://t.me/BertCAD). Thank you very much!',
);
 */
import { renderValue, setValue } from './assets/modules/storage.js';
import { renderForecast, setForecast } from './assets/modules/weather.js';
import {
  setVisibilityButton,
  setVisibilityLoad,
} from './assets/modules/visibility.js';
import { renderPhrase, setPhrase } from './assets/modules/quote.js';
import { setTime } from './assets/modules/time.js';
import { setDate } from './assets/modules/date.js';
import { setGreeting } from './assets/modules/greeting.js';
import { setAudio } from './assets/modules/audio.js';
import {
  renderBackgroundGithub,
  setLoopGithub,
  nextImageGithub,
  previousImageGithub,
} from './assets/modules/github.js';
import {
  renderBackgroundUnsplash,
  setLoopUnsplash,
  nextImageUnsplash,
  previousImageUnsplash,
} from './assets/modules/unsplash.js';
import {
  renderBackgroundFlickr,
  setLoopFlickr,
  nextImageFlickr,
  previousImageFlickr,
} from './assets/modules/flickr.js';
import { setCheckedValue, getLocalStorage } from './assets/modules/checked.js';

const github = document.querySelector('#github');
const unsplash = document.querySelector('#unsplash');
const flickr = document.querySelector('#flickr');

window.addEventListener('load', renderValue);
window.addEventListener('load', renderForecast);
window.addEventListener('load', renderPhrase);
window.addEventListener('load', () => {
  if (github.checked == true) {
    renderBackgroundGithub();
    setLoopGithub();
    nextImageGithub();
    previousImageGithub();
  }

  if (unsplash.checked == true) {
    renderBackgroundUnsplash();
    setLoopUnsplash();
    nextImageUnsplash();
    previousImageUnsplash();
  }

  if (flickr.checked == true) {
    renderBackgroundFlickr();
    setLoopFlickr();
    nextImageFlickr();
    previousImageFlickr();
  }
});

window.addEventListener('unload', setCheckedValue);
window.addEventListener('load', () => {
  setVisibilityLoad();
});

setValue();
setForecast();
setVisibilityButton();
setPhrase();
setTime();
setDate();
setGreeting();
setAudio();
getLocalStorage();
