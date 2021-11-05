import { Component } from "react";
import React from "react";

class ProfilePage extends Component {
  constructor() {
    super();
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

    fetch("/api/account/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.usernameInputRef,
        password: this.passwordInputRef,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("Response Received: ", res);
        this.setState({ data: res });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <h1>Rently</h1>
        <div>
          <label htmlFor="Username">Username:</label>
        </div>
        <div>
          <label htmlFor="Name">Name:</label>
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
        </div>
        <label htmlFor="Picture">Picture</label>
        <div>
          <img src="images/Member1.jpg" width={200} alt="" />
        </div>
        <div>
          <button>Save</button>
        </div>
      </form>
    );
  }
}

export default ProfilePage;
