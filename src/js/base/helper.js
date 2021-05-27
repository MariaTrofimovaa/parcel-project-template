import apiService from '../apiService.js';

let location = '';
let req = '';
let oneDayData = {};
let fiveDayData = {};
let moreInfoData = {};

const input = document.querySelector('.search-box');
const main = document.querySelector('.city-title');

//  *********************** Делаем запрос на сервер и получаем данные

input.addEventListener('input', function (name) {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=b2e20a408d2fb97b7ae2d0be72bcb7e8',
  )
    .then(response => response.json())
    .then(data => {
      let tempValue = data['main']['temp'];
      let nameValue = data['name'];
      let descValue = data['weather'][0]['description'];

      main.innerHTML = nameValue;
      desc.innerHTML = 'Desc - ' + descValue;
      temp.innerHTML = 'Temp - ' + tempValue;
      input.value = '';
    })
    .catch(err => alert('Wrong city name!'));
});

const getWeatherData = data => {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=b2e20a408d2fb97b7ae2d0be72bcb7e8',
  )
    .then(response => response.json())
    .then(data => {
      let tempValue = data.main.temp;
      console.log(tempValue);
      let nameValue = data.name;
      console.log(nameValue);
      let descValue = data.weather[0].description;
      console.log(descValue);

      // main.insertAdjacentElement('beforeend', nameValue);
      // data.desc.innerHTML = 'Desc - ' + descValue;
      // data.temp.innerHTML = 'Temp - ' + tempValue;
      // input.value = '';
      // console.log(data);
    })
    .catch(err => alert('Wrong city name!'));
};

//  *********************** Функции для получения данных с api
// На один день:

const getOneDayData = searchName => {
  console.log(searchName);
  location = searchName;
  req = apiService.getData('weather');
  console.log(req);
  return getWeatherData(req).then(data => dataProcessingOneDay(data));
};
// getOneDayData();
const getFiveDayData = () => {
  req = apiService.getData('forecast');
  return getWeatherData(req).then(response => dataProcessingFiveDays(response.data));
}; // на 5 дней
//  *********************** Получаем день недели
const weekDayNow = data => {
  const date = new Date(data * 1000);
  const weekDay = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(date);
  return weekDay;
};
// *********************** Получаем месяц
const monthNow = data => {
  const date = new Date(data * 1000);
  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
  return month;
};
// Получаем обьект icon data
const getIconData = data => {
  const date = new Date(data[0].dt * 1000);
  date.setMilliseconds(0);
  date.setSeconds(0);
  date.setMinutes(0);
  date.setHours(12);
  const getTimeObj = data.find(e => e.dt == date.getTime() / 1000);
  const iconInfo = {};
  if (getTimeObj) {
    const weather = getTimeObj.weather[0];
    const icon = 'http://openweathermap.org/img/wn/' + weather.icon + '.png';
    iconInfo.icon = icon;
    iconInfo.iconDescription = weather.description;
    return iconInfo;
  } else {
    let weather = {};
    if (data[3]) {
      weather = data[3].weather[0];
    } else {
      weather = data[0].weather[0];
    }
    const icon = 'http://openweathermap.org/img/wn/' + weather.icon + '.png';
    iconInfo.icon = icon;
    iconInfo.iconDescription = weather.description;
    return iconInfo;
  }
};

// Получить текущее время
const getCurrentTime = data => {
  const dataTime = new Date(data * 1000);

  return addZero(dataTime.getHours()) + ':' + addZero(dataTime.getMinutes());
};
// Обработка данных на один день
const dataProcessingOneDay = response => {
  // const main = response.main;
  // const sys = response.sys;
  // const weather = response.weather[0];
  oneDayData.city = response.name;
  oneDayData.countryCode = response.sys.country;
  oneDayData.temp = conToCel(main.temp);
  oneDayData.tempMin = conToCel(main.temp_min);
  oneDayData.tempMax = conToCel(main.temp_max);
  oneDayData.sunrise = new Date(sys.sunrise * 1000);
  oneDayData.sunset = new Date(sys.sunset * 1000);
  oneDayData.icon = 'http://openweathermap.org/img/wn/' + weather.icon + '.png';
  oneDayData.iconDescription = weather.description;
  oneDayData.timezone = response.timezone;
  return oneDayData;
};
// Обработка данных на 5 дней
const getDate = data => new Date(data.dt * 1000).getDate();
const dataProcessingFiveDays = response => {
  const dates = response.list
    .map(element => getDate(element))
    .filter((el, idx, arr) => arr.indexOf(el) === idx);
  const list = dates
    .map(el => response.list.filter(elem => getDate(elem) === el))
    .map(element => ({
      DayNum: getDate(element[0]),
      Day: weekDayNow(element[0].dt),
      Month: monthNow(element[0].dt),
      date: element[0].dt,
      icon: getIconData(element),
      forecast: element,
      temp: mathTemp(element),
    }));
  if (list[5]) {
    list.shift();
  }
  const changedData = {
    ...response,
    list,
  };
  fiveDayData = changedData;
  return fiveDayData;
};
// Обработка данных для блока more info
const dataProcessingMoreInfo = () => {
  moreInfoData = fiveDayData.list.map(e => ({
    date: e.date,
    DayNum: e.DayNum,
    forecast: e.forecast.map(e => ({
      time: getCurrentTime(e.dt),
      temp: Math.floor(e.main.temp - 273.15),
      humidity: e.main.humidity,
      pressure: e.main.pressure,
      speed: Number(e.wind.speed.toFixed(1)),
      icon: 'http://openweathermap.org/img/wn/' + e.weather[0].icon + '.png',
      iconDescription: e.weather[0].description,
    })),
  }));
  return moreInfoData;
};
