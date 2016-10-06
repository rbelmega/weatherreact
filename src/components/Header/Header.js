import React, { Component } from 'react';

import Navigation from '../Navigation/Navigation'
import Search from '../Search/Search'

export default class Header extends Component {
  render() {
    return <nav className="navbar navbar-default">
      <div className="navbar-collapse row">
        <Navigation/>
        <Search/>
      </div>
    </nav>
  }
}
