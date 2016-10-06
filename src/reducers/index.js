import { combineReducers } from 'redux'
import hourByHour from './hourbyhour'
import soonWeather from './soonweather'

export default combineReducers({
  hourByHour,
  soonWeather
});