import React, { Component } from "react";
import './SensorInfo.css';

export default class SensorInfo extends Component {
  render() {
    return (
      <div>
        <div className="sensors">Sensors:</div>
        <div className="component_failure">Component failure modes:</div>
        <div className="item1">All (98)</div>
        <span className="box" style={{ left: "77px", top: "46px" }} />
        <div className="item2">Recent anomalies (5)</div>
        <div className="item3" style={{ left: "284px", top: "44px" }}>
          Bearing failure (5)
        </div>
        <span className="box" style={{ left: "405px", top: "46px" }} />
        <div className="item3" style={{ left: "422px", top: "44px" }}>
          Cooling fluid leak(9)
        </div>
        <span className="box" style={{ left: "555px", top: "46px" }} />
        <div className="item3" style={{ left: "573px", top: "44px" }}>
          Another failure mode (6)
        </div>
      </div>
    );
  }
}
