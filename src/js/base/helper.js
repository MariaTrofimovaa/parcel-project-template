import apiService from '../apiService.js';
import oneDay from '../oneDay.js';
import fiveDays from '../fiveDays.js';

// const today = document.querySelector('.one-day');
// const cityNameCurr = document.querySelector('.city-title');

// Делаем запрос на сервер и получаем данные за один день
const getOneDayData = () => {
  return apiService
    .getData('weather')
    .then(data => renderOneDay(data)) // функция из файла Руслана OneDay
    .catch(err => console.log(err));
};
getOneDayData();

// Делаем запрос на сервер и получаем данные за 5 дней
// const getFiveDaysData = () => {
//   return apiService
//     .getData('forecast')
//     .then(data => renderFiveDays(data))
//     .catch(err => console.log(err));
// };

// getFiveDaysData();

const renderFiveDays = () => {
  apiService.getData('forecast').then(data => {
    const allDaysArr = data.list; // получаем массив из 40 объектов
    console.log(allDaysArr);
    const fiveDaysData = {};
    data.list.forEach(item => {
      const oneDay = new Date(item.dt_txt).getDate(); // это ключ массива
      if (!fiveDaysData[oneDay]) {
        fiveDaysData[oneDay] = [];
      }
      fiveDaysData[oneDay].push(item);
      // console.log(oneDay);
    });
    console.log(fiveDaysData);

    // console.log(dataDt);

    // const oneDay = new Date(data.list.dt * 1000).getDate();
    // const getDate = data => new Date(data.list.dt * 1000).getDate();
    // getDate();

    // const fiveDaysData = [];
    // for (let i = 0; i < dataDt.length; i = i + 8) {
    //   fiveDaysData.push(dataDt[i]);
    // }

    // const fiveDaysArr = dataDt.filter((elm, index, arr) => arr.indexOf(elm) === index);

    // const fiveDaysArr = allDaysArr.filter(obj => fiveDaysData.includes(obj));
    // console.log(fiveDaysArr);
  });
};

renderFiveDays();

// Делаем запрос на сервер и получаем данные для more info
// const getMoreInfoData = () => {
//   return apiService
//     .getData('forecast')
//     .then(data => renderFiveDays(data))
//     .catch(err => console.log(err));
// };

// getMoreInfoData();

// Делаем запрос на сервер и получаем данные для chart
// const getChartData = () => {
//   return apiService
//     .getData('forecast')
//     .then(data => renderFiveDays(data))
//     .catch(err => console.log(err));
// };

// getChartData();
