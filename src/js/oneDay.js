import oneDayTpl from '../templates/oneDay.hbs';
import apiService from '../js/apiService.js';

// document.querySelector('.one-day').innerHTML = oneDayTpl();

apiService.getData('weather').then(data => {
  // data = data.map(e => Math.floor(e.main.temp - 273.15));
  // const temp = {
  //   TempMin: Math.min(...data),
  //   TempMax: Math.max(...data),
  // };

  const tplDate = {
    ...data,
    // temp: Math.round(...data),
    icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
  };
  document.querySelector('.one-day').innerHTML = oneDayTpl(tplDate);
  console.log(data);
});
