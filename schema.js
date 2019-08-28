import { gql } from "apollo-server";

const typeDefs = gql`
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
    
  }
`;