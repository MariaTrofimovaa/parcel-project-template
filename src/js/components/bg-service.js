import apiService from '../base/apiService.js';

const body = document.body;
let location = 'kiev';
function setBgImages() {
  apiService.fetchImages('Lviv').then(data => {
    const contryImgUrl = data.hits[1].largeImageURL;
    const styleValue = `background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)) 0% 0% / cover, url(${contryImgUrl}) center fixed; background-size: cover;`;
    body.setAttribute('style', styleValue);
  });
}
setBgImages();

// Получаем текущую локацию после нажатия на Submit или Enter

const setLocationImg = newLocation => {
  location = newLocation;
};

export { setBgImages, setLocationImg };

// *************************** geilocation

// navigator.geolocation.getCurrentPosition(success, error);
// function error() {
//   // apiService.query();
//   // renderOneDayMarkup();
//   // dataFiveDays();
//   setLocationImg('Kiev');
//   setBgImages();
// }

// function success(position) {
//   const apikey = '993fb22893a947dbb2d0ca6e36241a91';

//   fetch(
//     `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=${apikey}`,
//   )
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       }
//       return Promise.reject(`Ошибка! Такого города нет в списке!`);
//     })
//     .then(data => {
//       const myCity = data.results[0].components.city;
//       console.log(myCity);
//       // apiService.query(myCity);
//       // renderOneDayMarkup();
//       // dataFiveDays();
//       setLocationImg(myCity);
//       setBgImages();
//     });
// }
