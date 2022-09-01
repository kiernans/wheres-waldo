import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LevelNavbar from "../components/LevelNavbar";
import {
  getCoordinatesFromImage,
  compareAnswerCoordinatesWithChoice,
} from "../helpers/LevelHelper";
import "../styles/Level.css";
import Dropdown from "../components/Dropdown";
import { levels } from "../assets/levels";

const Level = ({ image }) => {
  const [choice, setChoice] = useState({ x: null, y: null });
  const [choiceName, setChoiceName] = useState("");

  const { level, characters } = levels;

  const handleImageOnClick = (e) => {
    setChoice(getCoordinatesFromImage(e));
  };

  const handleMenuClick = (e) => {
    // Get choiceName from dropdown
    const name = e.target.innerHTML;
    setChoiceName(name);
    const result = compareAnswerCoordinatesWithChoice(levels, choice, name);
  };

  return (
    <>
      <LevelNavbar />
      <div className="level-image">
        <img
          src={image}
          alt=""
          onClick={handleImageOnClick}
          aria-hidden="true"
        />
        {level}
      </div>
      <Dropdown
        characters={characters}
        choice={choice}
        choiceName={choiceName}
        handleMenuClick={handleMenuClick}
      />
    </>
  );
};

Level.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Level;
