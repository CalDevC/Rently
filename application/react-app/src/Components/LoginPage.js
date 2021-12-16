import { Component } from 'react';
import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from '../CSS/LoginPage.module.css';
import stylees from '../CSS/Post.module.css';

//A page for existing users to log in

class LoginPage extends Component {
  constructor() {
    super();
    this.usernameInputRef = React.createRef();
    this.passwordInputRef = React.createRef();
    this.submitHandler = this.submitHandler.bind(this);
    this.routeChange = this.routeChange.bind(this);

    this.state = {
      data: {
        status: '',
        msg: '',
        user: {},
      },
    };
  }

  //Function for form submission
  submitHandler(event) {
    event.preventDefault();

    //Attempt to log in user
    fetch('/api/account/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        //Send username and password
        username: this.usernameInputRef.value,
        password: this.passwordInputRef.value,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log('Response Received: ', res);
        this.setState({ data: res }, this.storeUserInfo);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  //Set log in status and current user
  storeUserInfo() {
    if (this.state.data.status == 'ok') {
      localStorage.setItem('user', this.state.data.user.userName);
      localStorage.setItem('logged_in', true);
    }
    this.routeChange(); //Redirect
  }

  //Alert user of log in status
  routeChange() {
    if (this.state.data.status == 'bad') {
      window.alert('Invalid username or password');  //Stay on page and alert if bad
    } else if (this.state.data.status == 'ok') {
      window.alert(this.usernameInputRef.value + ' is logged in');  //Alert if good
      let path = `/Categories`;
      this.props.history.push(path);  //Redirect
    }
  }

  render() {
    return (
      <div>

        <div className="header" id="page_header">
          <h1 className={styles.head}>Hello! Login Here.</h1>
        </div>

        <form onSubmit={this.submitHandler}>

          <div className={stylees.username}>
            <label htmlFor="Username">Username:</label>
            <input
              type="text"
              id="username"
              required
              id="title"
              ref={(node) => (this.usernameInputRef = node)}
            />
          </div>

          <div className={stylees.username}>
            <label htmlFor="Password">Password:</label>
            <input type="password" id="password" required id="title" ref={(node) => (this.passwordInputRef = node)} />
          </div>

          <div className={styles.username}>
            <button>Log in</button>
          </div>

          <div className={styles.username}>
            <label style={{ fontSize: '10pt', paddingTop: '6px', paddingRight: '0' }}>Don't have an account? </label>
            <a style={{ fontSize: '10pt', color: '#1160C6', cursor: 'pointer', textDecoration: 'underline' }} href='/Registration'>Register Here</a>
          </div>

        </form >
      </div >
    );
  }
}

export default withRouter(LoginPage);
