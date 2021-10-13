import { useRef } from "react";
import React from "react";
import Card from "./Card";
import classes from "./HomePage.module.css";

function HomePage() {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const userData = {
      username: enteredUsername,
      password: enteredPassword,
    };

    console.log(userData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="Username">Username:</label>
          <input type="text" required id="username" ref={usernameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="Password">Password:</label>
          <input type="text" required id="username" ref={passwordInputRef} />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </Card>
  );
}

export default HomePage;
