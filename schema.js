const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    weatherByCityId(id: Int!): CurrentWeather
    weatherByCoord(lon: Float!, lat: Float!): CurrentWeather
  }
  
  type CurrentWeather @cacheControl(maxAge: 240) {
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