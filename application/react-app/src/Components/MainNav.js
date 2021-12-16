import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from '../CSS/MainNavigation.module.css';
import "../CSS/MainNavigation.module.css";
import { withRouter } from 'react-router-dom';

//The main navigation for our application

class MainNavigation extends Component {
  constructor() {
    super();
    this.state = {
      logged: false
    }
    this.logOut = this.logOut.bind(this);
  }

  //Determine whether to display profile link
  profile() {
    if (localStorage.getItem("logged_in") == "true") {
      return <Link to="/Profile">Profile</Link>
    }
    else {
      return <p></p>
    }
  }

  //Determine whether to display log in or log out button
  loginBtn() {
    if (localStorage.getItem("logged_in") == "true") {
      return <a onClick={this.logOut} >Log out</a>
    }
    else {
      return <Link to="/LoginPage">Login</Link>
    }
  }

  //Determine whether to display list item button
  listItem() {
    if (localStorage.getItem("logged_in") == "true") {
      return <Link to="/CreateListing">List An Item</Link>
    }
    else {
      return <p></p>
    }
  }

  //Clear log in data
  logOut() {
    localStorage.setItem('logged_in', "false");
    localStorage.removeItem('user');
    this.props.history.push('/LoginPage');
  }

  //Determine whether to display registration button
  register() {
    if (localStorage.getItem("logged_in") == "true") {
      return <p></p>
    }
    else {
      return <Link to="/Registration">Register</Link>
    }
  }

  render() {
    return (
      <header>
        <nav className="nar_bar">
          <h1 className={classes.logo}>
            <Link to="/"><p>Rently</p></Link>
          </h1>
          <ul className={classes.ul}>
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/Categories">Search By Category</Link>
            </li>

            <li>
              {this.listItem()}
            </li>

            <li>
              {this.register()}
            </li>

            <li>
              {this.loginBtn()}
            </li>

            <li>
              {this.profile()}
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}


export default withRouter(MainNavigation);

