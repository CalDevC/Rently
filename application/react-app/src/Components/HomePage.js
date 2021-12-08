import { Component } from 'react';
import React from 'react';
import  '../CSS/HomePage.module.css';
import styles from '../CSS/Registration.module.css';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  constructor() {
    super();
    this.usernameInputRef = React.createRef();
    this.passwordInputRef = React.createRef();
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      username: 'test',
      equipmentCategory: 'outdoor',
      data: {
        username: '',
        email: '',
        password: '',
        dob: '',
        address: '',
        zipCode: '',
        equipmentCategory: '',
      },
    };
  }

  submitHandler(event) {
    event.preventDefault();
    fetch('/api/homepage')
      .then((res) => res.json())
      .then((res) => this.setState({ data: res }));
  }

  render() {
    let data = this.state.data;
    return (
      <div>
        <h1 className={styles.rently}>Your One-Of-A-Kind Rental Experience Starts Here.</h1>
      
          <form className="optionCard">
            <p>Looking to Rent? Renly offers a wide variety of rentals. Without the middle man.</p>
            <Link to="/Categories">Find Your Perfect Fit.</Link>
          </form>
            <form className="optionCard">
            <p>Want to Rent Out Your Own Item?</p>
  
                <Link to="/CreateListing">Create A Listing.</Link>
            </form>
      </div>
  
    );
  }
}

export default HomePage;
