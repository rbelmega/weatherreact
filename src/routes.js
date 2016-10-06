import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from "./components/Layout/Layout";
import SoonWeather from './components/SoonWeather/SoonWeather'
import HourByHour from './components/HourByHour/HourByHour'
import DaysForecast from './components/DaysForecast/DaysForecast'
import TravelForecast from './components/TravelForecast/TravelForecast'

export const routes = (
  <div>
    <Route path='/' component={Layout}>
      <IndexRoute component={HourByHour}/>
      <Route path='today' component={SoonWeather}/>
      <Route path='days' component={DaysForecast}/>
      <Route path='travel' component={TravelForecast}/>
    </Route>
  </div>
)