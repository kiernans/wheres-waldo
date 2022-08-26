import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/Dropdown.css";

const Dropdown = ({ characters, choice, handleMenuClick, choiceName }) => {
  const showDropdown = (xPos, yPos) => {
    const dropdown = document.querySelector(".dropdown");
    if (xPos) dropdown.style.visibility = "visible";
    dropdown.style.left = `${xPos + 25}px`;
    dropdown.style.top = `${yPos + 40}px`;
  };

  useEffect(() => {
    const menuItems = document.querySelectorAll(".menu-items");
    menuItems.forEach((item) => {
      item.addEventListener("click", handleMenuClick);
    }, []);
  });

  useEffect(() => showDropdown(choice.x, choice.y), [choice]);

  return (
    <ul className="dropdown">
      {characters.map((character) => (
        <li key={character.id} className="menu-items">
          {character.name}
        </li>
      ))}
    </ul>
  );
};

Dropdown.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })
  ).isRequired,
  choice: PropTypes.objectOf(PropTypes.number).isRequired,
  handleMenuClick: PropTypes.func.isRequired,
  choiceName: PropTypes.string.isRequired,
};

export default Dropdown;
