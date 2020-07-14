import React from "react";
import "./RowItem.css";
import { RiCheckboxLine, RiCheckboxBlankLine } from "react-icons/ri";

export default function RowItem(props) {
  return (
    <tr className={props.selected ? "new-row-selected" : "new-row"}>
      <td>
        <div>
          {props.selected ? <div className="selected-line" /> : null}
          {props.selected ? (
            <RiCheckboxLine className="new-checkbox" />
          ) : (
            <RiCheckboxBlankLine className="new-checkbox" />
          )}
        </div>
      </td>
      <td>
        <div className="row-1">{props.itemNo}</div>
        <div className="row-2"></div>
      </td>
      <td>
        <div className="row-1">Static pressure at pump outlet</div>
        <div className="row-2">Pump 5 / Drivetrain</div>
      </td>
      <td>
        <div className="row-1"></div>
        <div className="row-2">bar</div>
      </td>
      <td>
        <div className="row-1">
          <span className="graph1" />
          107.0054
        </div>
        <div className="row-2">'17 Jan 30, 8:44</div>
      </td>
      <td>
        <div className="row-1">
          <span className="graph1" />
          100.0000
        </div>
        <div className="row-2-graph">
          <span className="graph2" />
          69.4460
        </div>
      </td>
      <td>
        <div className="row-1">
          <span className="graph1" />
          107.0054
        </div>
        <div className="row-2">'17 Jan 30, 8:44</div>
      </td>
      <td>
        <div className="row-1">813 mins</div>
        <div className="row-2"></div>
      </td>
    </tr>
  );
}
