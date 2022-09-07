import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/Dropdown.css";

const Dropdown = ({
  characters,
  choiceCoords,
  handleMenuClick,
  choiceName,
}) => {
  useEffect(() => {
    const menuItems = document.querySelectorAll(".menu-items");
    menuItems.forEach((item) => {
      item.addEventListener("click", handleMenuClick);
    }, []);
  });

  return (
    <ul className="dropdown">
      {characters.map((character) => (
        <li key={character.id} className="menu-items">
          <img src={require(`../assets/${character.image}`)} alt="" />
          {character.name}
        </li>
      ))}
    </ul>
  );
};

Dropdown.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      x: PropTypes.number,
      y: PropTypes.number,
      image: PropTypes.string,
    })
  ).isRequired,
  choiceCoords: PropTypes.objectOf(PropTypes.number).isRequired,
  handleMenuClick: PropTypes.func.isRequired,
  choiceName: PropTypes.string.isRequired,
};

export default Dropdown;
