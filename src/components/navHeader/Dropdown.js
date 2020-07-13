import React from "react";
import "./Dropdown.css";

export default function Dropdown() {
  return (
    <div className="option-menu">
      <select name="option" id="option">
        <option value="component actions">Component actions</option>
      </select>
    </div>
  );
}
