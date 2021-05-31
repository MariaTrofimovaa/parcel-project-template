import apiServise from './base/apiService';
import updateButtons from '../templates/favoriteElem.hbs';
import renderOneDay from './oneDay.js';
import renderFiveDay from './fiveDays.js';
import renderCalendar from './calendar.js';
import setBgImages from './components/bg-service.js';

// console.log(renderOneDay);
// import updateOneDay from '../template/oneDay.hbs';

const searchbox = document.querySelector('.input-form');
const inputRef = document.querySelector('.search-box');
const favoriteBtnRef = document.querySelector('.favorite-btn');
const favListRef = document.querySelector('.city-list');

inputRef.addEventListener('input', function () {
  if (this.value) {
    return (this.value = this.value[0].toUpperCase() + this.value.slice(1));
  }
});

searchbox.addEventListener('submit', setQuery);
function setQuery(evt) {
  evt.preventDefault();
  const inputValue = inputRef.value;
  apiServise.query = inputValue;
  // console.log(inputValue);
  // функция для рендера одного дня
  renderOneDay();
  renderCalendar();
  renderFiveDay();
  // onHideChartClick();
  setBgImages();
}

// favoriteBtnRef.addEventListener('click', addFavCityOnList);

function addFavCityOnList() {
  // если пустая строка не дает добавить (есть баг что пробел не воспринимает как пробел и добавляет если его тыкнуть, надо будет подуамть)
  if (inputRef.value.trim() === '') {
    return;
  }
  const inputValue = inputRef.value;
  console.log(inputValue);
  favListRef.insertAdjacentHTML('beforeend', updateButtons([inputValue]));
}
// favListRef.insertAdjacentHTML('beforeend', localStorage.getItem('City'));

//============================= LOCAL STORAGE ====================================

const storage = {
  cityArray: [],
};

const savedArray = JSON.parse(localStorage.getItem('City'));
if (savedArray) {
  storage.cityArray = savedArray;
}

const updateView = () => {
  favListRef.innerHTML = updateButtons(storage.cityArray);
};

const saveLocalStorage = () => {
  // значение инпута записал в переменную
  const inputValue = inputRef.value;
  // не дает запушить в локал сторадж пустую строку, проблема с пробелами все еще актуальна О.о
  if (inputRef.value.trim() === '') {
    return;
  }
  // пушим значение инпутвэлью в на массив городов
  storage.cityArray.push(inputValue);
  // записываем значения инпута //в нашем случае в массив// в виде строки
  // есть баг, при обновлении страницы и добавления нового массива - перезаписывает старый с нуля,
  // т.к.типо один и тот же ключ, ниже альтернатива которая к ключу типо добавляет время и делает его
  // уникальным, пока не предумал как это использовать
  localStorage.setItem('City', JSON.stringify(storage.cityArray));
  //альтернатива, можете раскоментить и посмотреть что происходит =\
  // localStorage.setItem('city_' + new Date().getTime(), JSON.stringify(storage.cityArray));
  updateView();
};

updateView();

favoriteBtnRef.addEventListener('click', saveLocalStorage);
// searchbox.addEventListener('submit', saveLocalStorage);

// * Localstorage
// favListRef.addEventListener('click', addToLocalStorage);
// const storage = {
//   citiesArr: [],
// };
// function addToLocalStorage() {
//   const inputValue = inputRef.value;
//   settings.citiesArr.push(inputValue);

//   localStorage.setItem('City', JSON.stringify(storage.citiesArr));
// }

// function getLocalStorage() {
//   const citiesArr = localStorage.getItem('City');

//   if (!citiesArr) {
//     return;
//   }

//   const parsedCyties = JSON.parse(citiesArr);
//   storage.citiesArr = parsedCyties;

//   return parsedCyties;
// }

// function createMarkup(city) {
//   const markup = favCity(city);
//   favListRef.innerHTML = markup;
// }

// createMarkup(getLocalStorage());

// //

// favListRef.addEventListener('click', event => {
//   if (event.target.nodeName === 'BUTTON') {
//     const textContent = event.path[1].childNodes[1].textContent;
//     const indexForRemove = storage.favoriteCities.indexOf(textContent);
//     createMarkup(getLocalStorage());
//   }
// });
