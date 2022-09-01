import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LevelNavbar from "../components/LevelNavbar";
import {
  getCoordinatesFromImage,
  compareLevelCoordinatesWithChoice,
  removeCharacterFromLevels,
} from "../helpers/LevelHelper";
import "../styles/Level.css";
import Dropdown from "../components/Dropdown";
import { levels } from "../assets/levels";

const Level = ({ image }) => {
  const [choiceCoords, setChoiceCoords] = useState({ x: null, y: null });
  const [choiceName, setChoiceName] = useState("");
  const [characters, setCharacters] = useState([]);

  const { level } = levels;

  const handleImageOnClick = (e) => {
    setChoiceCoords(getCoordinatesFromImage(e));
  };

  const handleMenuClick = (e) => {
    // Get choiceName from dropdown
    const name = e.target.innerHTML;
    setChoiceName(name);
    const result = compareLevelCoordinatesWithChoice(
      levels,
      choiceCoords,
      name
    );
    if (result) {
      setCharacters((prevChars) => removeCharacterFromLevels(prevChars, name));
    }
  };

  useEffect(() => {
    setCharacters(levels.characters);
  }, []);

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
        choiceCoords={choiceCoords}
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
