const dateCurrent = document.querySelector('.date__current');

// Get Day
const getDay = () => {
  let currentDay = new Date().getDay();

  switch (currentDay) {
    case 0:
      currentDay = 'Sunday';
      break;
    case 1:
      currentDay = 'Monday';
      break;
    case 2:
      currentDay = 'Tuesday';
      break;
    case 3:
      currentDay = 'Wednesday';
      break;
    case 4:
      currentDay = 'Thursday';
      break;
    case 5:
      currentDay = 'Friday';
      break;
    case 6:
      currentDay = 'Saturday';
      break;

    default:
      throw new Error('Something went wrong!');
  }

  console.log(currentDay);
  return currentDay;
};

// Get Date
const getDate = () => {
  const date = new Date();

  const options = {
    month: 'long',
    day: 'numeric',
  };

  const currentDate = date.toLocaleDateString('en-EN', options);

  console.log(currentDate);
  return currentDate;
};

// Set Day
const setDate = () => {
  dateCurrent.textContent = `${getDay()}, ${getDate()}`;
};

export { setDate };
