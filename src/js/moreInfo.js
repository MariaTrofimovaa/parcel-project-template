import moreInfoTpl from '../templates/moreInfo.hbs';
import fiveDaysTpl from '../templates/fiveDays.hbs';
import apiService from './apiService.js';
import {renderFiveDays, fiveDaysData} from './base/helper.js';
// import refs from '../refs';
// fiveDaysData; // достаем массив


const hoursWeather = document.querySelector('.hours-weather');
const moreInfoList = document.querySelector('.more-info-list');
const openMoreInfoBtn = document.querySelector('.show-more-info');
const fiveDaysWeather = document.querySelector('.fivedays-weather');

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

const getMoreInfoData = event => {
  apiService.getData('forecast').then(({ list }) => {

    // const oneDayArr = list.map(element => element.dt);
    // console.log(oneDayArr);
    
    // const dataUnique = oneDayArr.filter((elm, index, arr) => arr.indexOf(elm) === index);
    // if (dataUnique.length > 5) {
    // // fiveDays = fiveDays.slice(1);
    // dataUnique.shift();
    // }
    // console.log(dataUnique);

    //  const fiveDays = dataUnique.map(data =>
    // //   allDaysArr.filter(obj => new Date(obj.dt * 1000).getDate() === data),

    // allDaysArr.filter(obj => obj.dt_txt.slice(0, 10) === data),
  // );
    
    const moreDaysData = list.map(hourData => ({
      temp: Math.round(hourData.main.temp),
      pressure: hourData.main.pressure,
      windSpeed: hourData.wind.speed,
      humidity: hourData.main.humidity,
      icon: `http://openweathermap.org/img/wn/${hourData.weather[0].icon}@2x.png`,
      dt: dateConverter(hourData.dt),
      hour: hourConverter(hourData.dt),
    }));
    renderMoreInfoData(moreDaysData);
  });
};

getMoreInfoData();

fiveDaysWeather.addEventListener('click', getMoreInfoData);
console.log();

function renderMoreInfoData(moreDaysData) {
  hoursWeather.classList.remove('.visually-hidden');
  // if (moreInfoList) {
  //   moreInfoList.forEach(e => e.remove());
  // }
  // console.log(moreDaysData);
  moreInfoList.innerHTML = moreInfoTpl(moreDaysData);
}

function dateConverter(UNIX_timestamp) {
  let newDate = new Date(UNIX_timestamp * 1000);
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let month = months[newDate.getMonth()];
  let date = newDate.getDate();
  let CurrentDate = date + ' ' + month;
  return CurrentDate;
}

function hourConverter(UNIX_timestamp) {
  let newDate = new Date(UNIX_timestamp * 1000);
  let hour = newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours();
  let min = newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() : newDate.getMinutes();
  let CurrentHour = `${hour}:${min}`;
  return CurrentHour;
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

