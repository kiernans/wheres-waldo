import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LevelNavbar from "../components/LevelNavbar";
import useLevelHelper from "../hooks/useLevelHelper";
import "../styles/Level.css";
import Dropdown from "../components/Dropdown";

const Level = ({ image }) => {
  const [choice, setChoice] = useState({ x: null, y: null });
  const [choiceName, setChoiceName] = useState("");

  const {
    getCoordinatesFromImage,
    answer,
    compareAnswerCoordinatesWithChoice,
  } = useLevelHelper();

  const { level, characters } = answer;

  const handleImageOnClick = (e) => {
    setChoice(getCoordinatesFromImage(e));
  };

  const handleMenuClick = (e) => {
    setChoiceName(e.target.innerHTML);
  };

  useEffect(() => {
    if (choiceName) {
      console.log(compareAnswerCoordinatesWithChoice(choice, choiceName));
      setChoiceName("");
    }
  }, [choiceName]);

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
