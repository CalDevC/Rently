import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header>
      <h1>About Me</h1>
      <p> CSC 648 Software Engineering SFSU </p>
      <p> Fall 2021 </p>
      <p> Section 1 </p>
      <p>Team 1</p>
      <nav>
        <ul className={classes.ul}>
          <li>
            <Link to="/Yuhang-Lee">Yuhang-Lee</Link>
          </li>
          <li>
            <Link to="/ChuCheng-Situ">ChuCheng-Situ</Link>
          </li>
          <li>
            <Link to="/Benjamin-McCullough">Benjamin-McCullough</Link>
          </li>
          <li>
            <Link to="/Chase-Alexander">Chase Alexander</Link>
          </li>
          <li>
            <Link to="/Lauren-Barer">Lauren Barer</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
