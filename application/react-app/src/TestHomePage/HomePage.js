import { Component } from "react";
import React from "react";
import classes from "./HomePage.module.css";

class HomePage extends Component {
  constructor() {
    super();
    this.usernameInputRef = React.createRef();
    this.passwordInputRef = React.createRef();
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      username: "test",
      equipmentCategory: "outdoor",
      data: {},
    };
  }

  submitHandler(event) {
    event.preventDefault();

    // const enteredUsername = this.usernameInputRef.current.value;
    // const enteredPassword = this.passwordInputRef.current.value;

    // const userData = {
    //   username: enteredUsername,
    //   password: enteredPassword,
    // };
    fetch("/api/homepage")
      .then((res) => res.json())
      .then((res) => this.setState({ data: res }));

    // console.log(userData);
  }

  render() {
    return (
      <form className={classes.form} onSubmit={this.submitHandler}>
        <h1>Rently</h1>
        <div className={classes.control}>
          <label htmlFor="Username">Username:</label>
          <input
            type="text"
            // required
            id="username"
            // ref={this.usernameInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="Password">Password:</label>
          <input
            type="text"
            // required
            id="username"
            // ref={this.passwordInputRef}
          />
        </div>
        <div>
          <button>Log in</button>
        </div>
        <div>
          <button>Retrieve</button>
        </div>
        <h3> Registered User</h3>
        <h4> Username : {this.state.data.username} </h4>
        <h4> Address : {this.state.data.address} </h4>
        <h4> Password : {this.state.data.password}</h4>
        {/* <h3>Time: </h3> */}
        {/* <h3>Price & Penalty:</h3> */}
        {/* <h3>Location: </h3> */}
        <h4>Date of Birth : {this.state.data.dob}</h4>
        <h3>Equipment Category :{this.state.data.equipmentCategory}</h3>
      </form>
    );
  }
}

export default HomePage;
