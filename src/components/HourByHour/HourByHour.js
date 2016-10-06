import React, { Component } from 'react';
import { connect } from "react-redux";
import * as weatherActions from '../../actions/weatherActions';
import { fetchWeather }from '../../actions/weatherActions';
import { bindActionCreators } from 'redux'
//import TableRow from'../TableRow/TableRow'


class HourByHour extends Component {
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

export default connect(mapStateToProps, mapDispatchToProps) (HourByHour);