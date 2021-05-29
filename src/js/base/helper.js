import apiService from '../apiService.js';
// import oneDay from '../oneDay.js';
// import fiveDays from '../fiveDays.js';

let fiveDaysData = [];

const renderFiveDays = data => {
  const allDaysArr = data.list; // получаем массив из 40 объектов
  // console.log(allDaysArr);

  // const oneDayArr = data.list.map(element => new Date(element.dt * 1000).getDate());
  const oneDayArr = data.list.map(element => element.dt_txt.slice(0, 10));
  // console.log(oneDayArr);

  const dataUnique = oneDayArr.filter((elm, index, arr) => arr.indexOf(elm) === index);
  // console.log(dataUnique);

  if (dataUnique.length > 5) {
    // fiveDays = fiveDays.slice(1);
    dataUnique.shift();
  }
  // console.log(dataUnique);

  const fiveDays = dataUnique.map(data =>
    //   allDaysArr.filter(obj => new Date(obj.dt * 1000).getDate() === data),

    allDaysArr.filter(obj => obj.dt_txt.slice(0, 10) === data),
  );
  console.log(fiveDays);

  // ***** Получаем день месяца
  const getDate = data => new Date(data.dt * 1000).getDate();

  // ***** Получаем день недели
  const weekDayNow = data => {
    const date = new Date(data * 1000);
    const weekDay = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(date);
    return weekDay;
  };

  // ***** Получаем месяц
  const monthNow = data => {
    const date = new Date(data * 1000);
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
    return month;
  };

  // ***** Делаем асчет мин/макс температуры
  const mathTemp = data => {
    data = data.map(e => Math.floor(e.main.temp));
    const temp = {
      tempMin: Math.min(...data),
      tempMax: Math.max(...data),
    };
    return temp;
  };

  // ***** Получаем картинку для fiveDays
  const getIconData = day => {
    const iconInfo = {};
    day.forEach(item => {
      if (!iconInfo[item.weather[0].icon]) {
        iconInfo[item.weather[0].icon] = 1;
      } else {
        iconInfo[item.weather[0].icon]++;
      }
    });
    // console.log(iconInfo);
    let icon;
    const maxValue = Math.max(...Object.values(iconInfo));

    for (let [key, value] of Object.entries(iconInfo)) {
      if (value === maxValue) {
        icon = key;
      }
    }
    return 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
  };

  const weatherParams = fiveDays.map(elem => {
    return {
      day: getDate(elem[0]),
      dayOfWeek: weekDayNow(elem[0].dt),
      month: monthNow(elem[0].dt),
      date: elem[0].dt,
      icon: getIconData(elem),
      forecast: elem,
      temp: mathTemp(elem),
    };
  });

  fiveDaysData = weatherParams;
  // console.log(fiveDaysData);
  const finalData = {
    city: data.city.name,
    country: data.city.country,
    weatherParams,
  };
  return finalData;
};

export { renderFiveDays, fiveDaysData };

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
