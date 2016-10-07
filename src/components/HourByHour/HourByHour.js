import React, { Component } from 'react';
import { connect } from "react-redux";
import * as weatherActions from '../../actions/weatherActions';
import { fetchWeather }from '../../actions/weatherActions';
import { bindActionCreators } from 'redux'
import { asyncConnect } from 'redux-async-connect';
//import TableRow from'../TableRow/TableRow'

function mapStateToProps(state) {
  return {
    hourByHour: state.hourByHour
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(weatherActions, dispatch)
  }
}

@asyncConnect([{
  deferred: true,
  promise: ({store: {dispatch}}) => {
      return dispatch(fetchWeather());
  }
}])
@connect(mapStateToProps, mapDispatchToProps)
export default class HourByHour extends Component {
  render () {
    const tableHeads = [
      "ЧАС",
      "ОПИС",
      "ТЕМП",
      "ОПАДИ",
      "ВОЛ-СТЬ",
      "ВІТЕР"
    ].map((title, i) =>  <TableHead key = {i} tableData={title}/>);

    console.log(this.props);
    return (
      <div className="col-xs-8 col-md-8 well well-sm">
        <h1 >погодинно</h1>
        <table className="table table-hover ">
          <thead>
          <tr>{ tableHeads  }</tr>
          </thead>
          <tbody> <tr>{  }</tr> </tbody>
        </table>
      </div>
    )
  }
}

const TableHead = (props)=> {
  return <th>{props.tableData}</th>
};