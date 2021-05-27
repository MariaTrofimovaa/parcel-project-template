import calendarTpl from '../templates/calendar.hbs';
import apiService from '../js/apiService.js';

apiService.getData('weather').then(data => {
  document.querySelector('.date').insertAdjacentHTML('beforeend', calendarTpl(data));
  // console.log(data);
});

apiService.getData('forecast').then(data1 => {
  document.querySelector('.date').insertAdjacentHTML('afterend', calendarTpl(data1));
  console.log(data1);
});
