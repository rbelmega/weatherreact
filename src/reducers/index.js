import { combineReducers } from 'redux'
import hourByHour from './hourbyhour'
import soonWeather from './soonweather'
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

export default combineReducers({
  reduxAsyncConnect,
  hourByHour,
  soonWeather
});