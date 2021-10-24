const toggleVisibility = (selector) => {
  const element = document.querySelector(selector);
  element.classList.toggle('visibility');
};

const buttonAudio = document.querySelector('.app__button--audio');
const buttonWeather = document.querySelector('.app__button--weather');
const buttonTime = document.querySelector('.app__button--time');
const buttonTodo = document.querySelector('.app__button--todo');
const buttonQuote = document.querySelector('.app__button--quote');

const setVisibility = () => {
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

export { setVisibility };
