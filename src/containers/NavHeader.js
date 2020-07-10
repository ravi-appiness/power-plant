import React from "react";
import BreadCrumb from "../components/navHeader/BreadCrumb";
import TabNavigation from "../components/TabNavigation";
import User from "../components/navHeader/User";
import TitleBar from "../components/navHeader/TitleBar";
import "./NavHeader.css";

class NavHeader extends React.Component {
  render() {
    return (
      <div className="nav-header">
        <BreadCrumb />
        <User />
        <TitleBar />
        <TabNavigation />
      </div>
    );
  }
}

export default NavHeader;
