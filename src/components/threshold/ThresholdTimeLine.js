import React from "react";
import "./ThresholdTimeLine.css";

export default function ThresholdTimeLine() {
  return (
    <div className="threshold-timeline">
      <div className="date">2016 Jan 08 - 2017 Jan 08</div>
      <div className="time">
        <span style={{ pading: "8px" }}>1s</span>
        <span style={{ pading: "8px" }}>1m</span>
        <span style={{ pading: "8px" }}>1h</span>
        <span style={{ pading: "8px" }}>1d</span>
        <span style={{ pading: "8px" }}>1w</span>
        <span>1m</span>
        <span>3m</span>
        <span>6m</span>
        <span style={{ color: "#FFFFFF" }}>1y</span>
      </div>
    </div>
  );
}
