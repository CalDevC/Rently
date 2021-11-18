import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from '../CSS/MainNavigation.module.css';

class MainNavigation extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul className={classes.ul}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/LoginPage">Login Page</Link>
            </li>
            <li>
              <Link to="/Registration">Create An Account</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
            <li>
              <Link to="/Categories">Search By Category</Link>
            </li>
            <li>
              <Link to="/PostPage">Post New Item</Link>
            </li>
            <li>
              <Link to="/DisplayPage">Display</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default MainNavigation;
