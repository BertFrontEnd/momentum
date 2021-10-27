import playList from './playlist.js';

// Toggle Button
const toggleButton = () => {
  const button = document.querySelector('.direction__button--play');

  button.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('direction__button--pause');
  });
};

export { toggleButton };
