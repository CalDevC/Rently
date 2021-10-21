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
      data: {
        username: "",
        email: "",
        password: "",
        dob: "",
        address: "",
        zipCode: "",
        equipmentCategory: ""
      },
    };
  }

  submitHandler(event) {
    event.preventDefault();
    fetch("/api/homepage")
      .then((res) => res.json())
      .then((res) => this.setState({ data: res }));
  }

  render() {
    let data = this.state.data;
    return (
      <form className={classes.form} onSubmit={this.submitHandler}>
        <h1>Rently</h1>
        {/* ===== CREDENTIAL FIELDS ===== */
        
        /*<div className={classes.control}>
          
          <label htmlFor="Username">Username:</label>
          <input
            type="text"
            id="username"
          // ref={this.usernameInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="Password">Password:</label>
          <input
            type="text"
            id="username"
          // ref={this.passwordInputRef}
          />
        </div>
        <div>
          <button>Log in</button>
        </div> */}

        <div>
          <button>Retrieve</button>
        </div>
        <h3> Registered User </h3>
        <h4> Username : {data.username} </h4>
        <h4> Email : {data.email} </h4>
        <h4> Password : {data.password}</h4>
        <h4>Date of Birth : {data.dob.split('T')[0]}</h4>
        <h4> Address : {data.address} </h4>
        <h4> Zip Code : {data.zipCode} </h4>
        <br />
        <h3> Posting Category </h3>
        <h4>Equipment Category : {data.equipmentCategory}</h4>
      </form>
    );
  }
}

export default HomePage;
