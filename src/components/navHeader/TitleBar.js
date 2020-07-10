import React from "react";
import Dropdown from "./Dropdown";
import "./TitleBar.css";

export default function TitleBar() {
  return (
    <div className="title-div">
      <div className="webasto-airtop-2000">
        <p>Webasto AirTop 2000</p>
      </div>
      <Dropdown />
    </div>
  );
}
