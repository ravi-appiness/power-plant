import React, { Component } from "react";
import { XYPlot, LineMarkSeries } from "react-vis";
import { upperThreshold } from "../../data/ThresholdData";
import "./UpperThreshold.css";

export default class UpperThreshold extends Component {
  render() {
    return (
      <div>
        <div className="chart-parent">
          <div className="chart-title2">
            <div className="y-axis-value">90</div>
            <div className="upper">UPPER THRESHOLD</div>
          </div>
          <div className="chart-title3">
            <div
              className="y-axis-value"
              style={{ position: "absolute", top: "10px" }}
            >
              85
            </div>
            <div
              className="y-axis-value"
              style={{ position: "absolute", top: "43px" }}
            >
              80
            </div>
            <div
              className="y-axis-value"
              style={{ position: "absolute", top: "75px" }}
            >
              75
            </div>
            <div
              className="line"
              style={{
                position: "absolute",
                left: "20px",
                top: "52px",
                display: "flex",
                fill: "none"
              }}
            ></div>
            <div
              className="line"
              style={{
                position: "absolute",
                left: "20px",
                top: "18px",
                display: "flex",
                fill: "none"
              }}
            ></div>
            <div
              className="line"
              style={{
                position: "absolute",
                left: "20px",
                top: "83px",
                display: "flex",
                fill: "none"
              }}
            ></div>
            <XYPlot
              width={1100}
              height={178}
              style={{ display: "flex", fill: "none" }}
            >
              <LineMarkSeries
                data={upperThreshold}
                lineStyle={{ stroke: "#47C874" }}
                markStyle={{ stroke: "none", fill: "none", width: "0px" }}
                curve={"curveCatmullRom.alpha(0.2)"}
              />
            </XYPlot>
          </div>
          <div className="chart-title4">
            <div className="lower-threshold-gradient">70</div>
            <div className="lower">LOWER THRESHOLD</div>
            <div className="month">
              <span style={{ position: "absolute", left: "5px", top: "50px" }}>
                2016 Jan
              </span>
              <span
                style={{ position: "absolute", left: "280px", top: "50px" }}
              >
                Mar
              </span>
              <span
                style={{ position: "absolute", left: "580px", top: "50px" }}
              >
                Jun
              </span>
              <span
                style={{ position: "absolute", left: "880px", top: "50px" }}
              >
                Sep
              </span>
            </div>
          </div>
          <div className="verticle-divider" />
          <div
            className="verticle-divider"
            style={{ position: "absolute", left: "588px" }}
          />
          <div
            className="verticle-divider"
            style={{ position: "absolute", left: "888px" }}
          />
        </div>
      </div>
    );
  }
}
