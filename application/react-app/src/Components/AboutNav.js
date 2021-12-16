import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../CSS/MainNavigation.module.css';
import styles from '../CSS/profiles.module.css';

//Navigation for about page

function AboutNav() {
  return (
    <header>
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

export default AboutNav;
