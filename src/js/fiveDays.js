import fiveDaysTpl from '../templates/fiveDays.hbs';
import arrowLeft from '../images/arrowLeft.png';
import arrowRight from '../images/arrowRight.png';
import apiService from './base/apiService.js';
import { renderFiveDays } from '../js/base/helper.js';
import moreInfoWeather from './moreInfo.js';
import arrowRigfhtInfo from '../images/arrow-right-info.png';
import arrowLeftInfo from '../images/arrow-left-info.png';

// apiService.getData('forecast').then(data => {
//   document.querySelector('.fivedays-weather').innerHTML = fiveDaysTpl(data);
//   console.log(data);
// });
function renderFiveDay() {
  return apiService
    .getData('forecast')
    .then(data => {
      const renderData = renderFiveDays(data);
      
      const tplDate = {
        arrowLeft,
        arrowRight,
        arrowRigfhtInfo,
        arrowLeftInfo,
        ...renderData,
      };


      // .querySelector('.fivedays-weather')
      // .insertAdjacentHTML('afterbegin', fiveDaysTpl(tplDate));
      document.querySelector('.fivedays-weather').innerHTML = fiveDaysTpl(tplDate);
      const arrowLeftBtn = document.querySelector('.left-btn');
      const arrowRightBtn = document.querySelector('.right-btn');
      const container = document.querySelector('.five-days-weather-list');

      arrowRightBtn.addEventListener('click', scrollToRight);

      function scrollToRight(e) {
        console.log(e.target);
        container.scroll({
          left: 200,
          behavior: 'smooth',
        });
      }

      arrowLeftBtn.addEventListener('click', scrollToLeft);
      function scrollToLeft(e) {
        console.log(e.target);
        container.scroll({
          left: -200,
          behavior: 'smooth',
        });
      }

      // document
      //   .querySelector('.fivedays-weather')
      //   .insertAdjacentHTML('afterbegin', fiveDaysTpl(tplDate));
      document.querySelector('.fivedays-weather').innerHTML = fiveDaysTpl(tplDate);
      moreInfoWeather();
      // initEvtFiveDays();
      // console.log(data);

    })
    .catch(error => {
      console.log(error);
    });
}

// function initEvents() {

// }

// apiService.getData('forecast').then(data => {
//   const renderData = renderFiveDays(data);
//   const tplDate = {
//     arrowLeft,
//     arrowRight,
//     ...renderData,
//   };
//   document
//     .querySelector('.fivedays-weather')
//     .insertAdjacentHTML('afterbegin', fiveDaysTpl(tplDate));
//   // innerHTML = fiveDaysTpl(tplDate);

renderFiveDay();

export default renderFiveDay;

// apiService.getData('forecast').then(data => {
//   const renderData = renderFiveDays(data);
//   const tplDate = {
//     arrowLeft,
//     arrowRight,
//     ...renderData,
//   };
//   document.querySelector('.fivedays-weather').insertAdjacentHTML('afterbegin', fiveDaysTpl(tplDate));

//   // console.log(data);
// });

// Рендерим данные за 5 дней (перенести в файл fiveDays) - Руслан
// const fiveDays = document.querySelector('.fivedays-weather'); // вынести в рефы

// renderFiveDays = () => {
//   fiveDays.innerHTML = ;
// };
