import moreInfoTpl from '../templates/moreInfo.hbs';
import apiService from './apiService.js';
import helper from './base/helper.js';
// import refs from '../refs';

const hoursWeather = document.querySelector('.hours-weather');
const moreInfoList = document.querySelector('.more-info-list');
const openMoreInfoBtn = document.querySelector('.show-more-info');
const fiveDaysWeather = document.querySelector('.fivedays-weather');

let moreInfoData = {};

// const getMoreInfoData = () => {
//   return apiService
//     .getData('forecast')
//     .then(data => renderFiveDays(data))
//     .catch(err => console.log(err));
// };
// getMoreInfoData();

const getMoreInfoData = event => {
  apiService.getData('forecast').then(({ list }) => {
    const moreDaysData = list.map(hourData => ({
      temp: Math.round(hourData.main.temp),
      pressure: hourData.main.pressure,
      windSpeed: hourData.wind.speed,
      humidity: hourData.main.humidity,
      icon: `http://openweathermap.org/img/wn/${hourData.weather[0].icon}@2x.png`,
      // dt: ConverterToDate(hourData.dt),
      // hour: ConverterToHour(hourData.dt),
    }));

    renderMoreInfoData(moreDaysData);
  });
};
 getMoreInfoData();
openMoreInfoBtn.addEventListener('click', getMoreInfoData);

function renderMoreInfoData(moreDaysData) {
  hoursWeather.classList.remove('.visually-hidden');
  // if (moreInfoList) {
  //   moreInfoList.forEach(e => e.remove());
  // }
  console.log(moreDaysData);
  moreInfoList.innerHTML = moreInfoTpl(moreDaysData);
}

// const renderMoreInfo = target => {
//   // moreInfoData = apiService.getData('forecast');
//   hoursWeather.classList.remove('.vh');
//   // const day = Number(target.dataset.day);
//   const moreDaysListItem = document.querySelectorAll('.more-info');
//   if (moreDaysListItem) {
//     moreDaysListItem.forEach(e => e.remove());
//   }
//   const currentMoreInfo = moreInfoData.find(e => e.DayNum == day);
//   refs.moreInfoBlock.innerHTML += moreInfoTemp(currentMoreInfo.forecast);
// };

// document.querySelector('.fivedays-weather').addEventListener('click', handleBtnlick);

// function handleBtnlick(event) {
//   event.preventDefault();
//   if (event.target.nodeName === 'BUTTON') {
//     renderMoreInfo(target);
//   }
// }

