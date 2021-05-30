import fiveDaysTpl from '../templates/fiveDays.hbs';
import arrowLeft from '../images/arrowLeft.png';
import arrowRight from '../images/arrowRight.png';
// import fiveDaysTpl from '../templates/fiveDays.hbs';
import apiService from '../js/apiService.js';
import { renderFiveDays } from '../js/base/helper.js';

// apiService.getData('forecast').then(data => {
//   document.querySelector('.fivedays-weather').innerHTML = fiveDaysTpl(data);
//   console.log(data);
// });
function renderFiveDay() {
  return apiService.getData('forecast').then(data => {
    const renderData = renderFiveDays(data);
    const tplDate = {
      arrowLeft,
      arrowRight,
      ...renderData,
    };
    document.querySelector('.fivedays-weather').insertAdjacentHTML('afterbegin', fiveDaysTpl(tplDate));
  
    // console.log(data);
  }).catch(error => {
    console.log(error)
  });
}



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
