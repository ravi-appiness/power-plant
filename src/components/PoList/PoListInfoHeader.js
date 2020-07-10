import React from "react";
import "./PoListInfoHeader.css";

export default function PoListInfoHeader() {
  return (
    <div>
      <table className="table-info-container">
        <thead>
          <tr>
            <th>Priority</th>
            <th>Condition</th>
            <th>Time To Failure</th>
            <th>Probability</th>
            <th>Time To Repair</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                style={{
                  background: "rgba(8, 28, 40, 0.5)",
                  width: "45px",
                  borderRadius: "2px"
                }}
              >
                <img
                  alt="flag mark"
                  src={require("../../assets/flag.png")}
                  style={{ width: "9px", marginLeft: "5px" }}
                />
                <span
                  className="po"
                  style={{ width: "9px", paddingLeft: "5px" }}
                >
                  PO
                </span>
              </div>
            </td>
            <td>Critical</td>
            <td>16 days</td>
            <td>80%</td>
            <td>11 days</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
