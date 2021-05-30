import apiService from '../apiService.js';
import oneDay from '../oneDay.js';
import fiveDays from '../fiveDays.js';
import calenarTpl from '../../templates/calendar.hbs';

let fiveDaysData = [];

// Делаем запрос на сервер и получаем данные за один день
// const getOneDayData = () => {
//   return apiService
//     .getData('weather')
//     .then(data => renderOneDay(data)) // функция из файла Руслана OneDay
//     .catch(err => console.log(err));
// };
// getOneDayData();

// Делаем запрос на сервер и получаем данные за 5 дней
// const getFiveDaysData = () => {
//   return apiService
//     .getData('forecast')
//     .then(data => renderFiveDays(data))
//     .catch(err => console.log(err));
// };

// getFiveDaysData();

const renderFiveDays = data => {
  // console.log(apiService.getData('forecast'));
  const allDaysArr = data.list;
  // получаем массив из 40 объектов
  console.log(allDaysArr);

  // const oneDayArr = data.list.map(element => new Date(element.dt * 1000).getDate());
  const oneDayArr = data.list.map(element => element.dt_txt.slice(0, 10));
  console.log(oneDayArr);

  const dataUnique = oneDayArr.filter((elm, index, arr) => arr.indexOf(elm) === index);
  console.log(dataUnique);
  if (dataUnique.length > 5) {
    // fiveDays = fiveDays.slice(1);
    dataUnique.shift();
  }
  console.log(dataUnique);

  const fiveDays = dataUnique.map(data =>
    //   allDaysArr.filter(obj => new Date(obj.dt * 1000).getDate() === data),

  allDaysArr.filter(obj => obj.dt_txt.slice(0, 10) === data),
  );
  console.log(fiveDays);

  // Получаем день месяца
  const getDate = data => new Date(data.dt * 1000).getDate();

  // Получаем день недели
  const weekDayNow = data => {
    const date = new Date(data * 1000);
    const weekDay = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(date);
    return weekDay;
  };

  // Получаем месяц
  const monthNow = data => {
    const date = new Date(data * 1000);
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
    return month;
  };

  // Расчет мин/макс температуры
  const mathTemp = data => {
    data = data.map(e => Math.floor(e.main.temp));
    const temp = {
      tempMin: Math.min(...data),
      tempMax: Math.max(...data),
    };
    return temp;
  };

  const weatherParams = fiveDays.map(elem => {
    return {
      day: getDate(elem[0]),
      dayOfWeek: weekDayNow(elem[0].dt),
      month: monthNow(elem[0].dt),
      date: elem[0].dt,
      icon: `http://openweathermap.org/img/wn/${elem[0].weather[0].icon}@2x.png`,
      forecast: elem,
      temp: mathTemp(elem),
    };
  });

  fiveDaysData = weatherParams;
  
  const finalData = {
    city: data.city.name,
    country: data.city.country,
    weatherParams,
  };
  return finalData;
  
};

// renderFiveDays();

export { renderFiveDays, fiveDaysData };
  
// apiService.getFiveDayData();

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
