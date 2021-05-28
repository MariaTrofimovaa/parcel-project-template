import apiServise from './apiService';
import updateButtons from '../template/favoriteElem.hbs';
import updateOneDay from '../template/oneDay.hbs';

// let oneDayData = {
//   city: 'None',
//   countryCode: 'None',
//   temp: '0',
//   tempMin: '0',
//   tempMax: '0',
// };

// const api = {
//   key: "afaf9f8d48cff6cafd32e23220bcfdbf",
//   base: "https://api.openweathermap.org/data/2.5/"
// }

const searchbox = document.querySelector('.input-form');
searchbox.addEventListener('submit', setQuery);

// function setQuery(evt) {
//   evt.preventDefault();
//   console.log('ok')
//   getResults(evt.currentTarget.element.query.value);
// }

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  evt.preventDefault();
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }

// function getResults (query) {
//   apiServise.query = query;
//   apiServise.getData("weather")
//     .then(weather => {
//       return weather.json();
//     }).then(displayResults);
// }



function displayResults (weather) {
  let city = document.querySelector('.city-title');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  // let now = new Date();
  // let date = document.querySelector('.location .date');
  // date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;

  let low = document.querySelector('.min-temperature-item2');
  let hi = document.querySelector('.max-temperature-item2');
  low.innerText = `${Math.round(weather.main.temp_min)}°c`;
  hi.innerText = `${Math.round(weather.main.temp_max)}°c`;
}

// function dateBuilder (d) {
//   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//   let day = days[d.getDay()];
//   let date = d.getDate();
//   let month = months[d.getMonth()];
//   let year = d.getFullYear();

//   return `${day} ${date} ${month} ${year}`;
// }