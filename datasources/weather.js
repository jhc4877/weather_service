const { RESTDataSource } = require('apollo-datasource-rest');

class WeatherAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.openweathermap.org/data/2.5/';
  }

  willSendRequest(request) {
    request.params.set('appid', '09aa4d0164a773bb6c75761d257e52e4');
  }

  async getWeatherByCityId(id) {
    const res = await this.get('weather', { id });
    return res;
  }

  async getWeatherByCoord(coord) {
    const res = await this.get('weather', coord);
    return res;
  }
}

module.exports = WeatherAPI;