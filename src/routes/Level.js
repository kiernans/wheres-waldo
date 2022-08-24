import React from "react";
import LevelNavbar from "../components/LevelNavbar";
import "../styles/Level.css";

const Level = ({ image, level, characters }) => (
  <>
    <LevelNavbar />
    <div className="level-image">
      <img src={image} alt="" />
    </div>
  </>
);

export default Level;
