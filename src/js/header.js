import apiServise from './apiService';
import updateButtons from '../template/favoriteElem.hbs';

const form = document.querySelector('.search-box');
const searchInput = document.querySelector('.input-form');
const favoriteList = document.querySelector('.city-list');

form.addEventListener('input', function () {
    if (this.value) {
      return (this.value = this.value[0].toUpperCase() + this.value.slice(1));
    }
});

createButtons(getLocalStorage());