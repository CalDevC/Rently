import { Component } from 'react';
import React from 'react';
import styles from '../CSS/Profile.module.css';

class ProfilePage extends Component {
  constructor() {
    super();
    this.usernameInputRef = React.createRef();
    this.passwordInputRef = React.createRef();
    this.nameInputRef = React.createRef();
    this.emailInputRef = React.createRef();

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
    fetch('/api/account/getInfo')
      .then(res => res.json())
      .then(jsonRes => this.setState({ userInfo: jsonRes }))
      .catch((error) => {
        console.error('Error:', error);
      });
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

  render() {
    return (
      <div className={styles.profiles}>
        <div className="header" id="page_header">
          <h1 className={styles.profile}>Update Profile</h1>
        </div>
        <form onSubmit={this.submitHandler}>

          <div className={styles.username}>
            <label htmlFor="Username">Username:</label>
            <input type="text" id="username" required defaultValue={this.state.userInfo.username} ref={(node) => (this.usernameInputRef = node)} />
          </div>

          <div className={styles.username}>
            <label htmlFor="Password">Password:</label>
            <input type="password" id="password" required ref={(node) => (this.passwordInputRef = node)} />
          </div>

          <div className={styles.username}>
            <label htmlFor="Name">Name:</label>
            <input type="text" id="name" required ref={(node) => (this.nameInputRef = node)} />
          </div>

          <div className={styles.username}>
            <label htmlFor="Email">Email:</label>
            <input type="text" id="email" required ref={(node) => (this.emailInputRef = node)} />
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
