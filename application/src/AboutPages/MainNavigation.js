import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header>
      <div>About Me</div>
      <h2>Team 1 </h2>
      <p> CSC 648 Software Engineering </p>
      <p> Project Rental Application </p>
      <p>Professor Isabel</p>
      <p>Communication : Discord, Weekly Meeting Wednesday 4pm</p>
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
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
