const github = document.querySelector('#github');
const unsplash = document.querySelector('#unsplash');
const flickr = document.querySelector('#flickr');

const audio = document.querySelector('#audio');
const weather = document.querySelector('#weather');
const time = document.querySelector('#time');
const todo = document.querySelector('#todo');
const quote = document.querySelector('#quote');

const en = document.querySelector('#en');
const ru = document.querySelector('#ru');

const toLocalStorage = (selector, key) => {
  const val = selector.checked;
  localStorage.setItem(key, val);
};

const fromLocalStorage = (selector, key) => {
  const local = JSON.parse(localStorage.getItem(key));
  if (local == null) {
    return;
  } else {
    console.log(local);
    selector.checked = Boolean(local);
  }
};

const getLocalStorage = () => {
  fromLocalStorage(github, 'githubKey');
  fromLocalStorage(unsplash, 'unsplashKey');
  fromLocalStorage(flickr, 'flickrKey');
  fromLocalStorage(audio, 'audioKey');
  fromLocalStorage(weather, 'weatherKey');
  fromLocalStorage(time, 'timeKey');
  fromLocalStorage(todo, 'todoKey');
  fromLocalStorage(quote, 'quoteKey');
  fromLocalStorage(en, 'enKey');
  fromLocalStorage(ru, 'ruKey');
};

const setCheckedValue = () => {
  toLocalStorage(github, 'githubKey');
  toLocalStorage(unsplash, 'unsplashKey');
  toLocalStorage(flickr, 'flickrKey');
  toLocalStorage(audio, 'audioKey');
  toLocalStorage(weather, 'weatherKey');
  toLocalStorage(time, 'timeKey');
  toLocalStorage(todo, 'todoKey');
  toLocalStorage(quote, 'quoteKey');
  toLocalStorage(en, 'enKey');
  toLocalStorage(ru, 'ruKey');
};

export { setCheckedValue, getLocalStorage };
