import React from "react";
import { FaStar } from "react-icons/fa";
import "./RoomItem.css";
export default function RoomItem(props) {
  const { roomInfo } = props;
  return (
    <li className={props.selected ? "active-room-item" : "room-item"}>
      <div>
        <div className="star">
          <FaStar className="fa" />
        </div>
        <div className="heading">
          <ul class="item-breadcrumb">
            <li>
              <a href="#boilerplate">{roomInfo.room_name}</a>
            </li>
            <li>
              <a href="#pump5">{roomInfo.pump_name}</a>
            </li>
          </ul>
        </div>
        <div>
          <span className="dot"></span>
          <span className={props.selected ? "activeText" : "text"}>
            {roomInfo.title}
          </span>
        </div>
        <div className="flag">
          <img
            className="flagImg"
            alt="flag mark"
            src={require("../../assets/flag.png")}
            style={{ width: "9px", marginLeft: "5px" }}
          />
          <span className="po" style={{ width: "9px", paddingLeft: "5px" }}>
            PO
          </span>
        </div>
      </div>
    </li>
  );
}
