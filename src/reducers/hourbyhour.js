export default function hourByHour (state = {}, action) {

  switch (action.type) {
    case 'FETCH_WEATHER': {
      return {
        ...state,
        fetching: true
      };
    }
    case 'FETCH_WEATHER_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }
    case 'FETCH_WEATHER_FULLFIELD': {
      return {
        ...state,
        fetching: false,
        hourlyWeather: action.payload
      };
    }
    default:
      return state;
  }
}