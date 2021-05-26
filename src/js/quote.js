import quoteTpl from '../templates/quote.hbs';
// import apiService from '../js/apiService.js';

document.querySelector('.date-quote').insertAdjacentHTML('beforeend', quoteTpl());
