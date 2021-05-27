import fiveDaysTpl from '../templates/fiveDays.hbs';
import arrowLeft from '../images/arrowLeft.png';
import arrowRight from '../images/arrowRight.png';
// import oneDayTpl from '../templates/fiveDays.hbs';
import apiService from '../js/apiService.js';

// apiService.getData('forecast').then(data => {
//   document.querySelector('.fivedays-weather').innerHTML = fiveDaysTpl(data);
//   console.log(data);
// });

apiService.getData('forecast').then(data => {
  const tplDate = {
    arrowLeft,
    arrowRight,
    ...data,
    icon: `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`,
  };
  document.querySelector('.fivedays-weather').innerHTML = fiveDaysTpl(tplDate);
  console.log(data);
});
