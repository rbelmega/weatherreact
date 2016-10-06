import fetch from 'isomorphic-fetch';


const HOURLY_URL = 'https://api.weather.com/v2/turbo/vt1hourlyForecast?units=m&language=uk-UA&geocode=50.43,30.52&format=json&apiKey=c1ea9f47f6a88b9acb43aba7faf389d4'

export function fetchWeather() {
  console.log("fetchWeather");
  return  function (dispatch) {
    console.log(dispatch);
    return fetch (HOURLY_URL)
      .then((response => {
          dispatch({
            type: 'FETCH_WEATHER_FULLFIELD',
            payload: response.data,
          });
        }
      ))
      .catch ((err) => {
        dispatch({
          type: 'FETCH_WEATHER_REJECTED',
          payload: err,
        });
      })
  }
}