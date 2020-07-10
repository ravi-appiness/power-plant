import React from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import "./User.css";

export default function User() {
  return (
    <ul className="right-menu">
      <li className="right">
        <a href="#search">
          <FaSearch />
        </a>
      </li>
      <li>
        <a href="#profile">
          <FaUser />
        </a>
      </li>
    </ul>
  );
}
