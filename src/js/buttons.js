//===========5 DAYS BUTTON================
const oneDay = document.getElementById('oneday');
const currentDate = document.querySelector('.date');
const fiveDaysWeather = document.querySelector('.fivedays-weather');
const buttonBox = document.querySelector('.button-box');
const fiveDaysBtn = document.getElementById('fiveDaysBtn');
const todayBtn = document.getElementById('todayBtn');
const screenWidth = window.screen.width;

fiveDaysBtn.onclick = function () {
  oneDay.hidden = true;
  currentDate.hidden = true;
  fiveDaysWeather.hidden = false;

  if (oneDay.hidden && screenWidth >= 768 && screenWidth < 1280) {
    buttonBox.style.marginTop = '377px';
  } else if (oneDay.hidden && screenWidth >= 1280) {
    buttonBox.style.marginTop = '310px';
  } else {
    buttonBox.style.marginTop = '65px';
  }

  todayBtn.onclick = function () {
    oneDay.hidden = false;
    currentDate.hidden = false;
    fiveDaysWeather.hidden = true;
    if (!oneDay.hidden && screenWidth >= 1280) {
      buttonBox.style.marginTop = '20px';
    } else if (!oneDay.hidden && screenWidth >= 768 && screenWidth < 1280) {
      buttonBox.style.marginTop = '40px';
    } else if (!oneDay.hidden) {
      buttonBox.style.marginTop = '30px';
    }
  };
};

// =================Buttons Arrows===============

// const arrowLeftBtn = document.querySelector('.left-btn');
// const arrowRightBtn = document.querySelector('.right-btn');
// const container = document.querySelector('.five-days-weather-list');
// console.log(container);
// arrowRightBtn.addEventListener('click', scrollToRight);

// // arrowRightBtn.onclick = function () {
// function scrollToRight(e) {
//   if (e.target.nodeName === 'BUTTON') {
//     container.scroll({
//       left: -100,
//       behavior: 'smooth',
//     });
//   }
// }
