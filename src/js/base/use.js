import apiService from '../apiService.js';
// import urlIcon from '.././config.json';

const urlIcon = `${apiService.urlIcon}10d@2x.png`;
console.log(urlIcon);

const url = `http://openweathermap.org/img/wn/10d@2x.png`;
console.log(url);

// получает icon-id как параметр
// const fetchIcon = iconId => {
//   console.log(iconId);
//   // const iconId = Object.entries(data).map(item => ({
//   //   icon: item[0],
//   // }));
//   // console.log(iconId); // приходит undefined - ИСПРАВИТЬ
//   // const urlIcon = `${apiService.urlIcon}${iconId}@2x.png`;
//   // const urlIcon = `${apiService.urlIcon}10b@2x.png`;
//   console.log(urlIcon);
// };
// fetchIcon();
