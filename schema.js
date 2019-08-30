const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    weatherByCityId(id: Int!): CurrentWeather
    weatherByCoord(lon: Float!, lat: Float!): CurrentWeather
    forecast(param: String): ApiXuWeather
  }

  type ApiXuWeather @cacheControl(maxAge: 2400) {
    location: Location
    current: Current
    forecast: Forecast
  }

  type Forecast {
    forecastday: [Forecastday]
  }

  type Location {
    name: String
    region: String
    country: String
    lat: Float
    lon: Float
    tz_id: String
    localtime_epoch: Int
    localtime: String
  }

  type Forecastday {
    date: String
    date_epoch: Int
    day: Day
    astro: Astro
  }

  type Day {
    maxtemp_c: Float
    maxtemp_f: Float
    mintemp_c: Float
    mintemp_f: Float
    avgtemp_c: Float
    avgtemp_f: Float
    maxwind_mph: Float
    maxwind_kph: Float
    totalprecip_mm: Float
    totalprecip_in: Float
    avgvis_km: Float
    avgvis_miles: Float
    avghumidity: Int
    condition: Condition
    uv: Float
  }

  type Astro {
    sunrise: String
    sunset: String
    moonrise: String
    moonset: String
    moon_phase: String
    moon_illumination: String
  }

  type Current {
    last_updated_epoch: Int
    last_updated: "String"
    temp_c: Float
    temp_f: Float
    is_day: Int
    condition: Condition
    wind_mph: Float
    wind_kph: Float
    wind_degree: Int
    wind_dir: String
    pressure_mb: Float
    pressure_in: Float
    precip_mm: Float
    precip_in: Float
    humidity: Int
    cloud: Int
    feelslike_c: Float
    feelslike_f: Float
    vis_km: Float
    vis_miles: Float
    uv: Float
    gust_mph: Float
    gust_kph: Float
  }

  type Condition {
    text: String
    icon: String
    code: Int
  }
  
  type CurrentWeather @cacheControl(maxAge: 2400) {
    coord: Coord
    weather: [Weather]
    base: String
    main: MainInfo
    visibility: Int
    wind: Wind
    rain: Volume
    snow: Volume
    dt: Int
    sys: Sys
    timezone: Int
    id: Int
    name: String
    cod: Int
  }

  type Coord {
    lon: Float
    lat: Float
  }

  type Weather {
    id: Int
    main: String
    description: String
    icon: String
  }

  type MainInfo {
    temp: Float
    pressure: Int
    humidity: Int
    temp_min: Float
    temp_max: Float
    sea_level: Int
    grnd_level: Int
  }

  type Wind {
    speed: Float
    deg: Int    
  }

  type Volume {
    l1h: Int
    l3h: Int
  }

  type Clouds {
    all: Int
  }

  type Sys {
    type: Int
    id: Int
    message: Float
    country: String
    sunrise: Int
    sunset: Int
  }
`;

module.exports = typeDefs;