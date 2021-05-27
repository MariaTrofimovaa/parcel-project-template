import chartTpl from '../templates/chart.hbs';
import apiService from '../js/apiService.js';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

document.querySelector('.fivedays-chart').insertAdjacentHTML('beforeend', chartTpl());
const ctx = document.querySelector('.js-chart').getContext('2d');

// document.querySelector('.content').innerHTML = chartTpl();
// console.log(chartTpl());

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['завтра', 'послезавтра', 'через 2 дня', 'через 3 дня', 'через 4 дня'],
    datasets: [
      {
        label: '— Temperature, C° ',
        data: [1.5, 1.2, 1.0, 1.9, 1.7, 1.1],
        //         data: chartData.temp,
        backgroundColor: '#FF6B09',
        borderColor: '#FF6B09',
        borderWidth: 1,
      },
      {
        label: '— Humidity, % ',
        data: [0.5, 0.3, 0.2, 0.9, 0.1, 0.7],
        //         data: chartData.humidity,
        backgroundColor: '#0906EB',
        borderColor: '#0906EB',
        borderWidth: 1,
      },
      {
        label: '— Wind Speed, m/s ',
        data: [2.1, 2.7, 2.3, 2.8, 2.2, 2.0],
        //         data: chartData.speed,
        backgroundColor: '#EA9A05',
        borderColor: '#EA9A05',
        borderWidth: 1,
      },
      {
        label: '— Atmosphere Pressure, m/m',
        data: [1.9, 2.1, 2.2, 2.5, 2.0, 2.7],
        //         data: chartData.pressure,
        backgroundColor: '#067806',
        borderColor: '#067806',
        borderWidth: 1,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Value of indicators',
      position: 'left',
    },
    legend: {
      display: true,
      align: 'start',

      labels: {
        boxWidth: 13,
        boxHeight: 12,
        defaultFontColor: 'rgb(5, 120, 6)',
        padding: 10,
      },
    },

    scales: {
      xAxes: [
        {
          gridLines: {
            color: 'rgba(255, 255, 255, 0.54)',
          },
          ticks: {
            padding: 20,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: 'rgba(255, 255, 255, 0.54)',
            stepSize: 0.5,
            zeroLineColor: 'rgba(255, 255, 255, 0.54)',
          },
          ticks: {
            padding: 18,
          },
        },
      ],
    },
    responsive: true,
    maintainAspectRatio: false,
  },
});
