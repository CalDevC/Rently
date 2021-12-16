import { Component } from 'react';
import React from 'react';
import styles from '../CSS/HomePage.module.css';
import stylees from '../CSS/Registration.module.css';
import { Link } from 'react-router-dom';

//The homepage of our app

class HomePage extends Component {

  render() {
    return (
      <div>
        <h1 className={stylees.rently}>Your One-Of-A-Kind Rental Experience Starts Here.</h1>
        <div className={styles.cardHolder}>
          <div className={styles.optionCard}>
            <div className={styles.optionHead}>
              <p>Looking to Rent? Renly offers a wide variety of rentals. Without the middle man.</p>
            </div>
            <div className={styles.optionLink}>
              <Link to="/Categories">Find Your Perfect Fit.</Link>
            </div>
          </div>
          <div className={styles.optionCard}>
            <div className={styles.optionHead}>
              <p>Want to Rent Out Your Own Item?</p>
            </div>
            <div className={styles.optionLink}>
              <Link to="/CreateListing">Create A Listing.</Link>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default HomePage;
