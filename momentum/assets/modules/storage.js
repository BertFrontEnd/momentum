const location = document.querySelector('.city__location');
const name = document.querySelector('.greeting__name');
const text = document.querySelector('.focus__text');

// Get Local Storage Info
function getLocalStorageInfo(selector, key) {
  let loc = localStorage.getItem(key);

  if (loc == null || loc.toString().trim() === '') {
    if (selector.classList.contains('city__location')) {
      selector.value = 'Minsk';
    } else {
      selector.value = '';
    }
  } else {
    selector.textContent = loc;
  }

  return loc;
}

// Set Local Storage Info

const setLocalStorageInfo = () => {};

// Set Value

const setValue = () => {
  getLocalStorageInfo(location, 'location');
  getLocalStorageInfo(name, 'name');
  getLocalStorageInfo(text, 'text');
};

export { setValue };
