const greetingTitle = document.querySelector('.greeting__title');

// Set Greeting
const getGreeting = () => {
  const currentHour = new Date().getHours();
  let greeting = '';

  switch (true) {
    case currentHour >= 6 && currentHour < 12:
      greeting = 'Good morning, ';
      break;
    case currentHour >= 12 && currentHour < 18:
      greeting = 'Good day, ';
      break;
    case currentHour >= 18 && currentHour < 24:
      greeting = 'Good evening, ';
      break;
    case currentHour >= 0 && currentHour < 6:
      greeting = 'Good night, ';
      break;
  }

  return greeting;
};

// Render Greeting
const setGreeting = () => {
  greetingTitle.textContent = `${getGreeting()}`;
};

export { setGreeting };
