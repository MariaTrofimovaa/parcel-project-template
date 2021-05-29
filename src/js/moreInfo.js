import moreInfoTpl from '../templates/moreInfo.hbs';
import fiveTpl from '../templates/fiveDays.hbs';
import apiService from './apiService.js';
import { fiveDaysData } from './base/helper.js';
// import refs from '../refs';
// fiveDaysData; // достаем массив

const hoursWeather = document.querySelector('.hours-weather');
const moreInfoList = document.querySelector('.more-info-list');
const fiveDaysWeather = document.querySelector('.fivedays-weather');
// console.log(hoursWeather);

// document.querySelector('.more-info-weather').insertAdjacentHTML('beforeend', fiveTpl());
// const openMoreInfoBtn = document.querySelector('.show-more-info');
// console.log(openMoreInfoBtn);
let moreInfoData = {};

/* 

Повесить обраб событий на юл
убедитьсяЯ, что надатие на ссылку (а)
считываем датасетдай, чтобы получить число дня 
ищем в массиве 5дайздата обхект, через find ищем объект чтобы data совпала с той, что достали из атрибута датасет
берем из объекта массив кот лежит в форкаст

этот массив - то , что нужно зарендерить
мэпнуть, чтобы подготовить поля для шаблона

*/

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
// openMoreInfoBtn.addEventListener('click', getMoreInfoData);

function renderMoreInfoData(moreDaysData) {
  hoursWeather.classList.remove('.visually-hidden');
  // if (moreInfoList) {
  //   moreInfoList.forEach(e => e.remove());
  // }
  // console.log(moreDaysData);
  moreInfoList.innerHTML = moreInfoTpl(moreDaysData);
}

// const renderMoreInfo = target => {
//   // moreInfoData = apiService.getData('forecast');
//   hoursWeather.classList.remove('.vh');

// getMoreInfoData();

// const renderMoreInfo = target => {
//   // moreInfoData = api.getData();
//   document.querySelector('.additional-info').classList.remove('isHiden');

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
