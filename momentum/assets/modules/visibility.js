// Toggle Visibility
const toggleVisibility = (selector) => {
  const element = document.querySelector(selector);
  element.classList.toggle('visibility');
};

const buttonAudio = document.querySelector('.app__button--audio');
const buttonWeather = document.querySelector('.app__button--weather');
const buttonTime = document.querySelector('.app__button--time');
const buttonTodo = document.querySelector('.app__button--todo');
const buttonQuote = document.querySelector('.app__button--quote');

const audio = document.querySelector('#audio');
const weather = document.querySelector('#weather');
const time = document.querySelector('#time');
const todo = document.querySelector('#todo');
const quote = document.querySelector('#quote');

// Set Visibility Button
const setVisibilityButton = () => {
  buttonAudio.addEventListener('click', () => {
    toggleVisibility('.header__audio');
  });
  buttonWeather.addEventListener('click', () => {
    toggleVisibility('.header__weather');
  });
  buttonTime.addEventListener('click', () => {
    toggleVisibility('.main');
  });
  buttonTodo.addEventListener('click', () => {
    toggleVisibility('.footer__todo');
  });
  buttonQuote.addEventListener('click', () => {
    toggleVisibility('.footer__quote');
  });
};
// Set Visibility Load
const setVisibilityLoad = () => {
  if (!audio.checked) {
    toggleVisibility('.header__audio');
  }
  if (!weather.checked) {
    toggleVisibility('.header__weather');
  }
  if (!time.checked) {
    toggleVisibility('.main');
  }
  if (!todo.checked) {
    toggleVisibility('.footer__todo');
  }
  if (!quote.checked) {
    toggleVisibility('.footer__quote');
  }
};

export { setVisibilityButton, setVisibilityLoad };
