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
    selector.value = loc;
  }

  return loc;
}

// Set Local Storage Info
const setLocalStorageInfo = (e) => {
  let target = e.target;

  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode === 13) {
      if (
        !target.value.toString().trim() == '' &&
        !target.value.includes('[Enter ')
      ) {
        localStorage.setItem(target.className, target.value);
      }
      target.blur();
    }
  } else if (e.type === 'blur') {
    if (
      target.value.toString().trim() == '' ||
      target.value.includes('[Enter ')
    ) {
      if (target.className === 'city__location') {
        getLocalStorageInfo(location, 'city__location');
      } else if (target.className === 'greeting__name') {
        getLocalStorageInfo(name, 'greeting__name');
      } else if (target.className === 'focus__text') {
        getLocalStorageInfo(text, 'focus__text');
      }
    } else {
      localStorage.setItem(target.className, target.value);
    }
  }
};

//  Get Value
const getValue = () => {
  getLocalStorageInfo(location, 'city__location');
  getLocalStorageInfo(name, 'greeting__name');
  getLocalStorageInfo(text, 'focus__text');
};

// Set Value
const setValue = () => {
  location.addEventListener('keypress', setLocalStorageInfo);
  location.addEventListener('blur', setLocalStorageInfo);

  name.addEventListener('keypress', setLocalStorageInfo);
  name.addEventListener('blur', setLocalStorageInfo);

  text.addEventListener('keypress', setLocalStorageInfo);
  text.addEventListener('blur', setLocalStorageInfo);
};

export { getValue, setValue };
