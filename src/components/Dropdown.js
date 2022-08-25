import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/Dropdown.css";

const Dropdown = ({ id, names, choice }) => {
  const showDropdown = (xPos, yPos) => {
    const dropdown = document.querySelector(".dropdown");
    dropdown.style.visibility = "visible";
    dropdown.style.left = `${xPos + 25}px`;
    dropdown.style.top = `${yPos + 40}px`;
  };

  useEffect(() => showDropdown(choice.x, choice.y), [choice]);

  return (
    <ul className="dropdown">
      {names.map((name) => (
        <li key={id} className="menu-items">
          {name}
        </li>
      ))}
    </ul>
  );
};

Dropdown.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
  choice: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Dropdown;
