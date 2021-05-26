import moreInfoTpl from '../templates/moreInfo.hbs';
import apiService from './apiService.js';

// import refs from '../refs';

let moreInfoData = {};

const renderMoreInfo = target => {
  // moreInfoData = api.getData();
  document.querySelector('.additional-info').classList.remove('isHiden');
  // const day = Number(target.dataset.day);
  const moreDaysListItem = document.querySelectorAll('.more-info');
  if (moreDaysListItem) {
    moreDaysListItem.forEach(e => e.remove());
  }
  const currentMoreInfo = moreInfoData.find(e => e.DayNum == day);
  refs.moreInfoBlock.innerHTML += moreInfoTemp(currentMoreInfo.forecast);
};

document.querySelector('.fivedays-weather').addEventListener('click', handleBtnlick);

function handleBtnlick(event) {
  event.preventDefault();
  if (event.target.nodeName === 'BUTTON') {
    renderMoreInfo(target);
  }
}


// пример:
// const apiService = new ApiService({});

// apiService.getData('weather', 'Kiev').then(data => {
//   document.querySelector('.content').insertAdjacentHTML('beforebegin', moreInfoTpl(data));
//   // document.querySelector('.content').innerHTML = moreInfoTpl(data);
//   console.log(data);
// });

// apiService.getData('forecast', 'Kiev').then(data => {
//   document.querySelector('.content').insertAdjacentHTML('beforebegin', moreInfoTpl(data));
//   // document.querySelector('.content').innerHTML = moreInfoTpl(data);
//   console.log(data);
// });

// apiService.getData().then(data => {
//   const arrMenu = Object.entries(data).map(item => ({
//     name: item[0],
//     link: item[1].slice(config.url.length),
//     tpl: item[0].slice(0, -1),
//   }));
//   document.querySelector('.content').innerHTML = moreInfoTpl(arrMenu);
// });
