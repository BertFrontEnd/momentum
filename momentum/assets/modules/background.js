const nextArrow = document.querySelector('.main__arrow--right');
const previousArrow = document.querySelector('.main__arrow--left');

// Get Random Number
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Get Random Array
const getRandomArray = () => {
  let arraySet = [];

  while (arraySet.length < 20) {
    arraySet.push(getRandomNumber(1, 20));
    arraySet = [...new Set(arraySet)];
  }
  return arraySet;
};

// Counter
let counter = 0;

// Array of Image
const imageArray = getRandomArray().map((element) => {
  return (element = element < 10 ? `0${element}` : element.toString());
});

// Array of Time of Day
const timeOfDayArray = ['night', 'morning', 'afternoon', 'evening'];

// Object of Time of Day
const timeOfDayObject = {
  night: imageArray,
  morning: imageArray,
  afternoon: imageArray,
  evening: imageArray,
};

// Get Image
const getImage = () => {
  let folder = timeOfDayArray[Math.floor((counter % 24) / 6)];
  let imageNumber = counter % 6;
  let img = document.createElement('img');
  let src = `assets/images/background/${folder}/${timeOfDayObject[folder][imageNumber]}.jpg`;
  img.src = src;
  img.onload = () =>
    (document.querySelector('body').style.backgroundImage = `url(${src})`);
  console.log(src);
};

// Get Time
let date = new Date();

// Render Background
const renderBackground = () => {
  getImage();

  if (date.getMinutes() == 0) {
    counter++;
    getImage();
  }
};

// Start Script
let startScript = (date.getHours() + 1) % 24;

// Set Loop
const setLoop = () => {
  if (date.getMinutes() == 0 && date.getHours() == startScript) {
    startScript = (startScript + 1) % 24;
    console.log(startScript);
    counter++;
    getImage();
  }

  setTimeout(setLoop, 500);
};

// Set Disabled

const setDisabled = (selector) => {
  selector.disabled = true;

  setTimeout(() => {
    selector.disabled = false;
  }, 1000);
};

// Next Image
const nextImage = () => {
  nextArrow.addEventListener('click', () => {
    counter++;
    getImage();
    setDisabled(nextArrow);
  });
};

const previousImage = () => {
  previousArrow.addEventListener('click', () => {
    if (counter < 0) {
      counter = 20;
    }

    counter--;
    getImage();
    setDisabled(previousArrow);
  });
};

export { renderBackground, setLoop, nextImage, previousImage };