import moreInfoTpl from '../templates/moreInfo.hbs';
import apiService from './apiService.js';
import helper from './base/helper.js';

// import refs from '../refs';

let moreInfoData = {};

const getMoreInfoData = () => {
  return apiService
    .getData('forecast')
    .then(data => renderFiveDays(data))
    .catch(err => console.log(err));
};

getMoreInfoData();

const renderMoreInfo = target => {
  // moreInfoData = apiService.getData('forecast');
  // console.log(moreInfoData);
  document.querySelector('.hours-wether').classList.remove('.visually-hidden');
  // const day = Number(target.dataset.day);
  const moreDaysListItem = document.querySelectorAll('.more-info');
  if (moreDaysListItem) {
    moreDaysListItem.forEach(e => e.remove());
  }
  const currentMoreInfo = moreInfoData.find(e => e.DayNum == day);
  refs.moreInfoBlock.innerHTML += moreInfoTemp(currentMoreInfo.forecast);
};

document.querySelector('.more-info-weather').addEventListener('click', handleBtnlick);

function handleBtnlick(event) {
  event.preventDefault();
  if (event.target.nodeName === 'BUTTON') {
    renderMoreInfo(target);
  }
}
