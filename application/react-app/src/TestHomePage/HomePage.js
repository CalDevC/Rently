import { useRef } from "react";
import React from "react";
import classes from "./HomePage.module.css";

class Home extends Component {
  state = {
    home: {}
  }

  componentDidMount(){
    fetch('/api/homepage')
    .then(res => res.json())
    .then(res => this.setState({ home: res}));
  }
  render(){
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <h1>Rently</h1>
      <div className={classes.control}>
        <label htmlFor="Username">Username:</label>
        <input type="text" required id="username" ref={usernameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="Password">Password:</label>
        <input type="text" required id="username" ref={passwordInputRef} />
      </div>
      <div>
        <button>Log in</button>
      </div>
      <div>
        <button>Retrieve</button>
      </div>
      <h3> Registered User:</h3>
      <h3> Address: </h3>
      <h3> Password: </h3>
      <h3>Time:</h3>
      <h3>Price & Penalty:</h3>
      <h3>Location:</h3>
      <h3>Equipment Category:</h3>
    </form>
  );
  }
}

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
  }
export default HomePage;
