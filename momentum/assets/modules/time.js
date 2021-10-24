const time = document.querySelector('.time__current');

const getTime = () => {
  const time = new Date();
  const h = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
  const m =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
  const s =
    time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();

  const objectTime = {
    hour: h,
    minute: m,
    second: s,
  };

  return objectTime;
};

// Set Time
const setTime = () => {
  setInterval(() => {
    const currentTime = getTime();

    time.textContent = `${currentTime.hour}:${currentTime.minute}:${currentTime.second}`;
  }, 1);
};

export { setTime };
