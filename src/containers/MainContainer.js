import React, { Component } from "react";
import "../App.css";
import SideBar from "./SideBar";
import NavHeader from "./NavHeader";
import ThresholdContainer from "./ThresholdContainer";
import SensorInfo from "../components/SensorInfo";
import PoListDataGrid from "./PoListContainer";

export default class MainContainer extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <NavHeader />
        <div className="content">
          <SensorInfo />
          <ThresholdContainer />
          <PoListDataGrid/>
        </div>
      </div>
    );
  }
}
