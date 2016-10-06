import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (  <div className="navbar-form navbar-right col-xs-4 col-md-4">
        <form className="input-group">
          <input type="text" className="form-control" placeholder="Isn't working yet"/>
          <span className="input-group-btn">
        <button className="btn btn-default" type="button">
          <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
        </button>
      </span>
        </form>
      </div>
    )
  }
}