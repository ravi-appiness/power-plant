import React, { Component } from "react";
import SidebarHeader from "../components/sidebar/SidebarHeader";
import RoomItem from "../components/sidebar/RoomItem";
import { sidebarRooms } from "../data/SidebarRoomsData";
import './SideBar.css';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 2
    };
  }
  
  render() {
    return (
      <div className="menu">
        <SidebarHeader />
        <ul className="menu-list">
          {sidebarRooms.map(roomItem => {
            return (
              <RoomItem
                roomInfo={roomItem}
                selected={this.state.selected === roomItem.id ? true : false}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
