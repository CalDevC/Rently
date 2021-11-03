import { Component } from "react";
import React from "react";

class Registration extends Component {
    constructor() {
        super();
        this.usernameInputRef = React.createRef();
        this.passwordInputRef = React.createRef();
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
    
        fetch('/api/account/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: 'jay',
            password: '56789',
            email: "123@mail.com"
          })
        })
        .then(response => response.json())
        .then(res => {
          console.log('Response Received:', res);
          this.setState({ data: res });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      }
    render(){
        return(
            <div>
                <div className="header" id="page_header">
                    <h1>Create An Account</h1> 
                </div>
                <div>
                    <form onSubmit={this.submitHandler}>
                        <label>Enter a Username</label>
                        <input type="text" id="input_username" required name="username"/>
                        <br />
                        <label>Email</label>
                        <input type="email" id="input_email" required name="email"/>
                        <br />
                        <label>Enter Password</label>
                        <input type="password" id="input_password" required name="password"/>
                        <br />
                        <label>Confirm Password</label>
                        <input type="password" id="input_passwordConfirm" required name="cpassword"/>
                        <button type="submit" id="submit">Create Account</button>
                        <button type="cancel" id="cancel">Cancel</button> 
                        <div id ="error"></div>
                        <div id = "success"></div> 
                    </form>
                </div>
            </div>
        
        );
    }

}

export default Registration;