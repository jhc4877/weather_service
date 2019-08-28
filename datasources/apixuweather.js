
const { RESTDataSource } = require('apollo-datasource-rest');

class ApiXuWeatherAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://api.apixu.com/v1/';
  }

  willSendRequest(request) {
    request.params.set('key', '10bc6d391be8422b803232333192005');
  }

  async getForecast(param) {
    const res = await this.get('forecast.json', { q: param });
    return res;
  }
}

module.exports = ApiXuWeatherAPI;