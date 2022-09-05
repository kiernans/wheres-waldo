import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LevelNavbar from "../components/LevelNavbar";
import {
  getCoordinatesFromImage,
  compareLevelCoordinatesWithChoice,
  removeCharacterFromLevels,
  showDropdown,
} from "../helpers/LevelHelper";
import "../styles/Level.css";
import Dropdown from "../components/Dropdown";
import { levels } from "../assets/levels";

const Level = ({ image, level }) => {
  const [choiceCoords, setChoiceCoords] = useState({ x: null, y: null });
  const [choiceName, setChoiceName] = useState("");
  const [characters, setCharacters] = useState([]);

  const handleImageOnClick = (e) => {
    const newCoords = getCoordinatesFromImage(e);
    console.log(newCoords);
    setChoiceCoords(newCoords);
    showDropdown(newCoords);
  };

  const handleMenuClick = (e) => {
    // Get choiceName from dropdown
    const name = e.target.innerHTML;
    setChoiceName(name);
    const result = compareLevelCoordinatesWithChoice(
      characters,
      choiceCoords,
      name
    );
    console.log(result);
    if (result) {
      setCharacters((prevChars) => removeCharacterFromLevels(prevChars, name));
    }
  };

  useEffect(() => {
    const currLevel = levels.filter((item) => item.level === level)[0];
    setCharacters(currLevel.characters);
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
  level: PropTypes.number.isRequired,
};

export default Level;
