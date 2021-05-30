import moreInfoTpl from '../templates/moreInfo.hbs';
// import fiveDaysTpl from '../templates/fiveDays.hbs';
import apiService from './apiService.js';
import { renderFiveDays, fiveDaysData } from './base/helper.js';
// import refs from '../refs';
// fiveDaysData; // достаем массив

const hoursWeather = document.querySelector('.hours-weather');
const moreInfoList = document.querySelector('.more-info-list');
const openMoreInfoBtn = document.querySelector('.show-more-info');
const fiveDaysWeather = document.querySelector('.fivedays-weather');

// Стучимся на Apiservice и получаем данные за 5 дней.
apiService.getData('forecast').then(data => {
  // console.log(data);
  // console.log(data.list);

  // Распечатываем массив с объектами из 5 дней, которые нам нужны
  // console.log(fiveDaysData);
  // Перебираем этот массив и получаем 5 объектов (=5 дней)
  // fiveDaysData.map(obj => console.log(obj));

  const aaa = fiveDaysData.map(obj => ({
    day: obj.day,
    date: obj.date, // нужно привести в человеческий вид

    temp: Math.round(obj.temp),
    // pressure: obj.pressure,
    // windSpeed: obj.speed,
    // humidity: obj.humidity,
    // dt: dateConverter(hourData.dt),
    // hour: hourConverter(hourData.dt),
  }));
  // console.log(aaa);

  // const renderMoreInfoData = data.list.map(hourData => ({
  //   temp: Math.round(hourData.main.temp),
  //   pressure: hourData.main.pressure,
  //   windSpeed: hourData.wind.speed,
  //   humidity: hourData.main.humidity,
  //   // dt: dateConverter(hourData.dt),
  //   // hour: hourConverter(hourData.dt),
  // }));
  // console.log(renderMoreInfoData);

  // вызываем функцию renderFiveDays, в которой хранятся наши данные для шаблона (иконка,время)
  const renderData = renderFiveDays(data);
  // console.log(renderData);

  const configMoreInfo = {
    // temp,
    // windSpeed,
    // humidity,
    // pressure,
    // dt,
    // hour,
    // ...renderMoreInfoData,
    ...aaa,
    ...renderData,
  };

  moreInfoList.insertAdjacentHTML('beforeend', moreInfoTpl(configMoreInfo));
});

// ****************** черновики Андрей:

// const getMoreInfoData = event => {
//   apiService.getData('forecast').then(({ list }) => {
//     const moreDaysData = list.map(hourData => ({
//       temp: Math.round(hourData.main.temp),
//       pressure: hourData.main.pressure,
//       windSpeed: hourData.wind.speed,
//       humidity: hourData.main.humidity,
//       icon: `http://openweathermap.org/img/wn/${hourData.weather[0].icon}@2x.png`,
//       // dt: dateConverter(hourData.dt),
//       // hour: hourConverter(hourData.dt),
//     }));
//     return moreDaysData;
//     console.log(moreDaysData);
//   });
// };

// console.log(getMoreInfoData());

// fiveDaysWeather.addEventListener('click', getMoreInfoData);
// console.log();

// function renderMoreInfoData(moreDaysData) {
//   hoursWeather.classList.remove('.visually-hidden');
//   // if (moreInfoList) {
//   //   moreInfoList.forEach(e => e.remove());
//   // }
//   // console.log(moreDaysData);
//   moreInfoList.innerHTML = moreInfoTpl(moreDaysData);
// }

// function dateConverter(UNIX_timestamp) {
//   let newDate = new Date(UNIX_timestamp * 1000);
//   let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//   let month = months[newDate.getMonth()];
//   let date = newDate.getDate();
//   let CurrentDate = date + ' ' + month;
//   return CurrentDate;
// }

// function hourConverter(UNIX_timestamp) {
//   let newDate = new Date(UNIX_timestamp * 1000);
//   let hour = newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours();
//   let min = newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() : newDate.getMinutes();
//   let CurrentHour = `${hour}:${min}`;
//   return CurrentHour;
// }
/* 

Повесить обраб событий на юл
убедитьсяЯ, что надатие на кнопку (а)
считываем датасетдай, чтобы получить число дня 
ищем в массиве 5дайздата обхект, через find ищем объект чтобы data совпала с той, что достали из атрибута датасет
берем из объекта массив кот лежит в форкаст

этот массив - то , что нужно зарендерить
мэпнуть, чтобы подготовить поля для шаблона

*/

// **************** черновики Маша

// const moreDaysData = data.list.map(hourData => {
//   const temp = Math.round(hourData.main.temp);
//   // console.log(temp);
//   const pressure = hourData.main.pressure;
//   // console.log(pressure);
//   const windSpeed = hourData.wind.speed;
//   // console.log(windSpeed);
//   const humidity = hourData.main.humidity;
//   // console.log(humidity);
// });

// const windSpeed = hourData.wind.speed;
// const humidity = hourData.main.humidity;
// const pressure = data.list.pressure;
// const dt = dateConverter(data.list.dt);
// const hour = hourConverter(data.list.dt);
