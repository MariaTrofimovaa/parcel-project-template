import chartTpl from '../templates/chart.hbs';
import apiService from '../js/apiService.js';
import { Chart, registerables } from 'chart.js';
import { fiveDaysData } from './base/helper.js';

Chart.register(...registerables);

document.querySelector('.fivedays-chart').insertAdjacentHTML('beforeend', chartTpl());
const ctx = document.querySelector('.js-chart').getContext('2d');

function renderChartData() {
  let chart = {};
  // console.log(fiveDaysData);
  // 1. Получаем число, месяц, год
  const сhartData = fiveDaysData.map(e => {
    // console.log(e.month);
    // console.log(e.day);
    // console.log(e.year);
    return e.month + ' ' + e.day + ', ' + e.year;
  });
  console.log(сhartData);

  // 2. Получаем температуру
  const сhartTemp = fiveDaysData.map(e => e.tempDay);
  console.log(сhartTemp);
  // 2. Получаем влажность
  const сhartHumidity = fiveDaysData.map(e => e.humidity);
  console.log(сhartHumidity);
  // 2. Получаем скорость ветра
  const сhartWindSpeed = fiveDaysData.map(e => e.wind);
  console.log(сhartWindSpeed);
  // 2. Получаем давление
  const сhartPressure = fiveDaysData.map(e => e.pressure);
  console.log(сhartPressure);

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: сhartData,

      datasets: [
        {
          label: '— Temperature, C° ',
          data: сhartTemp,
          backgroundColor: '#FF6B09',
          borderColor: '#FF6B09',
          borderWidth: 1,
        },
        {
          label: '— Humidity, % ',
          data: сhartHumidity,
          backgroundColor: '#0906EB',
          borderColor: '#0906EB',
          borderWidth: 1,
        },
        {
          label: '— Wind Speed, m/s ',
          data: сhartWindSpeed,
          backgroundColor: '#EA9A05',
          borderColor: '#EA9A05',
          borderWidth: 1,
        },
        {
          label: '— Atmosphere Pressure, m/m',
          data: сhartPressure,
          backgroundColor: '#067806',
          borderColor: '#067806',
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: true,
        align: 'start',

        labels: {
          boxWidth: 13,
          boxHeight: 12,
          defaultFontColor: 'rgb(5, 120, 6)',
        },
      },

      scales: {
        x: {
          grid: {
            color: 'rgba(255, 255, 255, 0.54)',

            ticks: {
              padding: 20,
            },
          },
        },
        y: {
          title: {
            display: true,
            text: 'Value of indicators',
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.54)',

            ticks: {
              padding: 20,
            },
          },
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}

//     responsive: true,
//     maintainAspectRatio: false,
//   },
// });

// ==================================
const boxOfShowChart = document.querySelector('.show-chart-box');
const chartBox = document.querySelector('.chart-box');
const btnShowChart = document.querySelector('.show-chart-btn-js');
const headerOfShowChart = document.querySelector('.show-chart-header-js');
const btnHideChart = document.querySelector('.hide-chart-btn-js');
const headerOfHideChart = document.querySelector('.hide-chart-header-js');
// ==================================
btnShowChart.addEventListener('click', onShowChartClick);
headerOfShowChart.addEventListener('click', onShowChartClick);
btnHideChart.addEventListener('click', onHideChartClick);
headerOfHideChart.addEventListener('click', onHideChartClick);
// ==================================
function onShowChartClick() {
  boxOfShowChart.classList.add('none') & chartBox.classList.add('visible');

  renderChartData();
}

function onHideChartClick() {
  chartBox.classList.remove('visible') & boxOfShowChart.classList.remove('none');

  // chart.destroy(); // удалить график
}

export default renderChartData;
