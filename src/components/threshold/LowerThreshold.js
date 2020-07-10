import React, { Component } from "react";
import { XYPlot, LineMarkSeries } from "react-vis";
import {
  LowerThresholdGraph1,
  LowerThresholdGraph2,
  LowerThresholdGraph3
} from "../../data/ThresholdData";
import "./LowerThreshold.css";

export default class LowerThreshold extends Component {
  render() {
    const lineGraph1 = LowerThresholdGraph1;
    const lineGraph2 = LowerThresholdGraph2;
    const lineGraph3 = LowerThresholdGraph3;
    return (
      <React.Fragment>
        <div className="chart-title5">
          <div className="overlay1"></div>
          <div className="overlay2"></div>
          <div className="month">
            <span
              style={{
                position: "absolute",
                left: "295px",
                top: "40px",
                opacity: "0.50"
              }}
            >
              2015
            </span>
            <span style={{ position: "absolute", left: "660px", top: "40px" }}>
              2016
            </span>
            <span
              style={{
                position: "absolute",
                left: "962px",
                top: "40px",
                opacity: "0.50"
              }}
            >
              2017
            </span>
          </div>
          <XYPlot
            width={1100}
            height={80}
            style={{ display: "flex", fill: "none" }}
          >
            <LineMarkSeries
              data={lineGraph1}
              lineStyle={{ stroke: "#47C874" }}
              markStyle={{ stroke: "none", fill: "none", width: "0px" }}
              curve={"curveCatmullRom.alpha(0.2)"}
            />
            <LineMarkSeries
              data={lineGraph2}
              lineStyle={{ stroke: "#026FB5" }}
              markStyle={{ stroke: "none", fill: "none", width: "0px" }}
              curve={"curveCatmullRom.alpha(0.2)"}
            />
            <LineMarkSeries
              data={lineGraph3}
              lineStyle={{ stroke: "#249A95" }}
              markStyle={{ stroke: "none", fill: "none", width: "0px" }}
              curve={"curveCatmullRom.alpha(0.2)"}
            />
          </XYPlot>
          <div
            className="small-verticle-divider"
            style={{
              position: "absolute",
              left: "282px",
              top: "0px",
              height: "60px"
            }}
          />

          <div
            className="small-verticle-divider"
            style={{
              position: "absolute",
              left: "648px",
              top: "0px",
              height: "60px"
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "652px",
              top: "0px",
              height: "60px"
            }}
          >
            <img
              className="slider"
              alt="slider marker"
              src={require("../../assets/slider.png")}
              width="7px"
              height="14px"
            />
          </div>

          <div
            className="small-verticle-divider"
            style={{
              position: "absolute",
              left: "950px",
              top: "0px",
              height: "60px"
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "954px",
              top: "0px",
              height: "60px"
            }}
          >
            <img
              className="slider"
              alt="slider marker"
              src={require("../../assets/slider.png")}
              width="7px"
              height="14px"
            />
          </div>
          <div
            className="horizontal-divider"
            style={{
              position: "absolute",
              left: "652px",
              top: "0px",
              height: "60px"
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}
