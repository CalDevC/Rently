import { Component } from "react";
import React from "react";
import "../CSS/Registration.module.css";

class Registration extends Component {
  constructor() {
    super();
    this.usernameInputRef = React.createRef();
    this.passwordInputRef = React.createRef();
    this.emailInputRef = React.createRef();
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      data: {
        status: "",
        msg: "",
      },
    };
  }
  submitHandler(event) {
    event.preventDefault();

    fetch("/api/account/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.usernameInputRef.value,
        password: this.passwordInputRef.value,
        email: this.emailInputRef.value,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("Response Received:", res);
        this.setState({ data: res });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  render() {
    return (
      <div>
        <div className="header" id="page_header">
          <h1>Create An Account</h1>
        </div>
        <div>
          <form onSubmit={this.submitHandler}>
            <div>
            <label>Enter Your Street Adress:</label>
            <input
              type="text"
              id="input_address"
              required
              name="adress"
            />
            </div>
            <div>
            <label>Enter Your 5 Digit Zip Code:</label>
            <input
              type="text"
              id="input_zip"
              required
              name="zip"
            />
            </div>
            <div>
            <label>Enter Your Date of Birth:</label>
            <input
              type="Text"
              id="input_birth"
              required
              name="birth"
            />
            </div>
            <div>
            <label>Enter a Username:</label>
            <input
              type="text"
              id="input_username"
              required
              name="username"
              ref={(node) => (this.usernameInputRef = node)}
            />
            </div>
            <div>
            <label>Email:</label>
            <input
              type="email"
              id="input_email"
              required
              name="email"
              ref={(node) => (this.emailInputRef = node)}
            />
            </div>
            <div>
            <label>Enter Password:</label>
            <input
              type="password"
              id="input_password"
              required
              name="password"
              ref={(node) => (this.usernameInputRef = node)}
            />
            </div>
            <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              id="input_passwordConfirm"
              required
              name="cpassword"
            />
            </div>
            <button type="submit" id="submit">
              Create Account
            </button>
            <button type="cancel" id="cancel">
              Cancel
            </button>
            <div id="error"></div>
            <div id="success"></div>
          </form>
        </div>
      </div>
    );
  }
}

export default Registration;
