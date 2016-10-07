import React  from 'react';

const HourByHour = ({ hourlyWeather }) => {
  const tableHeads = [
    "ЧАС",
    "ОПИС",
    "ТЕМП",
    "ОПАДИ",
    "ВОЛ-СТЬ",
    "ВІТЕР"
  ].map((title, i) =>  <TableHead key = {i} tableData={title}/>);

  console.log('hi there');
  console.log(hourlyWeather);

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
};

export  default HourByHour;

const TableHead = (props)=> {
  return <th>{props.tableData}</th>
};