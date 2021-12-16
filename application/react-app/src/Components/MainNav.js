import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from '../CSS/MainNavigation.module.css';
import "../CSS/MainNavigation.module.css";
import { withRouter } from 'react-router-dom';


class MainNavigation extends Component {
  constructor() {
    super();
    this.state = {
      logged: false
    }
    this.logOut = this.logOut.bind(this);
  }


  profile() {
    if (localStorage.getItem("logged_in") == "true") {
      return <Link to="/Profile">Profile</Link>
    }
    else {
      return <p></p>
    }
  }

  loginBtn() {
    if (localStorage.getItem("logged_in") == "true") {
      return <a onClick={this.logOut} >Log out</a>
    }
    else {
      return <Link to="/LoginPage">Login</Link>
    }
  }

  listItem() {
    if (localStorage.getItem("logged_in") == "true") {
      return <Link to="/CreateListing">List An Item</Link>
    }
    else {
      return <p></p>
    }
  }


  logOut() {
    localStorage.setItem('logged_in', "false");
    localStorage.removeItem('user');
    localStorage.removeItem('email');
    this.props.history.push('/LoginPage');
  }

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

