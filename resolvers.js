module.exports = {
  Query: {
    weatherByCityId: (_, { id }, { dataSources }) => dataSources.weatherAPI.getWeatherByCityId(id),
    weatherByCoord: (_, { lon, lat }, { dataSources }) => dataSources.weatherAPI.getWeatherByCoord({ lon, lat }),
    forecast: (_, { param }, { dataSources }) => dataSources.apiXuWeatherAPI.getForecast(param),
  }
};