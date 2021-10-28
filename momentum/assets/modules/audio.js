import playList from './playlist.js';

const audioDirection = document.querySelector('.audio__direction');
const buttonPlayPause = document.querySelector('.play-pause');
const nextButton = document.querySelector('.direction__button--next');
const previousButton = document.querySelector('.direction__button--prev');
const currentTrack = document.querySelector('.current__track');

// Set Play Number
let playNumber = 0;

// Set Play List
const setPlayList = () => {
  const audioPlayList = document.querySelector('.audio__play-list');

  playList.forEach((elem) => {
    const track = document.createElement('li');
    track.classList.add('play-list__item');
    track.textContent = elem.title;
    audioPlayList.append(track);
  });
};

// Set Active Item
const setActiveItem = () => {
  const tracks = document.querySelectorAll('.play-list__item');

  tracks.forEach((elem) => {
    elem.classList.remove('play-list__item--active');
  });

  tracks[playNumber].classList.add('play-list__item--active');
};

// Constructor
const audio = new Audio();
audio.src = playList[playNumber].src;
audio.currentTime = 0;
/* setActiveItem(); */

// Get Audio
const getAudio = (e) => {
  if (e.target.classList.contains('play-pause')) {
    if (audio.paused) {
      buttonPlayPause.classList.remove('direction__button--play');
      buttonPlayPause.classList.add('direction__button--pause');
      audio.play();
      console.log('play');
    } else {
      buttonPlayPause.classList.remove('direction__button--pause');
      buttonPlayPause.classList.add('direction__button--play');
      audio.pause();
      console.log('pause');
    }

    setActiveItem();
  }

  if (e.target.classList.contains('direction__button--next')) {
    playNumber++;

    if (playNumber > playList.length - 1) {
      playNumber = 0;
    }

    if (buttonPlayPause.classList.contains('direction__button--play')) {
      buttonPlayPause.classList.remove('direction__button--play');
      buttonPlayPause.classList.add('direction__button--pause');
    }

    audio.src = playList[playNumber].src;
    audio.play();
    setActiveItem();
  }

  if (e.target.classList.contains('direction__button--prev')) {
    playNumber--;

    if (playNumber < 0) {
      playNumber = playList.length - 1;
    }

    if (buttonPlayPause.classList.contains('direction__button--play')) {
      buttonPlayPause.classList.remove('direction__button--play');
      buttonPlayPause.classList.add('direction__button--pause');
    }

    audio.src = playList[playNumber].src;
    audio.play();
    setActiveItem();
  }

  currentTrack.textContent = playList[playNumber].title;
};

const setAudio = () => {
  setPlayList();
  audioDirection.addEventListener('click', (e) => {
    getAudio(e);
  });
};

export { setAudio };
