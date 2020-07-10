import React, { Component } from "react";
import "./PoListContainer.css";
import PoListInfoHeader from "../components/PoList/PoListInfoHeader";
import PoListDataGrid from "./PoListDataGrid";

export default class PoListContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <PoListInfoHeader />
        <PoListDataGrid />
      </React.Fragment>
    );
  }
}
