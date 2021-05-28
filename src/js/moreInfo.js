import moreInfoTpl from '../templates/moreInfo.hbs';
import apiService from './apiService.js';
import { fiveDaysData } from './base/helper.js';
// import refs from '../refs';
// fiveDaysData; // достаем массив

/* 

Повесить обраб событий на юл
убедитьсяЯ, что надатие на ссылку (а)
считываем датасетдай, чтобы получить число дня 
ищем в массиве 5дайздата обхект, через find ищем объект чтобы data совпала с той, что достали из атрибута датасет
берем из объекта массив кот лежит в форкаст

этот массив - то , что нужно зарендерить
мэпнуть, чтобы подготовить поля для шаблона

*/

// let moreInfoData = {};

// const getMoreInfoData = () => {
//   return apiService
//     .getData('forecast')
//     .then(data => renderFiveDays(data))
//     .catch(err => console.log(err));
// };

// getMoreInfoData();

// const renderMoreInfo = target => {
//   // moreInfoData = api.getData();
//   document.querySelector('.additional-info').classList.remove('isHiden');
//   // const day = Number(target.dataset.day);
//   const moreDaysListItem = document.querySelectorAll('.more-info');
//   if (moreDaysListItem) {
//     moreDaysListItem.forEach(e => e.remove());
//   }
//   const currentMoreInfo = moreInfoData.find(e => e.DayNum == day);
//   refs.moreInfoBlock.innerHTML += moreInfoTemp(currentMoreInfo.forecast);
// };

// document.querySelector('.fivedays-weather').addEventListener('click', handleBtnlick);

// function handleBtnlick(event) {
//   event.preventDefault();
//   if (event.target.nodeName === 'BUTTON') {
//     renderMoreInfo(target);
//   }
// }
