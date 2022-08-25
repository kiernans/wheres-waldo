import React from "react";
import PropTypes from "prop-types";
import LevelNavbar from "../components/LevelNavbar";
import useLevelHelper from "../hooks/useLevelHelper";
import "../styles/Level.css";

const Level = ({ image, level, characters }) => {
  const {
    getCoordinatesFromImage,
    answer,
    compareAnswerCoordinatesWithChoice,
  } = useLevelHelper();

  const handleOnClick = (e) => {
    const choice = getCoordinatesFromImage(e);
    console.log(compareAnswerCoordinatesWithChoice(answer, choice));
  };

  return (
    <>
      <LevelNavbar />
      <div className="level-image">
        <img src={image} alt="" onClick={handleOnClick} aria-hidden="true" />
        {level}
        {characters}
      </div>
    </>
  );
};

Level.propTypes = {
  image: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  characters: PropTypes.string.isRequired,
};

export default Level;
