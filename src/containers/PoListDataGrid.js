import React, { Component } from "react";
import "./PoListDataGrid.css";
import { RiCheckboxLine,RiCheckboxBlankLine } from "react-icons/ri";

export default class PoListDataGrid extends Component {
  render() {
    return (
      <table className="data-grid-table">
        <div className="selected-mask" />
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
          <tr className="table-row selected">
            <td rowspan="2">
              <span className="selected-line" />
              <RiCheckboxLine className="checkbox" />
              <span className="overlay">
                <svg
                  xmlns="http://www.w3.orh/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="current Color"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon"
                >
                  <polyline point="20 6 9 17 4 12" />
                </svg>
              </span>
            </td>
            <td className="table-line">1</td>
            <td className="table-line">Static pressure at pump outlet</td>
            <td className="table-line"></td>
            <td className="table-line">
              <span className="graph1" style={{ marginTop: "8px" }} />
              107.0054
            </td>
            <td className="table-line">
              <span
                className="graph1"
                style={{ left: "675px", marginTop: "8px" }}
              />
              100.0000
            </td>
            <td className="table-line">
              <span
                className="graph1"
                style={{ left: "805px", marginTop: "8px" }}
              />
              107.0054
            </td>
            <td className="table-line">813 mins</td>
          </tr>
          <tr className="table-row">
            <td></td>
            <td>Pump 5 / Drivetrain</td>
            <td>bar</td>
            <td>'17 Jan 30, 8:44</td>
            <td>
              <span
                className="graph2"
                style={{ left: "675px", marginTop: "8px" }}
              ></span>
              69.4460
            </td>
            <td>'17 Jan 30, 8:44</td>
            <td></td>
          </tr>
          <tr className="table-row">
            <td rowspan="2">
              <label className="checkbox">
                <RiCheckboxBlankLine className="checkbox" />
                <span className="overlay">
                  <svg
                    xmlns="http://www.w3.orh/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="current Color"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon"
                  >
                    <polyline point="20 6 9 17 4 12" />
                  </svg>
                </span>
              </label>
            </td>
            <td className="table-line">2</td>
            <td className="table-line">Static pressure at pump outlet</td>
            <td></td>
            <td className="table-line">
              <span
                className="graph1"
                style={{ left: "512px", top: "225px" }}
              />
              107.0054
            </td>
            <td className="table-line">
              <span
                className="graph1"
                style={{ left: "675px", top: "225px" }}
              />
              100.0000
            </td>
            <td className="table-line">
              <span
                className="graph1"
                style={{ left: "805px", top: "225px" }}
              />
              107.0054
            </td>
            <td className="table-line">813 mins</td>
          </tr>
          <tr className="table-row">
            <td></td>
            <td>Pump 5 / Drivetrain</td>
            <td>bar</td>
            <td>'17 Jan 30,8:44</td>
            <td>
              <span
                className="graph2"
                style={{ left: "675px", top: "280px" }}
              ></span>
              69.4460
            </td>
            <td>'17 Jan 30, 8:44</td>
            <td></td>
          </tr>
          <tr className="table-row">
            <td rowspan="2">
              <label className="checkbox">
                <RiCheckboxBlankLine className="checkbox" />
                <span className="overlay">
                  <svg
                    xmlns="http://www.w3.orh/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="current Color"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon"
                  >
                    <polyline point="20 6 9 17 4 12" />
                  </svg>
                </span>
              </label>
            </td>
            <td className="table-line">3</td>
            <td className="table-line">Static pressure at pump outlet</td>
            <td></td>
            <td className="table-line">
              <span
                className="graph1"
                style={{ left: "512px", top: "333px" }}
              />
              107.0054
            </td>
            <td className="table-line">
              <span
                className="graph1"
                style={{ left: "675px", top: "333px" }}
              />
              100.0000
            </td>
            <td className="table-line">
              <span
                className="graph1"
                style={{ left: "805px", top: "333px" }}
              />
              107.0054
            </td>
            <td className="table-line">813 mins</td>
          </tr>
          <tr className="table-row">
            <td></td>
            <td>Pump 5 / Drivetrain</td>
            <td>bar</td>
            <td>'17 Jan 30, 8:44</td>
            <td>
              <span
                className="graph2"
                style={{ left: "675px", top: "390px" }}
              ></span>
              69.4460
            </td>
            <td>'17 Jan 30, 8:44</td>
            <td></td>
          </tr>
          <tr className="table-row">
            <td rowspan="2">
              <label className="checkbox">
                <RiCheckboxBlankLine className="checkbox" />
                <span className="overlay">
                  <svg
                    xmlns="http://www.w3.orh/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="current Color"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon"
                  >
                    <polyline point="20 6 9 17 4 12" />
                  </svg>
                </span>
              </label>
            </td>
            <td className="table-line">4</td>
            <td className="table-line">Static pressure at pump outlet</td>
            <td></td>
            <td className="table-line">
              <span
                className="graph1"
                style={{ left: "512px", top: "445px" }}
              />
              107.0054
            </td>
            <td className="table-line">
              <span
                className="graph1"
                style={{ left: "675px", top: "445px" }}
              />
              100.0000
            </td>
            <td className="table-line">
              <span
                className="graph1"
                style={{ left: "805px", top: "445px" }}
              />
              107.0054
            </td>
            <td className="table-line">813 mins</td>
          </tr>
          <tr className="table-row">
            <td></td>
            <td>Pump 5 / Drivetrain</td>
            <td>bar</td>
            <td>'17 Jan 30, 8:44</td>
            <td>
              <span
                className="graph2"
                style={{ left: "675px", top: "500px" }}
              ></span>
              69.4460
            </td>
            <td>'17 Jan 30, 8:44</td>
            <td></td>
          </tr>
          <tr className="table-row">
            <td rowspan="2">
              <label className="checkbox">
                <RiCheckboxBlankLine className="checkbox" />
                <span className="overlay">
                  <svg
                    xmlns="http://www.w3.orh/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="current Color"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon"
                  >
                    <polyline point="20 6 9 17 4 12" />
                  </svg>
                </span>
              </label>
            </td>
            <td className="table-line">5</td>
            <td className="table-line">Static pressure at pump outlet</td>
            <td></td>
            <td className="table-line">
              <span
                className="graph1"
                style={{ left: "512px", top: "555px" }}
              />
              107.0054
            </td>
            <td className="table-line">
              <span
                className="graph1"
                style={{ left: "675px", top: "555px" }}
              />
              100.0000
            </td>
            <td className="table-line">
              <span
                className="graph1"
                style={{ left: "805px", top: "555px" }}
              />
              107.0054
            </td>
            <td className="table-line">813 mins</td>
          </tr>
          <tr className="table-row">
            <td></td>
            <td>Pump 5 / Drivetrain</td>
            <td>bar</td>
            <td>'17 Jan 30, 8:44</td>
            <td>
              <span
                className="graph2"
                style={{ left: "675px", top: "610px" }}
              ></span>
              69.4460
            </td>
            <td>'17 Jan 30, 8:44</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  }
}
