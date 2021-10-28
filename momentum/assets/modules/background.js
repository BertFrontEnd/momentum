const github = document.querySelector('#github');
const unsplash = document.querySelector('#unsplash');
const flickr = document.querySelector('#flickr');

if (github.checked === true) {
  renderBackgroundGithub();
}

if (unsplash.checked === true) {
   renderBackgroundUnsplash();
}

if (flickr.checked === true) {
    renderBackgroundFlickr();
}

/* export { renderBackground, setLoop, nextImage, previousImage }; *
