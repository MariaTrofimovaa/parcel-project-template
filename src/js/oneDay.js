import oneDayTpl from '../templates/oneDay.hbs';
import apiService from '../js/apiService.js';

apiService.getData('weather').then(data => {
  const tplDate = {
    name: data.name,
    temp: Math.round(data.main.temp),
    country: data.sys.country,
    temp_min: Math.round(data.main.temp_min),
    temp_max: Math.round(data.main.temp_max),
    icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
  };
  document.querySelector('.one-day').innerHTML = oneDayTpl(tplDate);
});

//   const renderOneDay = data => {
//     const tplDate = {
//       name: data.name,
//       temp: Math.round(data.main.temp),
//       country: data.sys.country,
//       temp_min: Math.round(data.main.temp_min),
//       temp_max: Math.round(data.main.temp_max),
//       icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
//     };
//     document.querySelector('.one-day').innerHTML = oneDayTpl(tplDate);
//     console.log(data);
//   };

// export default {renderOneDay};
