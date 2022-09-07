import React from "react";
import { Link } from "react-router-dom";
import level1 from "../assets/level1-small.jpg";
import level2 from "../assets/level2-small.jpg";
import level3 from "../assets/level3-small.jpg";
import MainNavbar from "../components/MainNavbar";
import "../styles/MainPage.css";

const MainPage = () => (
  <>
    <MainNavbar />
    <div className="items">
      <Link to="level1" className="item">
        <img src={level1} alt="" />
        Level 1
      </Link>
      <Link to="level2" className="item">
        <img src={level2} alt="" />
        Level 2
      </Link>
      <Link to="level3" className="item">
        <img src={level3} alt="" />
        Level 3
      </Link>
    </div>
  </>
);

export default MainPage;
