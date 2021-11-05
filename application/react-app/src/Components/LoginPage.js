import { Component } from "react";
import React from "react";
import { withRouter } from "react-router-dom";

class LoginPage extends Component {
  constructor() {
    super();
    this.usernameInputRef = React.createRef();
    this.passwordInputRef = React.createRef();
    this.submitHandler = this.submitHandler.bind(this);
    this.routeChange = this.routeChange.bind(this);
    this.state = {
      data: {
        status: "",
        msg: "",
      },
    };
  }
  submitHandler(event) {
    event.preventDefault();

    fetch("/api/account/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.usernameInputRef.value,
        password: this.passwordInputRef.value,
      }),
    })
      .then((response) => response.text())
      .then((res) => {
        console.log("Response Received: ", res);
        this.setState({ data: res });

      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  routeChange() {
    let path = `/`;
    this.props.history.push(path);
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
            ref={node => (this.usernameInputRef = node)}
          />
        </div>
        <div>
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            id="password"
            required
            id="title"
            ref={node => (this.passwordInputRef = node)}
          />
        </div>
        <div>
          <button onClick={this.routeChange}>Log in</button>
        </div>
      </form>
    );
  }
}

export default withRouter(LoginPage);
