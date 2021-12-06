import { Component } from 'react';
import React from 'react';
import classes from '../CSS/HomePage.module.css';
import styles from '../CSS/Registration.module.css';

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
        <h1 className={styles.rently}>Rently</h1>
      </div>
    );
  }
}

export default HomePage;
