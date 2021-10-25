const time = document.querySelector('.time__current');

const getTime = () => {
  const date = new Date();
  const getCurrentTime = date.toLocaleTimeString();
  return getCurrentTime;
};

// Set Time
const setTime = () => {
  setInterval(() => {
    const setCurrentTime = getTime();

    time.textContent = `${setCurrentTime}`;
  }, 1);
};

export { setTime };
