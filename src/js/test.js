import testTpl from '../templates/test.hbs';
import apiService from '../js/apiService.js';

// пример:

apiService.getData('weather', 'Kiev').then(data => {
  // document.querySelector('.content').insertAdjacentHTML('beforebegin', testTpl(data));
  // console.log(data);
});

apiService.getData('forecast', 'Kiev').then(data => {
  // document.querySelector('.content').insertAdjacentHTML('beforebegin', testTpl(data));
  // console.log(data);
});
