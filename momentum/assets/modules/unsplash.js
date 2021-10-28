const nextArrow = document.querySelector('.main__arrow--right');
const previousArrow = document.querySelector('.main__arrow--left');

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

  const idApi = `MgO_AHZMq1XFgxbGWbar_LTzXmXayuqDh2kco9Zr7xw`;
  const urlApi = `https://api.unsplash.com/photos/random?orientation=landscape&query=${tagAPI}&client_id=${idApi}`;
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
        return data.urls.regular;
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
  const unsplash = document.querySelector('#unsplash');
  if (unsplash.checked == true) {
    let img = document.createElement('img');
    let src = await getUnsplashImage();
    img.src = src;
    img.onload = () =>
      (document.querySelector('body').style.backgroundImage = `url(${src})`);
  }
}

// Render Background
const renderBackgroundUnsplash = () => {
  if (unsplash.checked == true) {
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
const setLoopUnsplash = () => {
  if (unsplash.checked == true) {
    if (date.getMinutes() == 0 && date.getHours() == startScript) {
      startScript = (startScript + 1) % 24;
      console.log(startScript);
      counter++;
      getImage();
    }

    setTimeout(setLoopUnsplash, 500);
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
const nextImageUnsplash = () => {
  nextArrow.addEventListener('click', () => {
    if (unsplash.checked == true) {
      getImage();
      setDisabled(nextArrow);
    }
  });
};

const previousImageUnsplash = () => {
  if (unsplash.checked == true) {
    previousArrow.addEventListener('click', () => {
      getImage();
      setDisabled(previousArrow);
    });
  }
};

export {
  renderBackgroundUnsplash,
  setLoopUnsplash,
  nextImageUnsplash,
  previousImageUnsplash,
};
