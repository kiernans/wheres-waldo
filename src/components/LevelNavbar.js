import React from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer";
import "../styles/LevelNavbar.css";

const LevelNavbar = () => (
  <div className="level-navbar">
    <div className="nav-items">
      <Timer />
      <Link to="/">Return to home</Link>
    </div>
  </div>
);

export default LevelNavbar;
