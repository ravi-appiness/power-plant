import React, { Component } from "react";
import UpperThreshold from "../components/threshold/UpperThreshold";
import ThresholdTimeLine from "../components/threshold/ThresholdTimeLine";
import LowerThreshold from "../components/threshold/LowerThreshold";

export default class ThresholdContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <ThresholdTimeLine />
        <UpperThreshold />
        <LowerThreshold />
      </React.Fragment>
    );
  }
}
