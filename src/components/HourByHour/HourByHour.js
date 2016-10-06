import React, { Component } from 'react';
import { connect } from "react-redux";
import * as weatherActions from '../../actions/weatherActions';
import { fetchWeather }from '../../actions/weatherActions';
import { bindActionCreators } from 'redux'
//import TableRow from'../TableRow/TableRow'


export default class HourByHour extends Component {
  componentWillMount () {
    fetchWeather();
  }

  render () {
    const tableHeads = [
      "ЧАС",
      "ОПИС",
      "ТЕМП",
      "ОПАДИ",
      "ВОЛ-СТЬ",
      "ВІТЕР"
    ].map((title, i) => <TableHead key = {i} tableData={title}/>);

    console.log(this.props.hourlyWeather );
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

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(weatherActions, dispatch)
  }
}

 connect(mapStateToProps, mapDispatchToProps) (HourByHour);