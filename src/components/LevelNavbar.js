import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Timer from "./Timer";
import "../styles/LevelNavbar.css";
import icon from "../assets/icon.png";

const LevelNavbar = ({ characters }) => (
  <div className="level-navbar">
    <div className="nav-items">
      <Link to="/">
        <img className="icon" src={icon} alt="" />
      </Link>
      <div className="character-icons">
        {characters.map((character) => (
          <img
            key={character.id}
            className={character.name}
            src={require(`../assets/${character.image}`)}
            alt=""
          />
        ))}
      </div>

      <Link to="/">Return to home</Link>
    </div>
  </div>
);

LevelNavbar.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      x: PropTypes.number,
      y: PropTypes.number,
      image: PropTypes.string,
    })
  ).isRequired,
};

export default LevelNavbar;
