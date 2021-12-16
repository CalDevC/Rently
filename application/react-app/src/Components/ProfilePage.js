import { Component } from 'react';
import React from 'react';
import styles from '../CSS/Profile.module.css';

class ProfilePage extends Component {
  constructor() {
    super();
    this.usernameInputRef = React.createRef();
    this.passwordInputRef = React.createRef();
    this.nameInputRef = React.createRef();
    this.dobInputRef = React.createRef();
    this.emailInputRef = React.createRef();
    this.addressInputRef = React.createRef();
    this.zipCodeInputRef = React.createRef();

    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      data: {
        status: '',
        msg: '',
      },
      userInfo: {}
    };
  }

  componentDidMount() {
    if (localStorage.getItem('logged_in') == "true") {
      var user = localStorage.getItem('user');
      console.log("USER: ", user);

      fetch(`/api/account/getInfoByName`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: user
        }),
      })
        .then((res) => res.json())
        .then((jsonRes) => { console.log(jsonRes); this.setState({ userInfo: jsonRes }) })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      this.routeChange();
    }

  }

  routeChange() {
    window.location.href = '/LoginPage';
  }

  submitHandler(event) {
    event.preventDefault();

    fetch('/api/account/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.usernameInputRef.value,
        password: this.passwordInputRef.value,
        name: this.nameInputRef.value,
        email: this.emailInputRef.value,
        dob: this.dobInputRef.value,
        address: this.addressInputRef.value,
        zipCode: this.zipCodeInputRef.value,
        id: this.state.userInfo.RegisteredUser_ID
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log('Response Received: ', res);
        this.setState({ data: res });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  convertDate(date) {
    if (date) {
      date = date.toString().split("T")[0].split("-");
      return date[1] + "/" + date[2] + "/" + date[0];
    }

  }

  render() {
    return (
      <div className={styles.profiles}>
        <div className="header" id="page_header">
          <h1 className={styles.profile}>Update Profile</h1>
        </div>
        <form onSubmit={this.submitHandler}>
          <h1>{console.log(this.state.userInfo)}</h1>
          <div className={styles.username}>
            <label htmlFor="Username">Username:</label>
            <input type="text" id="username" required defaultValue={this.state.userInfo.userName} ref={(node) => (this.usernameInputRef = node)} />
          </div>

          <div className={styles.username}>
            <label htmlFor="Password">Password:</label>
            <input type="password" id="password" required defaultValue={this.state.userInfo.password} ref={(node) => (this.passwordInputRef = node)} />
          </div>

          <div className={styles.username}>
            <label htmlFor="Email">Email:</label>
            <input type="text" id="email" required defaultValue={this.state.userInfo.email} ref={(node) => (this.emailInputRef = node)} />
          </div>

          <div className={styles.username}>
            <label htmlFor="dob">Date of Birth:</label>
            <input type="text" id="email" required placeholder={"mm/dd/yyyy"} defaultValue={this.convertDate(this.state.userInfo.dob)} ref={(node) => (this.dobInputRef = node)} />
          </div>

          <div className={styles.username}>
            <label htmlFor="Address">Address:</label>
            <input type="text" id="address" required defaultValue={this.state.userInfo.address} ref={(node) => (this.addressInputRef = node)} />
          </div>

          <div className={styles.username}>
            <label htmlFor="zipCode">Zip Code:</label>
            <input type="text" id="zipCode" required defaultValue={this.state.userInfo.zipCode} ref={(node) => (this.zipCodeInputRef = node)} />
          </div>

          <div className={styles.username}>
            <button>Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ProfilePage;
