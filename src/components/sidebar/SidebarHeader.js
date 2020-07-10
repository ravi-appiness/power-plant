import React from "react";
import { MdHome } from "react-icons/md";
import "./SidebarHeader.css";

export default function SidebarHeader() {
  return (
    <div>
      <div className="icon">
        <MdHome />
      </div>
      <div className="power-plant">Power Plant</div>
      <div className="menu-nav">
        <span className="new-to-review">New For Review</span>
        <span className="number">3</span>
      </div>
    </div>
  );
}
