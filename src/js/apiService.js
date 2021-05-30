import config from '../config.json';

class ApiService {
  constructor() {
    this.requestUrl = config.url;
    this.bgIconUrl = config.bgIconUrl;
    this.key = config.apiKey;
    this.apiKeyImg = config.apiKeyImg;
    this.searchQuery = '';
    this.units = config.units;
    this.location = 'Lviv';
    this.metric = config.metric;
  }

  // ************************** Делаем запрос на сервер
  // Метод получает параметр collection - это weather (1 день) или forecast (5 дней)
  // позволяет получать данные на 1 или 5 дней в зависимости от параметра

  getData(collection) {
    const url = `${this.requestUrl}${collection}?q=${this.location}&units=${this.units}&appid=${this.key}`;
    // console.log(url);

    return fetch(url).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Something went wrong');
    });
  }

  // Метод получения изображений с pixabay
  fetchImages() {
    const bgUrlIcon = `${this.bgIconUrl}${this.location}&page=1&per_page=12&key=${this.apiKeyImg}`;
    // console.log(bgUrlIcon);

    return fetch(bgUrlIcon).then(res => {
      if (res.ok) {
        // console.log(res);
        return res.json();
      }
      return Promise.reject('Picture not found');
    });
  }

  //   Сеттер получения текущей локации после нажатия на Сабмит или Enter
  set query(newLocation) {
    this.location = newLocation;
  }

  // set setLocationImg(newLocation) {
  //   this.location = newLocation;
  // }
}

const apiService = new ApiService({});

export default apiService;

// Получаем данные за 5 дней.
// getFiveDayData() {
//   const urlOneCall = `${this.requestUrlOneCall}?lat=${this.lat}&lon=${this.lon}&dt=${this.time}&appid=${this.key}`;

//   console.log(urlOneCall);

//   return fetch(urlOneCall).then(res => {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject('Something went wrong');
//   });
// }

// fetchImages(city) {
//   const bgUrlIcon = `${this.bgIconUrl}${city}&page=1&per_page=12&key=${this.apiKeyImg}`;
//   // console.log(bgUrlIcon);

//   return fetch(bgUrlIcon).then(res => {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject('Picture not found');
//   });
// }
//

// set query(newLocation) {
//   newLocation = this.location;
// }
