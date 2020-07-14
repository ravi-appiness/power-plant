import React, { Component } from "react";
import "./PoListDataGrid.css";
import RowItem from "../components/RowItem";

export default class PoListDataGrid extends Component {
  render() {
    return (
      <table className="data-grid-table">
        <thead>
          <tr>
            <th>3/6</th>
            <th>Rnk</th>
            <th>Sensor name</th>
            <th></th>
            <th>Last reading</th>
            <th>Upper limit</th>
            <th>Last anomaly</th>
            <th>Avg duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td>Location</td>
            <td>Units</td>
            <td>Time</td>
            <td>Lower limit</td>
            <td>Time</td>
            <td>No. in 7 days</td>
          </tr>
          <RowItem selected={true} itemNo={1} />
          <RowItem selected={false} itemNo={2} />
          <RowItem selected={false} itemNo={3} />
          <RowItem selected={false} itemNo={4} />
          <RowItem selected={false} itemNo={5} />
        </tbody>
      </table>
    );
  }
}
