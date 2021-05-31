import moreInfoTpl from '../templates/moreInfo.hbs';
import apiService from './apiService.js';
import { renderFiveDays, fiveDaysData } from './base/helper.js';

// import refs from '../refs';

const moreInfoWeather = document.querySelector('.more-info-weather');

const hoursWeather = document.querySelector('.hours-weather');
const moreInfoList = document.querySelector('.more-info-list');
const openMoreInfoBtn = document.querySelector('.show-more-info');
const fiveDaysWeather = document.querySelector('.fivedays-weather');

const getMoreInfoData = target => {
  const currentDay = target.dataset.day;
  const dayInfo = fiveDaysData.find(({ day }) => day === +currentDay);
  const moreDaysData = dayInfo.forecast.map(hourData => ({
    day: hourData.dt_txt,
    temp: Math.round(hourData.main.temp),
    pressure: hourData.main.pressure,
    windSpeed: hourData.wind.speed,
    humidity: hourData.main.humidity,
    icon: `http://openweathermap.org/img/wn/${hourData.weather[0].icon}@2x.png`,
    hour: hourConverter(hourData.dt),
  }));

  renderMoreInfoData(moreDaysData);
};

function renderMoreInfoData(moreDaysData) {
  hoursWeather.classList.remove('visually-hidden');
  moreInfoList.innerHTML = moreInfoTpl(moreDaysData);
}

moreInfoWeather.addEventListener('click', handleMoreInfoClick);

function handleMoreInfoClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName === 'BUTTON') {
    getMoreInfoData(target);
  }
}

function hourConverter(UNIX) {
  let newDate = new Date(UNIX * 1000);
  let hour = newDate.getUTCHours() < 10 ? '0' + newDate.getUTCHours() : newDate.getUTCHours();
  let min = newDate.getMinutes() < 10 ? '0' + newDate.getUTCMinutes() : newDate.getUTCMinutes();
  let CurrentHour = `${hour}:${min}`;
  return CurrentHour;
}

const rightArrow = document.querySelector('#right-arrow');
const leftArrow = document.querySelector('#left-arrow');

rightArrow.addEventListener('click', scrollToLeft);
leftArrow.addEventListener('click', scrollToRight);

function scrollToLeft() {
  moreInfoList.scroll({
    left: 260,
    behavior: 'smooth',
  });
}

function scrollToRight() {
  moreInfoList.scroll({
    left: -1,
    behavior: 'smooth',
  });
}