import calendarTpl from '../templates/calendar.hbs';
import apiService from '../js/apiService.js';
import sunriseIcon from '../images/sunrise.svg';
import sunsetIcon from '../images/sunset.svg';

apiService.getData('weather').then(data => {
  const config = {
    sunriseIcon,
    sunsetIcon,
    sunriseTime:
      new Date(data.sys.sunrise * 1000).getHours() +
      ':' +
      new Date(data.sys.sunrise * 1000).getMinutes(),
    sunsetTime:
      new Date(data.sys.sunset * 1000).getHours() +
      ':' +
      new Date(data.sys.sunset * 1000).getMinutes(),
  };
  document.querySelector('.date').insertAdjacentHTML('beforeend', calendarTpl(config));
  console.log(config);
});

// apiService.getData('forecast').then(data1 => {
//   document.querySelector('.date').insertAdjacentHTML('afterend', calendarTpl(data1));
//   console.log(data1);
// });
