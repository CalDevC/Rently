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


   loginBtn() {
      let logged = localStorage.getItem("logged_in");
      if (logged) {
	 return <a onClick={this.logOut} >Log out</a>
      }
      else {
	 return <Link to="/LoginPage">Login</Link>
      }
   }


   logOut() {
      localStorage.removeItem('logged_in');
      localStorage.removeItem('user');
      localStorage.removeItem('email');
      this.props.history.push('/LoginPage');
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
		    <Link to="/CreateListing">List An Item</Link>
		  </li>
		  <li>
		    <Link to="/Registration">Create An Account</Link>
		  </li>
		  <li>
		    {this.loginBtn()}
		  </li>
		  <li>
		    <Link to="/Profile">Profile</Link>
		  </li>
	       </ul>
	    </nav>
	 </header>
      );
   }
}


export default withRouter(MainNavigation);

