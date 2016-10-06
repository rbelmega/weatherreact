import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Navigation extends Component {
  render() {
    return (
      <div className="navbar-collapse col-xs-8 col-md-8">
        <ul className="nav navbar-nav">
          <li><Link to="today"> Сьогодні</Link></li>
          <li><Link to="/"> Погодинно</Link></li>
          <li><Link to="days"> 5 днів</Link></li>
          <li><Link to="travel"> Погода в подорожі</Link></li>
        </ul>
      </div>
    )
  }
}