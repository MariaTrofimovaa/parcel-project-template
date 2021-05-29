import apiServise from './apiService';
import updateButtons from '../templates/favoriteElem.hbs';
// import {renderOneDay} from './renders/renderOneDay.js'
// import updateOneDay from '../template/oneDay.hbs';

const searchbox = document.querySelector('.input-form');
const inputRef = document.querySelector('.search-box');
const favoriteBtnRef = document.querySelector('.favorite-btn');
const favListRef = document.querySelector('.city-list');

searchbox.addEventListener('submit', setQuery);
function setQuery(evt) {
  evt.preventDefault();
  const inputValue = inputRef.value;
  apiServise.query = inputValue;
  console.log(inputValue);
  // функция для рендера одного дня
  // const a = renderOneDay(evt);
}

favoriteBtnRef.addEventListener('click', addFavCityOnList);

function addFavCityOnList() {
  // если пустая строка не дает добавить (есть баг что пробел не воспринимает как пробел и добавляет если его тыкнуть, надо будет подуамть)
  if (inputRef.value === '') {
    return;
  }
  const inputValue = inputRef.value;
  console.log(inputValue);
  favListRef.insertAdjacentHTML('beforeend', updateButtons([inputValue]));
}

//=============================LOCAL STORAGE====================================

const storage = {
  cityArray: [],
};

const updateView = () => {
  localStorage.getItem('City');
};

const saveLocalStorage = () => {
  // значение инпута записал в переменную
  const inputValue = inputRef.value;
  // не дает запушить в локал сторадж пустую строку, проблема с пробелами все еще актуальна О.о
  if (inputRef.value === '') {
    return;
  }
  // пушим значение инпутвэлью в на массив городов
  storage.cityArray.push(inputValue);
  // записываем значения инпута //в нашем случае в массив// в виде строки
  // есть баг, при обновлении страницы и добавления нового массива - перезаписывает старый с нуля,
  // т.к.типо один и тот же ключ, ниже альтернатива которая к ключу типо добавляет время и делает его
  // уникальным, пока не предумал как это использовать
  localStorage.setItem('city', JSON.stringify(storage.cityArray));
  //альтернатива, можете раскоментить и посмотреть что происходит =\
  // localStorage.setItem('city_' + new Date().getTime(), JSON.stringify(storage.cityArray));
  updateView();
};

updateView();

searchbox.addEventListener('submit', saveLocalStorage);
favoriteBtnRef.addEventListener('click', saveLocalStorage);
