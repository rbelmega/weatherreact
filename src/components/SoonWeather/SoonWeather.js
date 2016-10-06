import React, { Component } from 'react';

import ForecastItem from '../ForecastItem/ForecastItem'

export default class SoonWeather extends Component {
  render () {
    return (
      <div className="col-xs-8 col-md-8 well well-sm">
        <h1 >Майбутній прогноз</h1>
        <div >
          <ForecastItem></ForecastItem>
        </div>
      </div>
    )
  }
}