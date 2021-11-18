import { Component } from 'react';
import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from '../CSS/LoginPage.module.css';
import "../CSS/Registration.module.css";


class LoginPage extends Component {
   constructor() {
      super();
      this.usernameInputRef = React.createRef();
      this.passwordInputRef = React.createRef();
      this.submitHandler = this.submitHandler.bind(this);
      this.routeChange = this.routeChange.bind(this);
      this.routeChange2 = this.routeChange2.bind(this);
      this.state = {
         data: {
            status: "",
            msg: "",
            user: {}
         },
      };
   }
   submitHandler(event) {
      event.preventDefault();

      fetch('/api/account/login', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            username: this.usernameInputRef.value,
            password: this.passwordInputRef.value,
         }),
      })
         .then((response) => response.json())
         .then((res) => {
            console.log("Response Received: ", res);
            this.setState({ data: res }, this.storeUserInfo);
         })
         .catch((error) => {
            console.error('Error:', error);
         });
   }

   storeUserInfo() {
      if (this.state.data.status == "ok") {
         localStorage.setItem('user', this.state.data.user.userName);
         localStorage.setItem('email', this.state.data.user.email);
         localStorage.setItem('logged_in', true);
      }
   }

   routeChange() {
      let path = `/`;
      this.props.history.push(path);
   }
   routeChange2() {
      let path = `/Registration`;
      this.props.history.push(path);
   }

   render() {
      return (
         <div>
            <div className="header" id="page_header">
               <h1>Login</h1>
            </div>
            <form onSubmit={this.submitHandler}>
               <h1 className={styles.rently}>Rently</h1>
               <h2 className={styles.login}> Login </h2>
               <div>
                  <label htmlFor="Username">Username:</label>
                  <input
                     type="text"
                     id="username"
                     required
                     id="title"
                     ref={(node) => (this.usernameInputRef = node)}
                  />
               </div>
               <div>
                  <label htmlFor="Password">Password:</label>
                  <input
                     type="password"
                     id="password"
                     required
                     id="title"
                     ref={(node) => (this.passwordInputRef = node)}
                  />
               </div>
               <div>
                  <button>Log in</button>
               </div>
               <div>
                  <button onClick={this.routeChange2}>Create An Account?</button>
               </div>
            </form>
         </div>
      );
   }
}

export default withRouter(LoginPage);
