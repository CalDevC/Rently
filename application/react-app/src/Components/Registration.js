import { Component } from 'react';
import React from 'react';
import styles from '../CSS/Registration.module.css';
import stylees from '../CSS/Post.module.css';

class Registration extends Component {
  constructor() {
    super();
    this.usernameInputRef = React.createRef();
    this.passwordInputRef = React.createRef();
    this.emailInputRef = React.createRef();
    this.dobInputRef = React.createRef();
    this.addressInputRef = React.createRef();
    this.zipCodeInputRef = React.createRef();
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      data: {
        status: '',
        msg: '',
      },
    };
  }

  //When registration button is clicked
  submitHandler(event) {
    event.preventDefault();

    fetch('/api/account/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.usernameInputRef.value,
        password: this.passwordInputRef.value,
        email: this.emailInputRef.value,
        dob: this.dobInputRef.value,
        address: this.addressInputRef.value,
        zipCode: this.zipCodeInputRef.value,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log('Response Received:', res);
        this.setState({ data: res }, this.routeChange);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }

  //Alert user of registration status
  routeChange() {
    console.log(this.state.data.status);
    if (this.state.data.status == 'bad') {
      window.alert('Problem registering your account. Please try again later...');  //Stay on page and alert if bad
    } else if (this.state.data.status == 'ok') {
      window.alert('Successfully Registered!');  //Alert if good
      window.location.href = '/LoginPage';  //Redirect
    }
  }

  render() {
    return (
      <div>
        <div className="header" id="page_header">
          <h1 className={styles.create}>Create An Account</h1>
        </div>

        <div>
          <form onSubmit={this.submitHandler}>
            <div className={stylees.username}>
              <label className={styles.name}>Username:</label>
              <input
                type="text"
                id="input_username"
                required
                name="username"
                ref={(node) => (this.usernameInputRef = node)}
              />
            </div>

            <div className={stylees.username}>
              <label>Email:</label>
              <input
                type="email"
                id="input_email"
                required
                name="email"
                ref={(node) => (this.emailInputRef = node)}
              />
            </div>

            <div className={stylees.username}>
              <label>Password:</label>
              <input
                type="password"
                id="input_password"
                required
                name="password"
                ref={(node) => (this.passwordInputRef = node)}
              />
            </div>

            <div className={stylees.username}>
              <label>Confirm Password:</label>
              <input
                type="password"
                id="input_passwordConfirm"
                required
                name="cpassword"
              />
            </div>

            <div className={stylees.username}>
              <label>Date of Birth:</label>
              <input
                type="Text"
                id="input_birth"
                required
                name="birth"
                ref={(node) => (this.dobInputRef = node)}
              />
            </div>

            <div className={stylees.username}>
              <label>Street Address:</label>
              <input
                type="text"
                id="input_address"
                required
                name="address"
                ref={(node) => (this.addressInputRef = node)}
              />
            </div>

            <div className={stylees.username}>
              <label>Zip Code:</label>
              <input
                type="text"
                id="input_zip"
                required
                name="zip"
                ref={(node) => (this.zipCodeInputRef = node)}
              />
            </div>
            <div className={stylees.username}>
              <button type="submit" id="submit">
                Create Account
              </button>
            </div>

            <div className={styles.username}>
              <label style={{ fontSize: '10pt', paddingTop: '6px', paddingRight: '0' }}>Already have an account? </label>
              <a style={{ fontSize: '10pt', color: '#1160C6', cursor: 'pointer', textDecoration: 'underline' }} href='/LoginPage'>Log in Here</a>
            </div>

            <div id="error"></div>
            <div id="success"></div>
          </form>
        </div>
      </div>
    );
  }
}

export default Registration;
