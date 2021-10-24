const dateCurrent = document.querySelector('.date__current');

// Get Day
function getCurrentDate() {
  const currentDate = new Date();

  let month = currentDate.getMonth();

  switch (month) {
    case 0:
      month = 'January';
      break;
    case 1:
      month = 'February';
      break;
    case 2:
      month = 'March';
      break;
    case 3:
      month = 'April';
      break;
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'June';
      break;
    case 6:
      month = 'July';
      break;
    case 7:
      month = 'August';
      break;
    case 8:
      month = 'September';
      break;
    case 9:
      month = 'October';
      break;
    case 10:
      month = 'November';
      break;
    case 11:
      month = 'November';
      break;

    default:
      throw new Error('Something went wrong!');
  }

  let day = currentDate.getDay();

  switch (day) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;

    default:
      throw new Error('Something went wrong!');
  }

  let date = currentDate.getDate();

  const objectDay = {
    month: month,
    day: day,
    date: date,
  };

  return objectDay;
}

// Set Day
const setDate = () => {
  dateCurrent.textContent = `${getCurrentDate().month}, ${
    getCurrentDate().day
  } ${getCurrentDate().date}`;
};

export { setDate };
