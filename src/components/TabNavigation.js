import React, { Component } from "react";
import TabItem from "./tabs/TabItem";
import "./TabNavigation.css";

const tabItems = [
  {
    key: "overview",
    label: "Overview"
  },
  {
    key: "location",
    label: "Location (98)"
  },
  {
    key: "sensors",
    label: "Sensors"
  },
  {
    key: "log",
    label: "Log"
  },
  {
    key: "related",
    label: "Related"
  }
];

export default class TabNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "sensors"
    };
  }

  render() {
    return (
      <div class="header-nav">
        {tabItems.map(tab => {
          return (
            <TabItem
              label={tab.label}
              keyId={tab.key}
              selected={this.state.selected === tab.key}
            />
          );
        })}
      </div>
    );
  }
}
