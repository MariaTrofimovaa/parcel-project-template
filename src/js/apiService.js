import config from '../config.json';

class ApiService {
  constructor() {
    this.requestUrl = config.url;
    this.urlIcon = config.urlIcon;
    this.key = config.apiKey;
    this.searchQuery = '';
    this.units = config.units;
    this.location = 'Kiev';
  }

  // ************************** Делаем запрос на сервер
  // Метод получает параметр collection - это weather (1 день) или forecast (5 дней)
  // позволяет получать данные на 1 или 5 дней в зависимости от параметра

  getData(collection) {
    const url = `${this.requestUrl}${collection}?q=${this.location}&units=${this.units}&appid=${this.key}`;
    console.log(url);

    return fetch(url).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Something went wrong');
    });
  }

  // Получаем текущую локацию после Submit или Enter
  set query(newLocation) {
    newLocation = this.location;
  }
}

const apiService = new ApiService({});

export default apiService;
