import apiService from '../apiService.js';

const body = document.body;

function setBgImages() {
  apiService.fetchImages('Lviv').then(data => {
    const contryImgUrl = data.hits[1].largeImageURL;
    const styleValue = `background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)) 0% 0% / cover, url(${contryImgUrl}) center fixed; background-size: cover;`;
    body.setAttribute('style', styleValue);
  });
}
setBgImages();

export default setBgImages;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// =====================================
// apiService.fetchImages().then(setBackgroundImage);

// // refs.searchInput.addEventListener('submit', changeBackgroundImage);

// function changeBackgroundImage(event) {
//   if (typeof event == 'object') {
//     event.preventDefault();
//     const form = event.currentTarget;
//     apiService.query = form.elements.query.value;
//   } else {
//     apiService.query = event;
//   }
//   apiService.fetchImages().then(setBackgroundImage);
// }

// function setBackgroundImage(backgroundImages) {
//   // console.log(backgroundImages);

//   if (backgroundImages.length === 0) {
//     apiService.query = 'cloudy';
//     apiService.fetchImages().then(setBackgroundImage);
//   } else {
//     body.backgroundWrapper.style = `background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
//   url('${backgroundImages[2].largeImageURL}') center fixed; background-size: cover;`;
//   }
// }

// changeBackgroundImage();

// ==================================== Рандомные картинки
// const body = document.body;

// function findRandomImg(min = 0, max = 20) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

// function renderBgImg(cityName) {
//   apiService
//     .fetchImages(cityName)
//     .then(res => res.hits[findRandomImg(0, res.hits.length)].largeImageURL)
//     .then(res => (body.style.backgroundImage = `url(${res})`));
// }
// renderBgImg('Lviv');
