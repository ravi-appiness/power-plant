import React from "react";

export default function TabItem(props) {
  return (
    <a
      href={`#${props.keyId}`}
      class={props.selected ? "active" : ""}
      key={props.keyId}
    >
      {props.label}
    </a>
  );
}
