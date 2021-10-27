import { Component } from "react";
import React from "react";

class LoginPage extends Component {
  constructor() {
    super();
    this.usernameInputRef = React.createRef();
    this.passwordInputRef = React.createRef();
    this.submitHandler = this.submitHandler.bind(this);
  }
  submitHandler(event) {
    event.preventDefault();
    fetch("/api/homepage")
      .then((res) => res.json())
      .then((res) => this.setState({ data: res }));
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <h1>Rently</h1>
        <div>
          <label htmlFor="Username">Username:</label>
          <input
            type="text"
            id="username"
            required
            id="title"
            // ref={this.usernameInputRef}
          />
        </div>
        <div>
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            id="password"
            required
            id="title"
            // ref={this.passwordInputRef}
          />
        </div>
        <div>
          <button>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginPage;
