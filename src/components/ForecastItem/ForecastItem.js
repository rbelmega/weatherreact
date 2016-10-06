import React, {  Component } from 'react'

export default  class ForecastItem extends Component {
  render () {
    return <div className="col-md-2 forecastItem .base-bg">
      <div> dayPartName</div>
      <div> precipPct </div>
      <div> precipAmt</div>
      <div> temperature </div>
      <div> phrase</div>
      <div></div>
    </div>
  }
}