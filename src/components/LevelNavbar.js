import React from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer";
import "../styles/LevelNavbar.css";
import icon from "../assets/icon.png";

const LevelNavbar = () => (
  <div className="level-navbar">
    <div className="nav-items">
      <Link to="/">
        <img src={icon} alt="" />
      </Link>
      {/* <Timer /> */}
      <Link to="/">Return to home</Link>
    </div>
  </div>
);

export default LevelNavbar;
