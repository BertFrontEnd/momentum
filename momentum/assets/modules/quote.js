const quoteButton = document.querySelector('.quote__button');
const quoteText = document.querySelector('.quote__text');
const quoteAuthor = document.querySelector('.quote__author');

// Get Phrase
const getPhrase = () => {
  /*   const urlApi =
    'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'; */

  const urlApi = 'assets/quotes.json';

  const requestApi = fetch(urlApi)
    .then((res) => res.json())
    .then((data) => data)
    .catch(() => {
      throw new Error('Something went wrong!');
    });
  return requestApi;
};

// Render Phrase
async function renderPhrase() {
  quoteButton.classList.add('quote__button--request');

  const phrases = await getPhrase();
  const currentRandomPhrase =
    phrases[Math.floor(Math.random() * phrases.length)];

  quoteText.textContent = `“${currentRandomPhrase.quoteText}”`;
  quoteAuthor.textContent = `${currentRandomPhrase.quoteAuthor}`;

  quoteButton.classList.remove('quote__button--request');
}

// Set Phrase
const setPhrase = () => {
  quoteButton.addEventListener('click', renderPhrase);
};

export { renderPhrase, setPhrase };
