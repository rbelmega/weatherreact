
export default function soonWeather (state = {}, action) {

  switch (action.type) {
    case 'GET_SOON_WEATHER':
      return { ...state, soonWeather: action.payload};
    default:
      return state;
  }
}