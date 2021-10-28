const nextArrow = document.querySelector('.main__arrow--right');
const previousArrow = document.querySelector('.main__arrow--left');

// Get Random Number
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Get Time
let date = new Date();

// Array of Time of Day
const timeOfDayArray = ['night', 'morning', 'afternoon', 'evening'];
let tagAPI = '';

const requestButton = document.querySelector('.request__button');
const requestField = document.querySelector('.request__field');

function getUnsplashImage() {
  if (requestField.value === '') {
    tagAPI = timeOfDayArray[Math.floor((date.getHours() % 24) / 6)];
  } else {
    tagAPI = requestField.value;
  }

  const idApi = `b53ea7820404579c38fa41b37c9608cd`;
  const urlApi = ` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${idApi}&tags=${tagAPI}&extras=url_l&format=json&nojsoncallback=1`;
  console.log('url:', urlApi);

  const requestApi = fetch(urlApi)
    .then((res) => {
      if (res.status >= 400 && res.status < 500 && res.status != 404) {
        console.log('Error res');
      } else {
        return res.json();
      }
    })
    .then((data) => {
      if (data.cod == '404') {
        console.log('Error data');
      } else {
        return data.photos.photo[getRandomNumber(0, 100)].url_l;
      }
    })
    .catch(() => {
      throw new Error('Something went wrong!');
    });

  return requestApi;
}

// Get Request
requestButton.addEventListener('click', () => {
  tagAPI = requestField.value;
  getImage();
});

// Get Image
async function getImage() {
  if (flickr.checked == true) {
    let img = document.createElement('img');
    let src = await getUnsplashImage();
    img.src = src;
    img.onload = () =>
      (document.querySelector('body').style.backgroundImage = `url(${src})`);
  }
}

// Render Background
const renderBackgroundFlickr = () => {
  if (flickr.checked == true) {
    getImage();
    setInterval(() => {
      counter++;
      getImage();
    }, 1.08e6);
  }
};

// Start Script
let startScript = (date.getHours() + 1) % 24;

// Set Loop
const setLoopFlickr = () => {
  if (flickr.checked == true) {
    if (date.getMinutes() == 0 && date.getHours() == startScript) {
      startScript = (startScript + 1) % 24;
      console.log(startScript);
      counter++;
      getImage();
    }

    setTimeout(setLoopFlickr, 500);
  }
};

// Set Disabled
const setDisabled = (selector) => {
  selector.disabled = true;

  setTimeout(() => {
    selector.disabled = false;
  }, 1000);
};

// Next Image
const nextImageFlickr = () => {
  if (flickr.checked == true) {
    nextArrow.addEventListener('click', () => {
      getImage();
      setDisabled(nextArrow);
    });
  }
};

const previousImageFlickr = () => {
  if (flickr.checked == true) {
    previousArrow.addEventListener('click', () => {
      getImage();
      setDisabled(previousArrow);
    });
  }
};

export {
  renderBackgroundFlickr,
  setLoopFlickr,
  nextImageFlickr,
  previousImageFlickr,
};
