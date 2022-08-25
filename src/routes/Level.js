import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LevelNavbar from "../components/LevelNavbar";
import useLevelHelper from "../hooks/useLevelHelper";
import "../styles/Level.css";
import Dropdown from "../components/Dropdown";

const Level = ({ image }) => {
  const [choice, setChoice] = useState({ x: 0, y: 0 });

  const {
    getCoordinatesFromImage,
    answer,
    compareAnswerCoordinatesWithChoice,
  } = useLevelHelper();

  const { id, level, names } = answer;

  const handleOnClick = (e) => {
    setChoice(getCoordinatesFromImage(e));
  };

  useEffect(() => {
    console.log(choice);
    console.log(compareAnswerCoordinatesWithChoice(answer, choice));
  }, [choice]);

  return (
    <>
      <LevelNavbar />
      <div className="level-image">
        <img src={image} alt="" onClick={handleOnClick} aria-hidden="true" />
        {level}
      </div>
      <Dropdown id={id} names={names} choice={choice} />
    </>
  );
};

Level.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Level;
