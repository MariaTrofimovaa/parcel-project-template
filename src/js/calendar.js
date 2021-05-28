import calendarTpl from '../templates/calendar.hbs';
import apiService from '../js/apiService.js';
import sunriseIcon from '../images/sunrise.svg';
import sunsetIcon from '../images/sunset.svg';
import helper from '../js/base/helper.js';
// const date = document.querySelector('.date');
// date.innerHTML = calenarTpl(weatsherParams);

apiService.getData('weather').then(data => {
  //   document.querySelector('.date').insertAdjacentHTML('beforeend', calendarTpl(data));
  // console.log(data);

  const config = {
    // day: getDate(elem[0]),
    // dayOfWeek: weekDayNow(elem[0].dt),
    // month: monthNow(elem[0].dt),

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
  // console.log(config);
});

// apiService.getData('forecast').then(data1 => {
//   document.querySelector('.date').insertAdjacentHTML('afterend', calendarTpl(data1));
//   console.log(data1);
// });
