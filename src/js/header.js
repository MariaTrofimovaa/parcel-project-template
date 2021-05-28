import apiServise from './apiService';
import updateButtons from '../templates/favoriteElem.hbs';
// import {renderOneDay} from './renders/renderOneDay.js'
// import updateOneDay from '../template/oneDay.hbs';

const searchbox = document.querySelector('.input-form');
const inputRef = document.querySelector(".search-box");
const favoriteBtnRef = document.querySelector('.favorite-btn');
const favListRef = document.querySelector('.city-list')


searchbox.addEventListener('submit', setQuery);
function setQuery(evt) {
  evt.preventDefault();
  const inputValue = inputRef.value;
  apiServise.query = inputValue 
  console.log(inputValue);
  // функция для рендера одного дня  
  // const a = renderOneDay(evt);
}

favoriteBtnRef.addEventListener('click', addFavCityOnList)

function addFavCityOnList () {
  const inputValue = inputRef.value;
  console.log(inputValue);
  favListRef.insertAdjacentHTML('beforeend', updateButtons([inputValue]));
}
