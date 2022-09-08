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

const Level = ({ level, levels, initializeLevels }) => {
  const [choiceCoords, setChoiceCoords] = useState({ x: null, y: null });
  const [choiceName, setChoiceName] = useState("");
  const [characters, setCharacters] = useState([]);
  const currLevel = levels.filter((item) => item.level === level)[0];

  const handleImageOnClick = (e) => {
    const newCoords = getCoordinatesFromImage(e);
    console.log(newCoords);
    setChoiceCoords(() => newCoords);
    showDropdown(newCoords);
    if (!characters) {
      console.log("Finished!");
    }
  };

  const handleMenuClick = (e) => {
    // Get choiceName from dropdown
    const name = e.target.textContent;
    setChoiceName(() => name);
    console.log(name);
    console.log(choiceCoords);
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
    console.log("here");
    if (!levels) {
      console.log("now here");
      initializeLevels(JSON.parse(window.localStorage.getItem("levels")));
    }
  }, []);

  useEffect(() => {
    setCharacters(currLevel.characters);
    console.log(currLevel);
  }, []);

  return (
    <>
      <LevelNavbar characters={characters} />
      <div className="level-image">
        <img
          src={require(`../assets/${currLevel.image}`)}
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
  level: PropTypes.number.isRequired,
  levels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      characters: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          x: PropTypes.number,
          y: PropTypes.number,
        })
      ),
    })
  ).isRequired,
  initializeLevels: PropTypes.func.isRequired,
};

export default Level;
